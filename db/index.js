const { Pool } = require('pg');
const { drizzle } = require('drizzle-orm/vercel-postgres');
require('dotenv').config();
const schema = require("./schema");

const connectToDB = async () => {
  try {
    const pool = new Pool({
      user: process.env.POSTGRES_USER,
      host: process.env.POSTGRES_HOST,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      port: 4000
    });

    const db = drizzle(pool, { schema });

    console.log("Database Connected");
    return db;
  } catch (err) {
    console.error("Error connecting to database:", err);
    process.exit(1);
  }
};

module.exports = connectToDB;