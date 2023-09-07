"use server"

import { db } from "@/database/db"
import { statements } from "@/database/schema/statements"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const deleteStatement = async (id: string) => {
  await db.delete(statements).where(eq(statements.id, id))

  revalidatePath("/statements/[id]")
}
