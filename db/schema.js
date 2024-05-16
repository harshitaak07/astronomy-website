const { sql } = require("drizzle-orm"); // Importing SQL helper functions from drizzle-orm
const {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} = require("drizzle-orm/pg-core"); // Importing PostgreSQL table creation functions from drizzle-orm/pg-core

// Function to create tables with a prefixed name
const createTable = pgTableCreator((name) => `astronomy_${name}`);

// Creating the "users" table
const users = createTable(
  "users",
  {
    id: serial("id").primaryKey(), // Auto-incrementing primary key column
    name: varchar("name", { length: 256 }), // Column for user's name
    createdAt: timestamp("created_at")
      .default(sql`current_TIMESTAMP`) // Column for creation timestamp with default value
      .notNull(), // Not null constraint
    updatedAt: timestamp("updatedAt"), // Column for update timestamp
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name), // Index on the "name" column
  })
);

// Creating the "contents" table
const contents = createTable(
  "content",
  {
    id: serial("id").primaryKey(), // Auto-incrementing primary key column
    createdAt: timestamp("created_at")
      .default(sql`current_TIMESTAMP`) // Column for creation timestamp with default value
      .notNull(), // Not null constraint
    updatedAt: timestamp("updatedAt"), // Column for update timestamp
    title: varchar("title", { length: 256 }), // Column for content title
    description: varchar("description", { nullable: true }), // Column for content description (nullable)
    authorId: varchar("author_id", { length: 20 }), // Column for author's ID
    passage: varchar("passage", { length: 1000 }), // Column for content passage
    contentType: varchar("content_type", { length: 50 }), // Column for content type
  },
  (example) => ({
    titleIndex: index("title_idx").on(example.title), // Index on the "title" column
    descriptionIndex: index("description_idx").on(example.description), // Index on the "description" column
    authorIndex: index("author_id_idx").on(example.authorId), // Index on the "author_id" column
    passageIndex: index("passage_idx").on(example.passage), // Index on the "passage" column
    typeIndex: index("content_type_idx").on(example.contentType), // Index on the "content_type" column
    foreignKeys: {
      authorId: {
        table: "users", // Foreign key reference to the "users" table
        column: "name", // Referencing the "name" column in the "users" table
      },
    },
  })
);

// Creating the "content_history" table
const contentHistory = createTable(
  "content_history",
  {
    id: serial("id").primaryKey(), // Auto-incrementing primary key column
    userId: varchar("user_id", { length: 20 }), // Column for user ID
    contentId: varchar("content_id", { length: 20 }), // Column for content ID
  },
  (example) => ({
    userIdIndex: index("user_id_idx").on(example.userId), // Index on the "user_id" column
    contentIdIndex: index("content_id_idx").on(example.contentId), // Index on the "content_id" column
    foreignKeys: {
      userId: {
        table: "users", // Foreign key reference to the "users" table
        column: "id", // Referencing the "id" column in the "users" table
      },
      contentId: {
        table: "contents", // Foreign key reference to the "contents" table
        column: "id", // Referencing the "id" column in the "contents" table
      },
    },
  })
);

module.exports = { users, contents, contentHistory }; // Exporting the created tables