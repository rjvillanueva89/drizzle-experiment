import LoginForm from "@/components/login-form"
import Link from "next/link"

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-semibold text-sm">Login</h1>
        <Link href="/auth/register" className="btn btn-ghost">
          Register
        </Link>
      </div>
      <LoginForm />
    </>
  )
}

export default LoginPage
