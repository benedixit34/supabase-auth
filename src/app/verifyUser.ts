import { createClient } from "@/utils/supabase/server"

export async function getUser() {
    const supabase = await createClient()
    
    const user = await supabase.auth.getUser()
    return user
}