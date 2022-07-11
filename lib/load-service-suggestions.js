import { supabase } from '../utils/supabaseClient'

export async function loadServicesSuggestions( user_id ) {
    // Solo para un vehiculo escalar despues
    const { data: cars } = await supabase.rpc('cars_for_user', { user_id: user_id }).single()
    let { data: benefits } = await supabase.rpc('services_suggested', { car_id: cars.id })
    let suggestions = []

    for (let j = 0; j < benefits.length; j++) {
        cars.subscription = benefits[0].subscription
        let today = new Date();
        benefits[j].rt_due_check = false
        if (benefits[j].name == "Revisión técnica") {
            let rt_due = new Date(cars.rt_due);
            rt_due.setMonth(rt_due.getMonth() - 2)
            if (today > rt_due) {
                cars.rt_check = true
            }
        }
        let { data: services_realizados} = await supabase.rpc('get_last_service_by_sid', { car_id: cars.id, s_id: benefits[j].id}).maybeSingle()
        if (services_realizados) {
            let last_service_date = new Date(services_realizados.service_date)
            if ( benefits[j].type == 'anual' ) {
                if ( today.getFullYear() >= last_service_date.getFullYear() + 1 ) {
                    benefits[j].offer = true
                    suggestions.push(benefits[j])
                } else {
                    benefits[j].offer = false
                    suggestions.push(benefits[j])
                }
            } else if ( benefits[j].type == 'monthly' ) {
                if ( today.getMonth() >= last_service_date.getMonth() + 1 ) {
                    benefits[j].offer = true
                    suggestions.push(benefits[j])
                } else {
                    benefits[j].offer = false
                    suggestions.push(benefits[j])
                }
            }
        } else {
            benefits[j].offer = true
            suggestions.push(benefits[j])
        }
    }
    cars.suggestions = suggestions
  
    return [cars]
}