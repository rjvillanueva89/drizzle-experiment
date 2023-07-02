import clsx from "clsx"
import { PropsWithChildren, ReactNode } from "react"
import Loader from "./Loader"

export type Column<T> = {
  label: string
  headerClassName?: string
  cell: (data: T) => ReactNode
}

interface RowSpanProps extends PropsWithChildren {
  length: number
}

const RowSpan = ({ length, children }: RowSpanProps) => {
  return (
    <tr>
      <td colSpan={length} className="text-center">
        {children}
      </td>
    </tr>
  )
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

interface DataTableProps<T> {
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
}: DataTableProps<T>) => {
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
          <RowSpan length={columns.length}>
            <Loader className="mx-auto h-10 w-10" />
          </RowSpan>
        )}

        {!loading && data && !data.length && (
          <RowSpan length={columns.length}>Nothing to display</RowSpan>
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
