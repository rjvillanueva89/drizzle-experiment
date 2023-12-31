import { UsersTable } from "@/components/users-table"
import Link from "next/link"

export default async function Home() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">CRUD App</h1>
        <Link href="/user/new" className="btn btn-ghost">
          New User
        </Link>
      </div>
      <UsersTable />
    </>
  )
}
