import { TenantForm } from "@/components/tenant-form"
import Link from "next/link"

const NewTenantPage = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">New Tenant</h1>
        <Link href="/tenants" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <TenantForm />
    </>
  )
}

export default NewTenantPage
