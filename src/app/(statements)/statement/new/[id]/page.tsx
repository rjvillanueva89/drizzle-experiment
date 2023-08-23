import { StatementForm } from "@/components/statement-form"
import Link from "next/link"

interface Props {
  params: { id: string }
}

const AddStatementPage = async ({ params }: Props) => {
  const tenant_id = params.id

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">Add Statement</h1>
        <Link href="/tenants" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <StatementForm />
    </>
  )
}

export default AddStatementPage
