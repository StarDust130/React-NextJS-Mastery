import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bkdbtknyrgbrahmleiak.supabase.co";
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZGJ0a255cmdicmFobWxlaWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY0Nzk1NTEsImV4cCI6MjA0MjA1NTU1MX0.hiEW0vBbwC9_cYG2T6aJIc4Z44yEEnAf-g6CeRjnwmU`;
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;