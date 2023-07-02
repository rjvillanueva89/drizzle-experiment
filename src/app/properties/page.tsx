import { Menu } from "@/components/Menu"
import { PropertiesTable } from "@/components/properties-table"
import Link from "next/link"

export default async function PropertiesPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Menu label="Properties" />
        <Link href="/properties/new" className="btn btn-ghost">
          New Property
        </Link>
      </div>
      <PropertiesTable />
    </>
  )
}
