"use client"

import { createProperty } from "@/actions/create-property"
import { Property } from "@/database/schema/properties"
import { useRouter } from "next/navigation"
import { FormEventHandler } from "react"

interface Props {
  data?: Pick<Property, "id" | "name" | "monthly" | "notes">
}

export const PropertiesForm = ({ data }: Props) => {
  const { push } = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    createProperty(formData)
    push("/properties")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered w-full max-w-sm"
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Monthly</span>
        </label>
        <input
          name="monthly"
          type="number"
          placeholder="Monthly"
          className="input input-bordered w-full max-w-sm"
        />
      </div>
      <div className="form-control w-full max-w-sm">
        <label className="label">
          <span className="label-text">Notes</span>
        </label>
        <textarea
          name="notes"
          className="textarea textarea-bordered"
          placeholder="Notes"
        ></textarea>
      </div>
      <div className="flex w-full justify-end gap-4">
        <button type="submit" className="btn btn-ghost">
          Submit
        </button>
      </div>
    </form>
  )
}
