import Modal from "@/components/modal"
import useToggle from "@/utils/useToggle"
import { PropsWithChildren, createContext, useState } from "react"

interface ConfirmProps {
  title: string
  message: string
  onConfirm?: VoidFunction
}

interface ContextProps {
  confirm: (props: ConfirmProps) => void
}

export const ConfirmatitonContext = createContext<ContextProps>(
  {} as ContextProps
)

export const ConfirmationProvider = ({ children }: PropsWithChildren) => {
  const [confirmProps, setConfirmProps] = useState<ConfirmProps>()
  const { state: isOpen, open, close } = useToggle()

  const handleConfirm = () => {
    confirmProps?.onConfirm && confirmProps.onConfirm()
    close()
  }

  const confirm = (props: ConfirmProps) => {
    setConfirmProps(props)
    open()
  }

  return (
    <ConfirmatitonContext.Provider value={{ confirm }}>
      {children}
      {isOpen && (
        <Modal id="confirmation-modal" title={confirmProps?.title}>
          <div className="w-96">
            <p>{confirmProps?.message}</p>
            <div className="mt-4 flex items-center justify-end">
              {confirmProps?.onConfirm ? (
                <>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={close}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={handleConfirm}
                  >
                    Ok
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={close}
                  >
                    Ok
                  </button>
                </>
              )}
            </div>
          </div>
        </Modal>
      )}
    </ConfirmatitonContext.Provider>
  )
}
