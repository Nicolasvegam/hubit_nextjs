import { supabase } from '../utils/supabaseClient'

export async function loadServicesSub( ) {
    const { data: services } = await supabase.rpc('get_all_services_subscriber').select('*').order('name', { ascending: false })
    return services
}