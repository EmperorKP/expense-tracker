import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as Schema from './Schema'
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);
export const db = drizzle(sql,{Schema});

// const result = await db.select().from(...);