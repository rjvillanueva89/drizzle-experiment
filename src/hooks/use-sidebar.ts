import { useEffect } from "react"
import useToggle from "./use-toggle"

export const useSidebar = () => {
  const collapseOn = 974
  const isCollapsed = collapseOn >= window.innerWidth
  const { state: isOpen, close, toggle } = useToggle(!isCollapsed)

  useEffect(() => {
    return () => {
      if (isCollapsed) isOpen && close()
    }
  }, [isCollapsed, isOpen, close])

  return { isOpen, toggle }
}
