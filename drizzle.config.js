// Load environment variables from .env file into process.env
require('dotenv').config();

// Import the env object from './src/env'
const { env } = require('./src/env');

// Import defineConfig function from 'drizzle-kit'
const { defineConfig } = require('drizzle-kit');

// Export a configuration object using defineConfig function
module.exports = defineConfig({
  // Path to the schema file defining the database structure
  schema: './db/schema.js',

  // Database driver to be used (e.g., 'pg' for PostgreSQL)
  driver: "pg",

  // Database dialect (e.g., 'postgresql')
  dialect: "postgresql",

  // Database credentials
  dbCredentials: {
    host: env.POSTGRES_HOST, // Hostname of the PostgreSQL server
    port: env.POSTGRES_PORT, // Port number of the PostgreSQL server
    database: env.POSTGRES_DB, // Name of the PostgreSQL database
    user: env.POSTGRES_USER, // Username for connecting to the PostgreSQL database
    password: env.POSTGRES_PASSWORD, // Password for connecting to the PostgreSQL database
  },

  // Filter for selecting specific tables from the database
  tablesFilter: ["astronomy_*"],
});


/*
Database Driver (driver):
The driver property typically specifies the underlying database driver or module that is used to interact with the database.
It's a lower-level abstraction that directly interfaces with the database.
For example, in the case of PostgreSQL, the pg library is commonly used as the driver.

Database Dialect (dialect):
The dialect property usually indicates the SQL dialect or flavor that is used by the ORM (Object-Relational Mapping) or database library.
It defines the syntax and behavior specific to a particular type of database.
While the driver deals with low-level database interactions, the dialect deals with the higher-level SQL generation and querying.
For example, in the case of Sequelize (an ORM for Node.js), the dialect property specifies the type of SQL database being used (e.g., 'mysql', 'postgres', 'mssql', etc.).

When referring to the "pg driver," it typically means the PostgreSQL driver used for connecting to and interacting with a PostgreSQL database from a programming language or environment.
In the context of Node.js, the "pg" driver refers to the Node.js driver for PostgreSQL. It allows Node.js applications to establish connections to PostgreSQL databases and execute SQL queries.
*/