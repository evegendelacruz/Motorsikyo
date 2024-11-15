import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = https://kchbhwrqnskwnfwfntwc.supabase.co
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjaGJod3JxbnNrd25md2ZudHdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0MDYyNzcsImV4cCI6MjA0Njk4MjI3N30.B1Wag3xy-w4zlUNAYlrUNmTzohugqtgguEKzLG11Cpo

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});