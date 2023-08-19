"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"

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

export type FormFields = z.infer<typeof FormSchema>

export const TenantForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      occupants: [{ name: "" }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "occupants",
  })

  const onSubmit = (data: FormFields) => {}

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
                "input input-bordered",
                errors.occupants?.[key]?.name && "input-error"
              )}
              {...register(`occupants.${key}.name`)}
            />
          </div>
        )
      })}
      <div className="flex justify-end w-full">
        <button type="submit" className="btn btn-ghost">
          Submit
        </button>
      </div>
    </form>
  )
}
