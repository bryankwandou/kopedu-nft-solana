import { neon } from "@neondatabase/serverless";

export const hasDatabase = !!process.env.DATABASE_URL;

export function getDb() {
  if (!hasDatabase) throw new Error("DATABASE_URL not configured");
  return neon(process.env.DATABASE_URL!);
}

export async function ensureSchema() {
  if (!hasDatabase) return;
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS kopedu_progress (
      user_id    TEXT PRIMARY KEY,
      data       JSONB NOT NULL,
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}

export async function ensureUsersTable() {
  if (!hasDatabase) return;
  const sql = getDb();
  await sql`
    CREATE TABLE IF NOT EXISTS kopedu_users (
      id            TEXT PRIMARY KEY,
      email         TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      first_name    TEXT DEFAULT '',
      last_name     TEXT DEFAULT '',
      created_at    TIMESTAMPTZ DEFAULT NOW()
    )
  `;
}
