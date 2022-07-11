import { supabase } from '../utils/supabaseClient'

export async function loadCars( user_id ) {
    // para un auto despues escalar
    const { data: cars } = await supabase.rpc('cars_for_user', { user_id: user_id }).single()
    const { data: cars_dash } = await supabase.rpc('dashboard_car', { car_id: cars.id })
  
    return cars_dash
}