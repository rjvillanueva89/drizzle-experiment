"use server"

import { db } from "@/database/db"
import { Applicant, applicants } from "@/database/schema/applicant"
import { createInsertSchema } from "drizzle-zod"

export const createApplicant = async (
  data: Omit<Applicant, "id" | "created_at" | "status">
) => {
  const schema = createInsertSchema(applicants)
  const {
    name,
    phone,
    email,
    no_of_occupants,
    permanent_address,
    reason_for_renting,
    emergency_contact_name,
    emergency_contact_number,
  } = schema.parse(data)

  await db.insert(applicants).values({
    name,
    phone,
    email,
    no_of_occupants,
    permanent_address,
    reason_for_renting,
    emergency_contact_name,
    emergency_contact_number,
  })
}
