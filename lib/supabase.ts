import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://mefqhwyqvulppvkkfqxb.supabase.co"
const supabaseServiceRoleKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZnFod3lxdnVscHB2a2tmcXhiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMzc2MjY1NCwiZXhwIjoyMDQ5MzM4NjU0fQ.Egu_DI782EIAJ0D2brv-J5oN9eRpMwF-ozP5To_YxKQ"

export const supabase = createClient(supabaseUrl!, supabaseServiceRoleKey!)