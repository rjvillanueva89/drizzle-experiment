import { InferModel, sql } from "drizzle-orm"
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  username: text("username").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
})

export type User = InferModel<typeof users>
