import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { PropsWithChildren } from "react"

export const Sidebar = () => {
  return <aside className="order-first bg-slate-800 text-white sm:w-64"></aside>
}

interface LinkItemProps extends PropsWithChildren {
  href: string
  strict?: boolean
}

const LinkItem = (props: LinkItemProps) => {
  const { strict, ...otherProps } = props
  const { asPath } = useRouter()
  const isActive = strict ? asPath === props.href : asPath.includes(props.href)

  return (
    <Link
      className={clsx(
        "p-sm flex items-center",
        isActive ? "bg-slate-600" : "hover:bg-slate-700"
      )}
      {...otherProps}
    />
  )
}
