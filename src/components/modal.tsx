import clsx from "clsx"
import dynamic from "next/dynamic"
import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"
import { IconXmark } from "./Icons/Outline"

export interface BaseModalProps {
  title?: string
  onClose?: VoidFunction
}

interface Props extends PropsWithChildren, BaseModalProps {
  id?: string
  className?: string
}

const Modal = ({
  id = "app-modal",
  title,
  onClose,
  className,
  children,
}: Props) => {
  const handleOverlayClick = (event: React.SyntheticEvent) => {
    if (event.currentTarget === event.target && onClose) onClose()
  }

  return createPortal(
    <div
      id={id}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-black/75"
      onClick={handleOverlayClick}
    >
      <div className={clsx("relative p-4 dark:bg-gray-800", className)}>
        <div className="mb-4 flex items-center justify-between">
          <h2>{title}</h2>
          {onClose && (
            <button type="button" onClick={() => onClose()}>
              <IconXmark className="h-5 w-5" />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default dynamic(() => Promise.resolve(Modal), { ssr: false })
