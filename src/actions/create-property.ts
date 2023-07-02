"use server"

import { db } from "@/database/db"
import { properties } from "@/database/schema/properties"
import { createInsertSchema } from "drizzle-zod"

export const createProperty = async (formData: FormData) => {
  const data = Object.fromEntries(formData)
  const schema = createInsertSchema(properties)
  const { name, monthly, notes } = schema.parse(data)

  db.insert(properties).values({
    name,
    monthly,
    notes,
  })
}
