import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://pfudfgexovklvnelwebc.supabase.co";
const SERVICE_KEY =
  "'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmdWRmZ2V4b3ZrbHZuZWx3ZWJjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY1MzA3MzA5MiwiZXhwIjoxOTY4NjQ5MDkyfQ.t5UOGxLG0sujDjLFMw4CFdQVL5_1oDc7FQl5OMfg5Ms'";

export const supabase = createClient(SUPABASE_URL, SERVICE_KEY);
