import { PropertyForm } from "@/components/property-form"
import { db } from "@/database/db"
import { Property, properties } from "@/database/schema/properties"
import { eq } from "drizzle-orm"
import Link from "next/link"

interface Props {
  params: { id: string }
}

export default async function EditPropertyPage({ params }: Props) {
  const data = await db
    .select()
    .from(properties)
    .where(eq(properties.id, params.id))
  const property: Property = data[0]

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-semibold text-sm">Edit Property</h1>
        <Link href="/properties" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <PropertyForm data={property} />
    </>
  )
}
