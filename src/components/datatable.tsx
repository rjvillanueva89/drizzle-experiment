import Loader from "@/components/Loader"
import clsx from "clsx"
import { ReactNode } from "react"

export type Column<T> = {
  label: string
  headerClassName?: string
  cell: (data: T) => ReactNode
}

const DataCell = ({ label, render }: { label: string; render: ReactNode }) => {
  return (
    <td
      data-title={label}
      className="flex justify-between whitespace-nowrap before:text-xs before:font-bold before:uppercase before:text-gray-500 before:content-[attr(data-title)] md:table-cell md:py-4 md:before:content-[]"
    >
      {render}
    </td>
  )
}

interface DataRowProps<T> {
  data: T
  columns: Column<T>[]
}

export const DataRow = <T extends {}>({ columns, data }: DataRowProps<T>) => {
  return (
    <tr className="block w-full md:table-row md:w-auto">
      {columns.map(({ label, cell }, key) => (
        <DataCell key={key} label={label} render={cell(data)} />
      ))}
    </tr>
  )
}

interface DatatableProps<T> {
  loading?: boolean
  columns: Column<T>[]
  data?: T[]
  limit?: number
  total?: number
}

export const Datatable = <T extends {}>({
  loading,
  columns,
  data,
}: DatatableProps<T>) => {
  return (
    <table className="table">
      <thead className="hidden md:table-row-group">
        <tr>
          {columns.map(({ label, headerClassName }, key) => (
            <th key={key} className={clsx(headerClassName)}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="block md:table-row-group">
        {loading && (
          <tr>
            <td colSpan={columns.length} className="text-center">
              <Loader className="mx-auto h-10 w-10" />
            </td>
          </tr>
        )}

        {!loading && data && !data.length && (
          <tr>
            <td colSpan={columns.length} className="text-center">
              Nothing to display
            </td>
          </tr>
        )}

        {!loading &&
          data &&
          data.map((row, key) => (
            <DataRow key={key} columns={columns} data={row} />
          ))}
      </tbody>
    </table>
  )
}
