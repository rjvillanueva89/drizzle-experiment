import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { StepFooter } from "../stepper"

const FormSchema = z.object({
  no_of_occupants: z.string().min(1),
  permanent_address: z.string().min(1),
  reason_for_renting: z.string(),
})

export type FormFields = z.infer<typeof FormSchema>

interface Props {
  data?: FormFields
  setData: Dispatch<SetStateAction<any>>
  next: VoidFunction
  prev: VoidFunction
}

export const Step2 = ({ data, setData, next, prev }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: data ? { ...data } : {},
  })

  const onSubmit = (data: FormFields) => {
    setData((current: any) => [...current, data])
    next()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">No. of Occupants</span>
        </label>
        <input
          type="number"
          placeholder="No. of Occupants"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.no_of_occupants && "input-error"
          )}
          {...register("no_of_occupants")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Permanent Address</span>
        </label>
        <textarea
          className={clsx(
            "textarea textarea-bordered",
            errors.permanent_address && "textarea-error"
          )}
          placeholder="Permanent Address"
          {...register("permanent_address")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Reason for Renting</span>
        </label>
        <textarea
          className="textarea textarea-bordered"
          placeholder="Reason for Renting"
          {...register("reason_for_renting")}
        />
      </div>
      <StepFooter>
        <button type="button" className="btn btn-ghost" onClick={prev}>
          Prev
        </button>
        <button type="submit" className="btn btn-ghost">
          Next
        </button>
      </StepFooter>
    </form>
  )
}
