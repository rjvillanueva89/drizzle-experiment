import { db } from "@/database/db"
import { users } from "@/database/schema/users"
import { NextResponse } from "next/server"

export async function GET() {
  const result = await db.select().from(users)

  return NextResponse.json(result)
}
