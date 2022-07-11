import { supabase } from '../utils/supabaseClient'

export async function loadCars( profile_id ) {
    // para un auto despues escalar
    const { data: cars } = await supabase.from('cars').select('id').eq('profile_id', profile_id).single()
    const { data: cars_dash } = await supabase.rpc('dashboard_car', { car_id: cars.id })
  
    return cars_dash
}