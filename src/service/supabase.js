import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aeredkmacmcilqtntrls.supabase.co";
const supabaseKey = "sb_publishable_z-spd0R_sSoLz4OHZZhG1g_5YmM6tag";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
