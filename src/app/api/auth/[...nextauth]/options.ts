import { db } from "@/database/db"
import { users } from "@/database/schema/users"
import { and, eq } from "drizzle-orm"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

export const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Identifier",
          type: "text",
          placeholder: "Identifier",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      authorize: async (credentials) => {
        const { identifier, password } = credentials || {}

        const data = await db
          .select()
          .from(users)
          .where(
            and(eq(users.username, identifier!), eq(users.password, password!))
          )

        if (!data) return null

        const { id, name, email } = data[0]
        return { id, name, email }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
}
