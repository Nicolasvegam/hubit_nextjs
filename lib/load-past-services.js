import { supabase } from '../utils/supabaseClient'

export async function loadPastServices( uid ) {
    const { data: cars } = await supabase.from('cars').select('*').eq('uid', uid)

    for (let i = 0; i < cars.length; i++) {
        let { data: model } = await supabase.from('models').select('*').eq('id', cars[i].mid).single()
        let { data: services } = await supabase.from('services_requested').select('*').eq('cid', cars[i].id)
        cars[i].model = model
        for (let j = 0; j < services.length; j++) {
            let { data: service } = await supabase.from('services').select('name').eq('id', services[j].sid).single()
            services[j].name = service.name
        }
        cars[i].services = services
    }
  
    return cars
}