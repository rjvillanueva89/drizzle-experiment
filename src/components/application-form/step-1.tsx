import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"
import { Dispatch, SetStateAction } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { StepFooter } from "../stepper"

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
})

export type FormFields = z.infer<typeof FormSchema>

interface Props {
  data?: FormFields
  setData: Dispatch<SetStateAction<any>>
  next: VoidFunction
}

export const Step1 = ({ data, setData, next }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(FormSchema),
    defaultValues: data ? { ...data } : {},
  })

  const onSubmit = (data: FormFields) => {
    setData(data)
    next()
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
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.name && "input-error"
          )}
          {...register("email")}
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Phone</span>
        </label>
        <input
          type="text"
          placeholder="Phone"
          className={clsx(
            "input input-bordered w-full max-w-sm",
            errors.name && "input-error"
          )}
          {...register("phone")}
        />
      </div>
      <StepFooter>
        <button type="submit" className="btn btn-ghost">
          Next
        </button>
      </StepFooter>
    </form>
  )
}
