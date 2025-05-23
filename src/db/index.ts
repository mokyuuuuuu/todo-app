import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

// PostgreSQLの接続プールを作成
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Drizzleのインスタンスを作成
export const db = drizzle(pool, { schema }); 