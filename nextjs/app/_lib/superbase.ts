import { createClient } from "@supabase/supabase-js";

export const superbase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || ""
);
