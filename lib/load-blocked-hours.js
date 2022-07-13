import { supabase } from '../utils/supabaseClient'

export async function loadBlockedHours( date ) {
    // para un auto despues escalar
    const { data: hours } = await supabase.rpc('get_blocked_by_date', { day_input: date})
  
    return hours
}