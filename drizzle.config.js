require('dotenv').config();
const { env } = require('./src/env.js');

module.exports = {
  schema: './server/schema.js',
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["astronomy_*"],
};
