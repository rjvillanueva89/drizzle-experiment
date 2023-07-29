import { db } from "@/database/db"
import { User, users } from "@/database/schema/users"
import dayjs from "dayjs"
import { sql } from "drizzle-orm"
import { Column, Datatable } from "./datatable"
import { UserActions } from "./user-actions"

const columns: Column<User>[] = [
  { label: "Name", cell: ({ name }) => name },
  { label: "Username", cell: ({ username }) => username },
  {
    label: "Created at",
    cell: ({ created_at }) => dayjs(created_at).format("MM/DD/YYYY"),
  },
  {
    label: "",
    cell: ({ id }) => <UserActions id={id} />,
  },
]

export const UsersTable = async () => {
  const data = await db
    .select()
    .from(users)
    .orderBy(sql`${users.created_at} asc`)

  return <Datatable columns={columns} data={data} />
}
