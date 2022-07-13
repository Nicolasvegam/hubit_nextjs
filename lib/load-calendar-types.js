import { supabase } from '../utils/supabaseClient'

export async function loadCalendarTypes( ) {
    // para un auto despues escalar
    const { data: calendar } = await supabase.rpc('get_all_calendar_types')
  
    return calendar
}