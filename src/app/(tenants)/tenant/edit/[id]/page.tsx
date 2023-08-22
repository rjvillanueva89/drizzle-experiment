import { TenantForm } from "@/components/tenant-form"
import { db } from "@/database/db"
import { Tenant, tenants } from "@/database/schema/tenants"
import { eq } from "drizzle-orm"

interface Props {
  params: { id: string }
}

const EditTenantPage = async ({ params }: Props) => {
  const tenant_id = params.id
  const data = await db.select().from(tenants).where(eq(tenants.id, tenant_id))
  const tenant: Tenant = data[0]

  return (
    <>
      <h1>Tenant Info</h1>
      <TenantForm tenant={tenant} />
    </>
  )
}

export default EditTenantPage
