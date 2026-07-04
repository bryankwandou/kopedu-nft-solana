import { hasDatabase, getDb, ensureChatTable } from "@/lib/db";

export const dynamic = "force-dynamic";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function bad(msg: string) {
  return Response.json({ error: msg }, { status: 400 });
}

export async function GET(req: Request) {
  if (!hasDatabase) return Response.json({ enabled: false, data: null });

  const userId = new URL(req.url).searchParams.get("userId") ?? "";
  if (!UUID_RE.test(userId)) return bad("Invalid userId");

  try {
    await ensureChatTable();
    const sql = getDb();
    const rows = await sql`SELECT data FROM kopedu_chat WHERE user_id = ${userId}`;
    return Response.json({ enabled: true, data: rows[0]?.data ?? null });
  } catch {
    return Response.json({ enabled: false, data: null });
  }
}

export async function POST(req: Request) {
  if (!hasDatabase) return Response.json({ enabled: false });

  let body: { userId?: unknown; data?: unknown };
  try {
    body = await req.json();
  } catch {
    return bad("Bad JSON");
  }

  const { userId, data } = body;
  if (typeof userId !== "string" || !UUID_RE.test(userId)) return bad("Invalid userId");
  if (!data || typeof data !== "object" || Array.isArray(data)) return bad("Invalid data");

  try {
    await ensureChatTable();
    const sql = getDb();
    await sql`
      INSERT INTO kopedu_chat (user_id, data, updated_at)
      VALUES (${userId}, ${JSON.stringify(data)}, NOW())
      ON CONFLICT (user_id)
      DO UPDATE SET data = EXCLUDED.data, updated_at = NOW()
    `;
    return Response.json({ enabled: true, saved: true });
  } catch {
    return Response.json({ enabled: false });
  }
}
