import { InferModel, sql } from "drizzle-orm"
import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const properties = pgTable("properties", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  monthly: numeric("monthly").notNull(),
  notes: text("notes"),
  created_by: uuid("created_by"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at"),
})

export type Property = InferModel<typeof properties>
