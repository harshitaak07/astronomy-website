require('dotenv').config();
const { env } = require('./src/env');

module.exports = {
  schema: './db/schema.js',
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["astronomy_*"],
};
