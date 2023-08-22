import { TenantsTable } from "@/components/tenants-table"

const TenantsPage = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">Tenants</h1>
      </div>
      <TenantsTable />
    </>
  )
}

export default TenantsPage
