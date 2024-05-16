const { Pool } = require('pg'); // Importing Pool from pg for database connection pooling
const { drizzle } = require('drizzle-orm/vercel-postgres'); // Importing drizzle from drizzle-orm for ORM functionality
require('dotenv').config(); // Loading environment variables from .env file
const schema = require("./schema"); // Importing schema from ./schema file

//in express import statements don't work.
//Pool: In the context of the pg library, a Pool is a collection of client connections maintained by the PostgreSQL client for efficient database access. Instead of opening a new connection every time a database query is needed and closing it afterward, a pool keeps a set of open connections that can be reused. This improves the performance of database operations by reducing the overhead of connection establishment and teardown.
//Drizzle: drizzle is a function provided by the drizzle-orm library. This function initializes an ORM instance for interacting with the database using the provided PostgreSQL connection pool (Pool) and schema definition. The ORM (Object-Relational Mapping) layer abstracts the underlying database operations, allowing you to work with JavaScript objects instead of raw SQL queries.

// Function to connect to the database
const connectToDB = async () => {
  try {
    // Creating a new Pool instance with database connection details
    const pool = new Pool({
      user: process.env.astronomy_USER,
      host: process.env.astronomy_HOST,
      database: process.env.astronomy_DATABASE,
      password: process.env.astronomy_PASSWORD,
      port: 4000 // Port for database connection
    });

    // Initializing the ORM with the database pool and schema
    const db = drizzle(pool, { schema });

    console.log("Database Connected"); // Logging successful database connection
    return db; // Returning the ORM instance
  } catch (err) {
    console.error("Error connecting to database:", err); // Logging error if connection fails
    process.exit(1); // Exiting the process with error status
  }
};

module.exports = connectToDB; // Exporting the connectToDB function


/*
When we talk about a connection in the context of a connection pool, we are referring to a connection to the database server established by the application. In a typical client-server model, when a client (in this case, your Node.js application) wants to interact with a server (the PostgreSQL database server), it needs to establish a connection to that server.

Here's how it works with a connection pool:

1. **Establishing Connections**: When the application starts up or when it needs to execute a database operation, it requests a connection from the connection pool. If there are available connections in the pool, it is assigned one of them. If not, the pool can create a new connection (up to a configured maximum limit, if applicable).

2. **Executing Operations**: Once the application has a connection from the pool, it can use that connection to execute database operations such as queries, updates, inserts, or deletes.

3. **Returning Connections**: After the application has finished using the connection, it returns it to the pool. The connection is not closed but rather returned to the pool for reuse by other parts of the application.

4. **Reusing Connections**: If another part of the application needs to execute a database operation, it can request a connection from the pool. If there are available connections in the pool (including the one returned earlier), it can reuse one of them, avoiding the overhead of creating a new connection.

By managing connections in a pool, you can avoid the overhead of frequently establishing and tearing down connections, which can be resource-intensive. Instead, connections are kept open and reused, improving the efficiency and performance of database operations. Additionally, connection pools often include features for managing connection lifecycle, such as setting timeouts, monitoring connection health, and handling connection errors.
*/