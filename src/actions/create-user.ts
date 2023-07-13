"use server"

import { db } from "@/database/db"
import { User, users } from "@/database/schema/users"
import { createInsertSchema } from "drizzle-zod"

export const createUser = async (
  data: Pick<User, "name" | "email" | "username" | "password">
) => {
  const schema = createInsertSchema(users)
  const entry = schema.parse(data)

  await db.insert(users).values(entry)
}
