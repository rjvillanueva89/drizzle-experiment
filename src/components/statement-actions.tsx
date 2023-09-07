"use client"

import { deleteStatement } from "@/actions/delete-statement"
import { IconEllipsisVertical } from "./Icons/Outline"

interface Props {
  id: string
}

export const StatementActions = ({ id }: Props) => {
  return (
    <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
      <label tabIndex={0} className="hover:cursor-pointer">
        <IconEllipsisVertical className="h-5 w-5" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button type="button" onClick={() => deleteStatement(id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  )
}
