const { Pool } = require('pg');
const { drizzle } = require('drizzle-orm/vercel-postgres');
const schema = require("./schema");
require('dotenv').config();

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: 4000
});

const db = drizzle(pool, { schema });

module.exports = { db };
