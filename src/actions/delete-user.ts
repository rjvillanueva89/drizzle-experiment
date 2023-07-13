"use server"

import { db } from "@/database/db"
import { users } from "@/database/schema/users"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const deleteUser = async (id: string) => {
  await db.delete(users).where(eq(users.id, id))

  revalidatePath("/users")
}
