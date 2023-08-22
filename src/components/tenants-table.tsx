import { db } from "@/database/db"
import { Tenant, tenants } from "@/database/schema/tenants"
import dayjs from "dayjs"
import { sql } from "drizzle-orm"
import { Column, Datatable } from "./datatable"
import { TenantActions } from "./tenant-actions"

const columns: Column<Tenant>[] = [
  { label: "Name", cell: ({ name }) => name },
  { label: "Phone", cell: ({ phone }) => phone },
  {
    label: "Created at",
    cell: ({ created_at }) => dayjs(created_at).format("MM/DD/YYYY"),
  },
  {
    label: "",
    cell: ({ id }) => <TenantActions id={id} />,
  },
]

export const TenantsTable = async () => {
  const data = await db
    .select()
    .from(tenants)
    .orderBy(sql`${tenants.created_at} asc`)

  return <Datatable columns={columns} data={data} />
}
