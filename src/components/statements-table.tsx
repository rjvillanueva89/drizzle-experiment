import { db } from "@/database/db"
import { Statement, statements } from "@/database/schema/statements"
import dayjs from "dayjs"
import { sql } from "drizzle-orm"
import { Column, Datatable } from "./datatable"
import { StatementActions } from "./statement-actions"

const columns: Column<Statement>[] = [
  { label: "ID", cell: ({ tenant_id }) => tenant_id },
  { label: "Name", cell: ({ title }) => title },
  { label: "Total", cell: ({ total }) => total },
  {
    label: "Created at",
    cell: ({ created_at }) => dayjs(created_at).format("MM/DD/YYYY"),
  },
  {
    label: "",
    cell: ({ id }) => <StatementActions id={id} />,
  },
]

interface Props {
  tenant_id: string
}

export const StatementsTable = async ({ tenant_id }: Props) => {
  const data = await db
    .select()
    .from(statements)
    .orderBy(sql`${statements.created_at} asc`)

  return <Datatable columns={columns} data={data} />
}
