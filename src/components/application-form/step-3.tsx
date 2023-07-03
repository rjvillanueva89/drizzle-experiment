import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { StepFooter } from "../stepper"

const FormSchema = z.object({
  emergency_contact_name: z.string().min(1),
  emergency_contact_number: z.string().min(1),
})

export type FormFields = z.infer<typeof FormSchema>

interface Props {
  data?: FormFields
  setData: Dispatch<SetStateAction<FormFields | undefined>>
  prev: VoidFunction
  done: VoidFunction
}

export const Step3 = ({ data, setData, prev, done }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: data ? { ...data } : {},
  })

  const onSubmit = (data: FormFields) => {
    setData(data)
    setTimeout(done, 500)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-4"
    >
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Emergency Contact</span>
        </label>
        <input
          type="text"
          placeholder="Name"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.emergency_contact_name && "input-error"
          )}
          {...register("emergency_contact_name")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Emergency Contact Number</span>
        </label>
        <input
          type="text"
          placeholder="Number"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.emergency_contact_number && "input-error"
          )}
          {...register("emergency_contact_number")}
        />
      </div>
      <StepFooter>
        <button type="button" className="btn btn-ghost" onClick={prev}>
          Prev
        </button>
        <button type="submit" className="btn btn-ghost">
          Done
        </button>
      </StepFooter>
    </form>
  )
}
