import clsx from "clsx"

type Position = "left" | "center" | "right"

interface Props {
  label?: string
  labelPosition?: Position
  className?: string
}

export const Separator = ({
  label,
  labelPosition = "center",
  className,
}: Props) => {
  if (!label) return <hr className="my-4" />

  return (
    <div
      className={clsx(
        "mb-4 mt-2",
        {
          "text-center": labelPosition === "center",
          "text-left": labelPosition === "left",
          "text-right": labelPosition === "right",
        },
        className
      )}
    >
      <span className="relative mx-2 h-2 bg-gray-100 p-2 text-xs lowercase dark:bg-gray-900">
        {label}
      </span>
      <hr className="-mt-2.5 border-gray-600" />
    </div>
  )
}
