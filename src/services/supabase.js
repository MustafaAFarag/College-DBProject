import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jzwikwpkouiyvovrnhjg.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6d2lrd3Brb3VpeXZvdnJuaGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ3MTA4ODgsImV4cCI6MjA1MDI4Njg4OH0.dkpEqPFRf56poLuZum6yZ2Y9fuo2R6h70nO7BAv0kQo";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
