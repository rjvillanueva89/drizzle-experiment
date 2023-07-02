import { PropertiesForm } from "@/components/properties-form"
import Link from "next/link"

export default function NewPropertyPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-semibold text-sm">New Property</h1>
        <Link href="/properties" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <PropertiesForm />
    </>
  )
}
