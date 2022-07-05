import { supabase } from '../utils/supabaseClient'

export async function loadServicesSuggestions( uid ) {
    // Solo para un vehiculo escalar despues
    const { data: cars } = await supabase.from('cars').select('*').eq('uid', uid).single()
    let { data: benefits } = await supabase.rpc('services_suggested', { car_id: cars.id })
    let suggestions = []

    for (let j = 0; j < benefits.length; j++) {
        cars.subscription = benefits[0].subscription
        let { data: services_realizados} = await supabase.rpc('get_last_service_by_sid', { car_id: cars.id, s_id: benefits[j].id}).maybeSingle()
        if (services_realizados) {
            let last_service_date = new Date(services_realizados.service_date)
            let today = new Date();
            if ( benefits[j].type == 'anual' ) {
                if ( today.getFullYear() >= last_service_date.getFullYear() + 1 ) {
                    suggestions.push(benefits[j])
                }
            } else if ( benefits[j].type == 'monthly' ) {
                if ( today.getMonth() >= last_service_date.getMonth() + 1 ) {
                    suggestions.push(benefits[j])
                }
            }
        } else {
            suggestions.push(benefits[j])
        }
    }
    cars.suggestions = suggestions
  
    return [cars]
}