import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xmpkpmpspafbjubezqbg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtcGtwbXBzcGFmYmp1YmV6cWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NjUzOTksImV4cCI6MjA1MTM0MTM5OX0.xq7ugfAo570mN7bY8McGHaR_RK-SydLXITsqmJTJ7FY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
