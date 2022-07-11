import { supabase } from '../utils/supabaseClient'

export async function loadPastServices( user_id ) {
    // para un auto despues escalar
    const { data: cars } = await supabase.rpc('cars_for_user', { user_id: user_id }).single()
    const { data: services } = await supabase.rpc('service_history', { car_id: cars.id }).select('*').order('service_date', { ascending: false })
    services.id = 1
    return [services]
}