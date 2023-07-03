import { InferModel, sql } from "drizzle-orm"
import { numeric, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"

export const applicants = pgTable("applicants", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  no_of_occupants: numeric("no_of_occupants").notNull(),
  permanent_address: text("permanent_address").notNull(),
  reason_for_renting: text("reason_for_renting"),
  emergency_contact_name: text("emergency_contact_name").notNull(),
  emergency_contact_number: text("emergency_contact_number").notNull(),
  status: text("status", {
    enum: ["pending", "confirmed", "declined"],
  }).default("pending"),
  created_at: timestamp("created_at").defaultNow().notNull(),
})

export type Applicant = InferModel<typeof applicants>
