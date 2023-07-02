import { db } from "@/database/db"
import { Property, properties } from "@/database/schema/properties"
import dayjs from "dayjs"
import { Column, Datatable } from "./datatable"
import { PropertyActions } from "./property-actions"

const columns: Column<Property>[] = [
  { label: "Name", cell: ({ name }) => name },
  { label: "Monthly", cell: ({ monthly }) => monthly },
  {
    label: "Created at",
    cell: ({ created_at }) => dayjs(created_at).format("MM/DD/YYYY"),
  },
  { label: "", cell: ({ id }) => <PropertyActions id={id} /> },
]

export const PropertiesTable = async () => {
  const data = await db.select().from(properties)

  return <Datatable columns={columns} data={data} />
}
