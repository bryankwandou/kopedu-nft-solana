import { hasDatabase, getDb, ensureSchema } from "@/lib/db";

export const dynamic = "force-dynamic";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function bad(msg: string) {
  return Response.json({ error: msg }, { status: 400 });
}

export async function GET(req: Request) {
  if (!hasDatabase) return Response.json({ enabled: false, state: null });

  const userId = new URL(req.url).searchParams.get("userId") ?? "";
  if (!UUID_RE.test(userId)) return bad("Invalid userId");

  try {
    await ensureSchema();
    const sql = getDb();
    const rows =
      await sql`SELECT data FROM kopedu_progress WHERE user_id = ${userId}`;
    return Response.json({ enabled: true, state: rows[0]?.data ?? null });
  } catch {
    return Response.json({ enabled: false, state: null });
  }
}

export async function POST(req: Request) {
  if (!hasDatabase) return Response.json({ enabled: false });

  let body: { userId?: unknown; state?: unknown };
  try {
    body = await req.json();
  } catch {
    return bad("Bad JSON");
  }

  const { userId, state } = body;
  if (typeof userId !== "string" || !UUID_RE.test(userId))
    return bad("Invalid userId");
  if (!state || typeof state !== "object" || Array.isArray(state))
    return bad("Invalid state");

  try {
    await ensureSchema();
    const sql = getDb();
    await sql`
      INSERT INTO kopedu_progress (user_id, data, updated_at)
      VALUES (${userId}, ${JSON.stringify(state)}, NOW())
      ON CONFLICT (user_id)
      DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
    `;
    return Response.json({ enabled: true, saved: true });
  } catch {
    return Response.json({ enabled: false });
  }
}
