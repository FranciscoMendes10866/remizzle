import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const dogs = sqliteTable("dogs", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  breed: text("breed").notNull(),
});
