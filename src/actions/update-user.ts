"use server"

import { db } from "@/database/db"
import { User, users } from "@/database/schema/users"
import { eq } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"
import { revalidatePath } from "next/cache"

export const updateUser = async (
  id: string,
  data: Pick<User, "name" | "email" | "username">
) => {
  const schema = createInsertSchema(users)
  const { name, email, username } = schema.parse(data)

  await db
    .update(users)
    .set({
      name,
      email,
      username,
    })
    .where(eq(users.id, id))

  revalidatePath("/")
}
