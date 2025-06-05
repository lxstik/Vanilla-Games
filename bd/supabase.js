import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://relradpajffneghinpop.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJlbHJhZHBhamZmbmVnaGlucG9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMzE4MTMsImV4cCI6MjA2NDcwNzgxM30.4GedpjNzWV5z1iCou3Bq3q28Gs0k-w2Mq-q7vdEHVQ8'
const supabase = createClient(supabaseUrl, supabaseKey)
export { supabase }
