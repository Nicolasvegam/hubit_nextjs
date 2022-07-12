import { supabase } from '../utils/supabaseClient'

export async function loadCalendarAdmin( ) {
    // para un auto despues escalar
    const { data: services } = await supabase.rpc('get_all_services_requested_admin')
  
    return services
}