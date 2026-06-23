import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bpschjwgqcxmbhmnbdws.supabase.co";
const supabaseKey = "sb_publishable_JuVt9xiFJjgMb2bQEr-eOw_nXAHQ1Kt";

export const supabase = createClient(supabaseUrl, supabaseKey);
