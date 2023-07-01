"use server"

import { properties } from "@/database/schema/properties"
import { createInsertSchema } from "drizzle-zod"

export const createProperty = async (formData: FormData) => {
  const data = Object.fromEntries(formData)
  const schema = createInsertSchema(properties)
  const entry = schema.parse(data)

  console.log(entry)
}
