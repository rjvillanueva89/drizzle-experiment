import * as dotenv from "dotenv"
import { Config } from "drizzle-kit"

dotenv.config()

export default {
  schema: "src/database/schema",
  out: "src/database/migrations",
  driver: "pg",
  dbCredentials: {
    host: process.env.PGHOST!,
    database: process.env.PGDATABASE!,
    user: process.env.PGUSER!,
    password: process.env.PGPASSWORD!,
  },
} satisfies Config
