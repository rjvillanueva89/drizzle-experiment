"use client"

import { createProperty } from "@/actions/create-property"
import { Property } from "@/database/schema/properties"
import { FormEventHandler } from "react"

interface Props {
  data?: Pick<Property, "id" | "name" | "monthly" | "notes">
}

export const PropertiesForm = ({ data }: Props) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    createProperty(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-96 flex-col items-center gap-4"
    >
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
      <div className="flex w-full justify-end">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  )
}
