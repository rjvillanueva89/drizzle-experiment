import Providers from "@/components/providers"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="h-screen w-full flex items-center justify-center text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
            <div className="w-full md:w-[40rem] p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
