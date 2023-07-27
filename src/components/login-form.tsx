"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  identifier: z.string().min(1),
  password: z.string().min(6),
})

type FormInputs = z.infer<typeof FormSchema>

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit = handleSubmit((data: FormInputs) => {
    signIn("credentials", { ...data, callbackUrl: "/properties" })
  })

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Username"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.identifier && "input-error"
          )}
          {...register("identifier")}
        />
        <input
          type="password"
          placeholder="Password"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.password && "input-error"
          )}
          {...register("password")}
        />
        <div className="flex w-full justify-end gap-4">
          <button type="submit" className="btn btn-ghost">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default LoginForm
