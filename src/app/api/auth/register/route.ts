import { scryptSync, randomBytes, randomUUID } from "node:crypto";
import { hasDatabase, getDb, ensureUsersTable, ensureSchema } from "@/lib/db";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hashPwd(pwd: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(pwd, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function bad(msg: string, status = 400) {
  return Response.json({ error: msg }, { status });
}

export async function POST(req: Request) {
  if (!hasDatabase) return bad("Service unavailable", 503);

  let body: { email?: string; password?: string; firstName?: string; lastName?: string };
  try {
    body = await req.json();
  } catch {
    return bad("Permintaan tidak valid");
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const password = body.password ?? "";
  const firstName = (body.firstName ?? "").trim();
  const lastName = (body.lastName ?? "").trim();

  if (!EMAIL_RE.test(email)) return bad("Email tidak valid");
  if (password.length < 8) return bad("Kata sandi minimal 8 karakter");
  if (!firstName) return bad("Nama depan wajib diisi");

  try {
    await ensureUsersTable();
    await ensureSchema();
    const sql = getDb();

    const existing = await sql`SELECT id FROM kopedu_users WHERE email = ${email}`;
    if (existing.length > 0) return bad("Email sudah terdaftar", 409);

    const userId = randomUUID();
    const hash = hashPwd(password);

    await sql`
      INSERT INTO kopedu_users (id, email, password_hash, first_name, last_name)
      VALUES (${userId}, ${email}, ${hash}, ${firstName}, ${lastName})
    `;

    return Response.json({ userId, firstName, lastName });
  } catch (e) {
    console.error("[register]", e);
    return bad("Terjadi kesalahan server", 500);
  }
}
