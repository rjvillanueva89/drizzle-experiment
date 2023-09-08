import { db } from "@/database/db"
import { Statement, statements } from "@/database/schema/statements"
import { formatCurrencyPHP } from "@/utils/currency"
import dayjs from "dayjs"
import { eq, sql } from "drizzle-orm"
import { Column, Datatable } from "./datatable"
import { StatementActions } from "./statement-actions"

const columns: Column<Statement>[] = [
  { label: "Title", cell: ({ title }) => title },
  { label: "Total", cell: ({ total }) => formatCurrencyPHP(parseInt(total)) },
  {
    label: "Due Date",
    cell: ({ due_date }) =>
      due_date ? dayjs(due_date).format("MM/DD/YYYY") : "-",
  },
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
    .where(eq(statements.tenant_id, tenant_id))

  return <Datatable columns={columns} data={data} />
}
