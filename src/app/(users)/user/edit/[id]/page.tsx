import { UserForm } from "@/components/user-form"
import { db } from "@/database/db"
import { User, users } from "@/database/schema/users"
import { eq } from "drizzle-orm"
import Link from "next/link"

interface Props {
  params: { id: string }
}

export default async function EditUserPage({ params }: Props) {
  const data = await db.select().from(users).where(eq(users.id, params.id))
  const user = data[0] as User

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="uppercase font-semibold text-sm">CRUD App</h1>
        <Link href="/" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <UserForm data={user} />
    </>
  )
}
