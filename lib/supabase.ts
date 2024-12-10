import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY
const supabaseServiceRoleKey=process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY

export const supabase = createClient(supabaseUrl!, supabaseServiceRoleKey!)