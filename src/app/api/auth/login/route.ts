import { scryptSync, timingSafeEqual } from "node:crypto";
import { hasDatabase, getDb, ensureUsersTable } from "@/lib/db";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function verifyPwd(password: string, stored: string): boolean {
  try {
    const [salt, hash] = stored.split(":");
    const derived = scryptSync(password, salt, 64);
    return timingSafeEqual(derived, Buffer.from(hash, "hex"));
  } catch {
    return false;
  }
}

function bad(msg: string, status = 400) {
  return Response.json({ error: msg }, { status });
}

export async function POST(req: Request) {
  if (!hasDatabase) return bad("Service unavailable", 503);

  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return bad("Permintaan tidak valid");
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const password = body.password ?? "";

  if (!EMAIL_RE.test(email) || !password) return bad("Email dan kata sandi wajib diisi");

  try {
    await ensureUsersTable();
    const sql = getDb();

    const rows = await sql`
      SELECT id, password_hash, first_name, last_name
      FROM kopedu_users WHERE email = ${email}
    `;

    const user = rows[0];
    // Always run verifyPwd to prevent timing-based email enumeration
    const storedHash = user?.password_hash ?? "x:x";
    const valid = verifyPwd(password, storedHash);

    if (!user || !valid) return bad("Email atau kata sandi salah", 401);

    return Response.json({
      userId: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
    });
  } catch (e) {
    console.error("[login]", e);
    return bad("Terjadi kesalahan server", 500);
  }
}
