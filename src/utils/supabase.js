import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://kchbhwrqnskwnfwfntwc.supabase.co";
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaGJod3JxbnNrd25md2ZudHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDYyNzcsImV4cCI6MjA0Njk4MjI3N30.B1Wag3xy-w4zlUNAYlrUNmTzohugqtgguEKzLG11Cpo`; // Use backticks for multiline strings

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
