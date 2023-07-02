"use server"

import { db } from "@/database/db"
import { Property, properties } from "@/database/schema/properties"
import { createInsertSchema } from "drizzle-zod"
import { revalidatePath } from "next/cache"

export const createProperty = async (
  data: Pick<Property, "name" | "monthly" | "notes">
) => {
  const schema = createInsertSchema(properties)
  const { name, monthly, notes } = schema.parse(data)

  await db.insert(properties).values({
    name,
    monthly,
    notes,
  })

  revalidatePath("/properties")
}
