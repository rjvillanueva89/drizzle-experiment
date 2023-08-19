import { RegisterForm } from "@/components/register-form"
import Link from "next/link"

const RegisterPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-semibold text-sm">Registration</h1>
        <Link href="/auth/login" className="btn btn-ghost">
          Back
        </Link>
      </div>
      <RegisterForm />
    </>
  )
}

export default RegisterPage
