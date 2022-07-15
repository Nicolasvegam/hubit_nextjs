import { supabase } from '../utils/supabaseClient'

export async function loadBlockedHours( date, type ) {
    // para un auto despues escalar
    const { data: hours } = await supabase.rpc('get_blocked_by_month', { day_input: date, type_calendar: type})
  
    return hours
}