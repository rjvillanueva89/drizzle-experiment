import { InferModel, sql } from "drizzle-orm"
import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { properties } from "./properties"
import { users } from "./users"

export const contracts = pgTable("contracts", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  tenant_id: uuid("tenant_id")
    .notNull()
    .references(() => users.id),
  property_id: uuid("property_id")
    .notNull()
    .references(() => properties.id),
  start_date: timestamp("start_date"),
  end_date: timestamp("end_date"),
  monthly: numeric("monthly").notNull(),
  status: text("status", { enum: ["active", "inactive"] }),
  notes: text("notes"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at"),
})

export type Contract = InferModel<typeof contracts>
