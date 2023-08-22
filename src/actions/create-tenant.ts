"use server"

import { db } from "@/database/db"
import { Tenant, tenants } from "@/database/schema/tenants"
import { createInsertSchema } from "drizzle-zod"

export const createTenant = async (
  data: Pick<Tenant, "name" | "email" | "phone" | "occupants">
) => {
  const schema = createInsertSchema(tenants)
  const { name, email, phone, occupants } = schema.parse(data)

  await db.insert(tenants).values({
    name,
    email,
    phone,
    occupants,
  })
}
