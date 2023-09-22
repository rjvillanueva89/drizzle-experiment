CREATE TABLE IF NOT EXISTS "statement_items" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"item" text NOT NULL,
	"description" text,
	"amount" numeric NOT NULL,
	"statement_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "statement_items" ADD CONSTRAINT "statement_items_statement_id_statements_id_fk" FOREIGN KEY ("statement_id") REFERENCES "statements"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
