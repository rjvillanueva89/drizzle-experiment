"use client"

import { createTenant } from "@/actions/create-tenant"
import { updateTenant } from "@/actions/update-tenant"
import { Tenant } from "@/database/schema/tenants"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useTransition } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { IconTrash } from "./Icons/Outline"

const OccupantSchema = z.object({
  name: z.string().min(1),
})

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  occupants: OccupantSchema.array().min(1),
  // startDate: z.date().optional(),
})

type OccupantFields = z.infer<typeof OccupantSchema>
type FormFields = z.infer<typeof FormSchema>

interface Props {
  tenant?: Tenant
}

export const TenantForm = ({ tenant }: Props) => {
  const [pending, startTransition] = useTransition()
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: tenant
      ? {
          name: tenant.name,
          email: tenant.email,
          phone: tenant.phone,
          occupants: tenant.occupants as OccupantFields[],
        }
      : {
          occupants: [{ name: "" }],
        },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "occupants",
  })

  const onSubmit = (data: FormFields) => {
    startTransition(() => {
      if (tenant) {
        updateTenant(tenant.id, data)
      } else {
        createTenant(data)
      }
    })

    push("/tenants")
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <div className="form-control w-full max-w-sm">
        <input
          type="text"
          placeholder="Full Name"
          className={clsx("input input-bordered", errors.name && "input-error")}
          {...register("name")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className={clsx("input input-bordered", errors.name && "input-error")}
          {...register("email")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <input
          type="text"
          placeholder="Phone"
          className={clsx("input input-bordered", errors.name && "input-error")}
          {...register("phone")}
        />
      </div>
      <div className="flex w-full max-w-sm justify-between items-center">
        <h2>Occupants</h2>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            append({ name: "" })
          }}
        >
          Add
        </button>
      </div>
      {fields.map((field, key) => {
        return (
          <div className="w-full max-w-sm flex items-center gap-4" key={key}>
            <span className="rounded-full bg-slate-800 px-3 py-2">
              #{key + 1}
            </span>
            <input
              type="text"
              placeholder="Occupant Name"
              className={clsx(
                "input input-bordered w-full",
                errors.occupants?.[key]?.name && "input-error"
              )}
              {...register(`occupants.${key}.name`)}
            />
            {key !== 0 && (
              <button type="button" onClick={() => remove(key)}>
                <IconTrash />
              </button>
            )}
          </div>
        )
      })}
      <div className="flex justify-end w-full max-w-sm">
        <button type="submit" className="btn btn-ghost" disabled={pending}>
          {pending ? "Loading" : "Submit"}
        </button>
      </div>
    </form>
  )
}
