import { InferModel, sql } from "drizzle-orm"
import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core"
import { properties } from "./properties"
import { users } from "./users"

export const applicants = pgTable("applicants", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  applicant_id: uuid("applicant_id").references(() => users.id),
  property_id: uuid("property_id").references(() => properties.id),
  status: text("status", { enum: ["pending", "confirmed", "declined"] }),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at"),
})

export type Applicant = InferModel<typeof applicants>
