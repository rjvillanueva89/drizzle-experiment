import { db } from "@/database/db"
import { Applicant, applicants } from "@/database/schema/applicant"
import dayjs from "dayjs"
import { Column, Datatable } from "./datatable"

const columns: Column<Applicant>[] = [
  { label: "Name", cell: ({ name }) => name },
  { label: "Phone", cell: ({ phone }) => phone },
  { label: "Email", cell: ({ email }) => email },
  {
    label: "Created at",
    cell: ({ created_at }) => dayjs(created_at).format("MM/DD/YYYY"),
  },
  { label: "", cell: ({ id }) => "-" },
]

export const ApplicantsTable = async () => {
  const data = await db.select().from(applicants)

  return <Datatable columns={columns} data={data} />
}
