"use server"

import { db } from "@/database/db"
import {
  StatementItem,
  statement_items,
} from "@/database/schema/statement_items"
import { createInsertSchema } from "drizzle-zod"

export const createStatementItem = async (
  data: Pick<StatementItem, "title" | "description" | "amount" | "statement_id">
) => {
  const schema = createInsertSchema(statement_items)
  const entry = schema.parse(data)

  await db.insert(statement_items).values(entry)
}
