import { supabase } from '../utils/supabaseClient'

export async function loadCars( uid ) {
    const { data: cars } = await supabase.from('cars').select('*').eq('uid', uid)

    for (let i = 0; i < cars.length; i++) {
        let { data: model } = await supabase.from('models').select('*').eq('id', cars[i].mid).single()
        let { data: lastService } = await supabase.from('services_requested').select('km').eq('cid', cars[i].id)
        let { data: brand } = await supabase.from('brands').select('*').eq('id', model.bid).single()
        cars[i].model = model
        cars[i].model.brand = brand
        cars[i].km = lastService[lastService.length - 1].km
    }
  
    return cars
}