import { InferModel, sql } from "drizzle-orm"
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { properties } from "./properties"

export const tenants = pgTable("tenants", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  status: text("status", {
    enum: ["pending", "confirmed", "declined"],
  }).default("pending"),
  property_id: uuid("property_id").references(() => properties.id),
  created_at: timestamp("created_at").defaultNow().notNull(),
})

export type Tenant = InferModel<typeof tenants>
