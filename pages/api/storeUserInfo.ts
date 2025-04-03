import type { NextApiRequest, NextApiResponse } from 'next';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { pgTable, serial, text } from 'drizzle-orm/pg-core';


export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  phone: text('phone'),
  exam: text('exam')
});


const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
const db = drizzle(pool);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, exam } = req.body;

  if (!name || !phone || !exam) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    await db.insert(users).values({ name, phone, exam }).execute();
    res.status(200).json({ message: 'User info saved' });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
}
