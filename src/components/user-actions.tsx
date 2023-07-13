"use client"

import { deleteUser } from "@/actions/delete-user"
import Link from "next/link"
import { IconEllipsisVertical } from "./Icons/Outline"

interface Props {
  id: string
}

export const UserActions = ({ id }: Props) => {
  const handleDelete = () => {
    deleteUser(id)
  }

  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <label tabIndex={0}>
        <IconEllipsisVertical className="h-5 w-5" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={`/property/edit/${id}`}>Edit</Link>
        </li>
        <li>
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  )
}
