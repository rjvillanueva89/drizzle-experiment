import { TenantForm } from "@/components/tenant-form"
import { db } from "@/database/db"
import { Tenant, tenants } from "@/database/schema/tenants"
import { eq } from "drizzle-orm"
import Link from "next/link"

interface Props {
  params: { id: string }
}

const EditTenantPage = async ({ params }: Props) => {
  const tenant_id = params.id
  const data = await db.select().from(tenants).where(eq(tenants.id, tenant_id))
  const tenant: Tenant = data[0]

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">Edit Tenant</h1>
        <Link href="/tenants" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <TenantForm tenant={tenant} />
    </>
  )
}

export default EditTenantPage
