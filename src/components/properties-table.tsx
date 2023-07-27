import { db } from "@/database/db"
import { Property, properties } from "@/database/schema/properties"
import { User, users } from "@/database/schema/users"
import dayjs from "dayjs"
import { eq } from "drizzle-orm"
import { Column, Datatable } from "./datatable"
import { PropertyActions } from "./property-actions"

interface PropertyUser {
  properties: Property
  users?: User
}

const columns: Column<PropertyUser>[] = [
  { label: "Name", cell: ({ properties }) => properties.name },
  { label: "Monthly", cell: ({ properties }) => properties.monthly },
  { label: "Created by", cell: ({ users }) => users?.name },
  {
    label: "Created at",
    cell: ({ properties }) => dayjs(properties.created_at).format("MM/DD/YYYY"),
  },
  {
    label: "",
    cell: ({ properties }) => <PropertyActions id={properties.id} />,
  },
]

export const PropertiesTable = async () => {
  const data = (await db
    .select()
    .from(properties)
    .leftJoin(users, eq(users.id, properties.created_by))) as PropertyUser[]

  console.log(data)

  return <Datatable columns={columns} data={data} />
}
