"use client"

import { createUser } from "@/actions/create-user"
import { User } from "@/database/schema/users"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  username: z.string().min(1),
})

type FormFields = z.infer<typeof FormSchema>

interface Props {
  data?: Pick<User, "id" | "name" | "email" | "username">
}

export const UserForm = ({ data }: Props) => {
  const { push } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: data
      ? {
          name: data.name,
          email: data.email,
          username: data.username,
        }
      : {},
  })

  const onSubmit = (data: FormFields) => {
    createUser(data)
    push("/")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <input
        type="text"
        placeholder="Name"
        className={clsx(
          "input input-bordered w-full max-w-sm",
          errors.name && "input-error"
        )}
        {...register("name")}
      />
      <input
        type="email"
        placeholder="Email"
        className={clsx(
          "input input-bordered w-full max-w-sm",
          errors.email && "input-error"
        )}
        {...register("email")}
      />
      <input
        type="text"
        placeholder="Username"
        className={clsx(
          "input input-bordered w-full max-w-sm",
          errors.username && "input-error"
        )}
        {...register("username")}
      />
      <div className="flex w-full justify-end gap-4">
        <button type="submit" className="btn btn-ghost">
          Submit
        </button>
      </div>
    </form>
  )
}
