import { TenantsTable } from "@/components/tenants-table"
import Link from "next/link"

const TenantsPage = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">Tenants</h1>
        <Link href="/tenant/new" className="btn btn-ghost">
          New
        </Link>
      </div>
      <TenantsTable />
    </>
  )
}

export default TenantsPage
