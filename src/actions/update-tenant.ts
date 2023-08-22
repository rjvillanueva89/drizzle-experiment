"use server"

import { db } from "@/database/db"
import { Tenant, tenants } from "@/database/schema/tenants"
import { eq } from "drizzle-orm"
import { createInsertSchema } from "drizzle-zod"
import { revalidatePath } from "next/cache"

export const updateTenant = async (
  id: string,
  data: Pick<Tenant, "name" | "email" | "phone" | "occupants">
) => {
  const schema = createInsertSchema(tenants)
  const tenant = schema.parse(data)

  await db.update(tenants).set(tenant).where(eq(tenants.id, id))

  revalidatePath("/tenants")
}
