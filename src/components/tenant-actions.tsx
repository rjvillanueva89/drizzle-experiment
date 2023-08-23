"use client"

import { deleteTenant } from "@/actions/delete-tenant"
import Link from "next/link"
import { IconEllipsisVertical } from "./Icons/Outline"

interface Props {
  id: string
}

export const TenantActions = ({ id }: Props) => {
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
          <Link href={`/tenant/edit/${id}`}>Edit</Link>
        </li>
        <li>
          <Link href={`/statement/new/${id}`}>Add Statement</Link>
        </li>

        <li>
          <button type="button" onClick={() => deleteTenant(id)}>
            Delete
          </button>
        </li>
      </ul>
    </div>
  )
}
