"use server"

import { db } from "@/database/db"
import { Statement, statements } from "@/database/schema/statements"
import { createInsertSchema } from "drizzle-zod"
import { revalidatePath } from "next/cache"

export const createStatement = async (
  data: Pick<Statement, "title" | "items" | "total" | "tenant_id" | "due_date">
) => {
  const schema = createInsertSchema(statements)
  const entry = schema.parse(data)

  await db.insert(statements).values(entry)

  revalidatePath("/tenants")
}
