import { UserForm } from "@/components/user-form"
import Link from "next/link"

export default async function NewUserPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">CRUD App</h1>
        <Link href="/" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <UserForm />
    </>
  )
}
