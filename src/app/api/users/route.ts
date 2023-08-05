import { db } from "@/database/db"
import { users } from "@/database/schema/users"
import { sql } from "drizzle-orm"
import { NextResponse } from "next/server"

export async function GET() {
  const result = await db
    .select()
    .from(users)
    .orderBy(sql`${users.created_at} asc`)

  return NextResponse.json(result)
}
