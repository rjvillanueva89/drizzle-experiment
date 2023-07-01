import { sql } from "drizzle-orm"
import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { invoices } from "./invoices"
import { users } from "./users"

export const payments = pgTable("payments", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  invoice_id: uuid("invoice_id").references(() => invoices.id),
  amount: numeric("amount").notNull(),
  notes: text("notes"),
  created_by: uuid("created_by").references(() => users.id),
  created_at: timestamp("created_at").defaultNow().notNull(),
})
