"use client"

import { createProperty } from "@/actions/create-property"
import { updateProperty } from "@/actions/update-property"
import { Property } from "@/database/schema/properties"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  name: z.string().min(1),
  monthly: z.string().min(1),
  notes: z.string().nullable(),
})

type FormFields = z.infer<typeof FormSchema>

interface Props {
  data?: Property
}

export const PropertyForm = ({ data }: Props) => {
  const { push } = useRouter()
  const session = useSession()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: data
      ? {
          name: data.name,
          monthly: data.monthly,
          notes: data.notes,
        }
      : {},
  })

  const onSubmit = ({ name, monthly, notes }: FormFields) => {
    if (data) {
      updateProperty(data.id, { name, monthly, notes })
    } else {
      createProperty({
        name,
        monthly,
        notes,
        created_by: session.data?.user.id as string,
      })
    }

    push("/properties")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.name && "input-error"
          )}
          {...register("name")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Monthly</span>
        </label>
        <input
          type="number"
          placeholder="Monthly"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.monthly && "input-error"
          )}
          {...register("monthly")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Notes</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Notes"
          {...register("notes")}
        />
      </div>
      <div className="flex w-full justify-end gap-4">
        <button type="submit" className="btn btn-ghost">
          Submit
        </button>
      </div>
    </form>
  )
}
