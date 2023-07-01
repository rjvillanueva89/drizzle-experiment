import { InferModel, sql } from "drizzle-orm"
import {
  jsonb,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core"

export const invoices = pgTable("invoices", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  contract_id: uuid("contract_id"),
  title: text("title").notNull(),
  amount: numeric("amount").notNull(),
  items: jsonb("items").notNull(),
  notes: text("notes"),
  status: text("status"),
  due_date: timestamp("due_date"),
  created_at: timestamp("created_at").defaultNow().notNull(),
})

export type Invoice = InferModel<typeof invoices>
