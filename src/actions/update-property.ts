"use server"

import { db } from "@/database/db"
import { Property, properties } from "@/database/schema/properties"
import { eq } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"
import { revalidatePath } from "next/cache"

export const updateProperty = async (
  id: string,
  data: Pick<Property, "name" | "monthly" | "notes">
) => {
  const schema = createInsertSchema(properties)
  const { name, monthly, notes } = schema.parse(data)

  await db
    .update(properties)
    .set({
      name,
      monthly,
      notes,
    })
    .where(eq(properties.id, id))

  revalidatePath("/properties")
}
