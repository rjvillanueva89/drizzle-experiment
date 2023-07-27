"use client"

import { SessionProvider } from "next-auth/react"
import { ConfirmationProvider } from "./confirmation-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ConfirmationProvider>{children}</ConfirmationProvider>
    </SessionProvider>
  )
}
