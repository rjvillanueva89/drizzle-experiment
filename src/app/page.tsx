"use client"
import { getServerSession } from "next-auth"
import { signOut } from "next-auth/react"
import { options } from "./api/auth/[...nextauth]/options"

export default async function Home() {
  const session = await getServerSession(options)

  console.log(session)

  return (
    <main className="w-full h-[100dvh] flex items-center justify-center">
      {session && (
        <button type="button" onClick={() => signOut()}>
          sign out
        </button>
      )}
    </main>
  )
}
