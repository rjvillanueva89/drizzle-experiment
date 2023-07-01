import { migrate } from "drizzle-orm/postgres-js/migrator"
import drizzleConfig from "../../drizzle.config"
import { db } from "./db"

migrate(db, { migrationsFolder: drizzleConfig.out })
