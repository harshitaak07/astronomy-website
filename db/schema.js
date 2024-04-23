const { sql } = require("drizzle-orm");
const {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} = require("drizzle-orm/pg-core");

const createTable = pgTableCreator((name) => `astronomy_${name}`);

const users = createTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }),
    createdAt: timestamp("created_at")
      .default(sql`current_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);

const contents = createTable(
  "content",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at")
      .default(sql`current_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
    title: varchar("title", { length: 256 }),
    description: varchar("description", { nullable: true }),
    authorId: varchar("author_id", { length: 20 }),
    passage: varchar("passage", { length: 1000 }),
    contentType: varchar("content_type", { length: 50 }),
  },
  (example) => ({
    titleIndex: index("title_idx").on(example.title),
    descriptionIndex: index("description_idx").on(example.description),
    authorIndex: index("author_id_idx").on(example.authorId),
    passageIndex: index("passage_idx").on(example.passage),
    typeIndex: index("content_type_idx").on(example.contentType),
    foreignKeys: {
      authorId: {
        table: "users",
        column: "name",
      },
    },
  })
);

const contentHistory = createTable(
  "content_history",
  {
    id: serial("id").primaryKey(),
    userId: varchar("user_id", { length: 20 }),
    contentId: varchar("content_id", { length: 20 }),
  },
  (example) => ({
    userIdIndex: index("user_id_idx").on(example.userId),
    contentIdIndex: index("content_id_idx").on(example.contentId),
    foreignKeys: {
      userId: {
        table: "users",
        column: "id",
      },
      contentId: {
        table: "contents",
        column: "id",
      },
    },
  })
);

module.exports = { users, contents, contentHistory };
