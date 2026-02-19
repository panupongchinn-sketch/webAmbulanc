import { Pool } from "pg"

let pool: Pool | null = null

const getPool = () => {
  if (pool) return pool

  const connectionString = process.env.DATABASE_URL
  if (!connectionString) {
    throw createError({
      statusCode: 500,
      statusMessage: "DATABASE_URL is not configured",
    })
  }

  pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  })
  return pool
}

let initialized = false

export const ensureStoreTable = async () => {
  if (initialized) return
  const client = await getPool().connect()
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS app_store (
        key TEXT PRIMARY KEY,
        value JSONB NOT NULL DEFAULT '[]'::jsonb,
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `)
    initialized = true
  } finally {
    client.release()
  }
}

export const getStoreValue = async (key: string) => {
  await ensureStoreTable()
  const { rows } = await getPool().query("SELECT value FROM app_store WHERE key = $1 LIMIT 1", [key])
  return rows[0]?.value ?? []
}

export const setStoreValue = async (key: string, value: unknown) => {
  await ensureStoreTable()
  await getPool().query(
    `
      INSERT INTO app_store (key, value, updated_at)
      VALUES ($1, $2::jsonb, NOW())
      ON CONFLICT (key)
      DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
    `,
    [key, JSON.stringify(value ?? [])]
  )
}
