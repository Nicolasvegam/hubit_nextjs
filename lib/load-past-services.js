import { supabase } from '../utils/supabaseClient'

export async function loadPastServices( uid ) {
    const { data: cars } = await supabase.from('cars').select('id').eq('uid', uid).single()
    const { data: services } = await supabase.rpc('service_history', { car_id: cars.id }).select('*')
  
    return [services]
}