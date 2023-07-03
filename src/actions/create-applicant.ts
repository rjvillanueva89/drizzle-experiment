"use server"

import { db } from "@/database/db"
import { Applicant, applicants } from "@/database/schema/applicant"
import { createInsertSchema } from "drizzle-zod"

export const createApplicant = async (
  data: Omit<Applicant, "id" | "created_at" | "status">
) => {
  const schema = createInsertSchema(applicants)
  const entry = schema.parse(data)

  await db.insert(applicants).values(entry)
}
