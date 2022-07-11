import { supabase } from '../utils/supabaseClient'

export async function loadPastServices( profile_id ) {
    // para un auto despues escalar
    const { data: cars } = await supabase.from('cars').select('id').eq('profile_id', profile_id).single()
    const { data: services } = await supabase.rpc('service_history', { car_id: cars.id }).select('*')
    services.id = 1
    return [services]
}