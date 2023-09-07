import { StatementsTable } from "@/components/statements-table"
import Link from "next/link"

interface Props {
  params: { id: string }
}

const ViewStatementsPage = async ({ params }: Props) => {
  const tenant_id = params.id

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">View Statements</h1>
        <Link href="/tenants" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <StatementsTable tenant_id={tenant_id} />
    </>
  )
}

export default ViewStatementsPage
