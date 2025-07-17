import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://laxeerfjjmpalxkidmob.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxheGVlcmZqam1wYWx4a2lkbW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MDM3NzEsImV4cCI6MjA2ODI3OTc3MX0.r6Ldl2RDuuSXUfyoJfCU6JYgNlFkRsngvfT_d_iukjE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
