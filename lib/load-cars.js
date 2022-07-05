import { supabase } from '../utils/supabaseClient'

export async function loadCars( uid ) {
    const { data: cars } = await supabase.from('cars').select('id').eq('uid', uid).single()
    const { data: cars_dash } = await supabase.rpc('dashboard_car', { car_id: cars.id })
  
    return cars_dash
}