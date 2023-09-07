"use client"

import { createStatement } from "@/actions/create-statement"
import { formatCurrencyPHP } from "@/utils/currency"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { useRouter } from "next/navigation"
import { useEffect, useState, useTransition } from "react"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { IconTrash } from "./Icons/Outline"

const ItemSchema = z.object({
  title: z.string().min(1),
  description: z.string(),
  amount: z.string().min(1),
})

const FormSchema = z.object({
  title: z.string().min(1),
  due_date: z.string().nullable(),
  items: ItemSchema.array().min(1),
})

type ItemFields = z.infer<typeof ItemSchema>
type FormFields = z.infer<typeof FormSchema>

interface Props {
  tenant_id: string
}

export const StatementForm = ({ tenant_id }: Props) => {
  const [pending, startTransition] = useTransition()
  const [total, setTotal] = useState(0)
  const { push } = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: { items: [{ title: "", description: "", amount: "" }] },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  })

  const watchItems = watch("items")
  const totalAmount = watchItems?.reduce((total, field) => {
    return total + parseFloat(field.amount)
  }, 0)

  useEffect(() => {
    if (!!totalAmount) {
      setTotal(totalAmount)
    } else {
      setTotal(0)
    }
  }, [watchItems, totalAmount, setTotal])

  const onSubmit = (data: FormFields) => {
    startTransition(() => {
      createStatement({
        ...data,
        due_date: data.due_date ? new Date(data.due_date) : null,
        total: total.toString(),
        tenant_id,
      })
    })

    push("/tenants")
  }

  console.log(errors)

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <div className="form-control w-full max-w-sm">
        <input
          type="text"
          placeholder="Title"
          className={clsx(
            "input input-bordered",
            errors.title && "input-error"
          )}
          {...register("title")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <input
          type="date"
          placeholder="Due Date"
          className={clsx(
            "input input-bordered",
            errors.due_date && "input-error"
          )}
          {...register("due_date")}
        />
      </div>
      <div className="flex w-full max-w-sm justify-between items-center">
        <h2>Items</h2>
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={() => {
            append({ title: "", description: "", amount: "" })
          }}
        >
          Add
        </button>
      </div>
      {fields.map((field, key) => {
        return (
          <div className="flex items-center gap-2 w-full max-w-sm" key={key}>
            <div className="flex-1">
              <input
                type="text"
                className="w-full font-medium outline-none bg-transparent text-lg"
                placeholder="Item"
                {...register(`items.${key}.title`)}
              />
              <textarea
                className="block h-8 w-full resize-none text-xs outline-none bg-transparent"
                placeholder="Description"
                {...register(`items.${key}.description`)}
              />
            </div>
            <div className="flex items-center gap-1 font-semibold">
              <input
                type="number"
                step="any"
                className="no-arrows w-20 flex-1 appearance-none text-right outline-none bg-transparent"
                placeholder="0"
                {...register(`items.${key}.amount`)}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                remove(key)
              }}
            >
              <IconTrash />
            </button>
          </div>
        )
      })}
      <div>
        Total:
        <span className="ml-2 text-lg font-bold">
          {(total && formatCurrencyPHP(total)) || <span>&#8369; 0.00</span>}
        </span>
      </div>
      <div className="flex justify-end w-full max-w-sm">
        <button type="submit" className="btn btn-ghost" disabled={pending}>
          {pending ? "Loading" : "Submit"}
        </button>
      </div>
    </form>
  )
}
