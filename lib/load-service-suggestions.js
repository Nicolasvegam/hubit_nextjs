import { supabase } from '../utils/supabaseClient'

export async function loadServicesSuggestions( uid ) {
    const { data: cars } = await supabase.from('cars').select('*').eq('uid', uid)

    for (let i = 0; i < cars.length; i++) {
        let { data: model } = await supabase.from('models').select('*').eq('id', cars[i].mid).single()
        // active and suid
        let { data: subType } = await supabase.from('subscriptions_cars').select('*').eq('cid', cars[i].id).single()
        // sid and type
        let { data: benefits } = await supabase.from('benefits').select('*').eq('suid', subType.suid)
        let suggestions = []
        if ( subType.active ) {
            for (let j = 0; j < benefits.length; j++) {
                let { data: service }  = await supabase.from('services').select('name').eq('id', benefits[j].sid).single()
                let { data: services_realizados } = await supabase.from('services_requested').select('*').eq('cid', cars[i].id).eq('sid', benefits[j].sid).order('id', { ascending: true })
                if (services_realizados.length > 0) {
                    let last_service_date = new Date(services_realizados[services_realizados.length - 1].service_date)
                    let today = new Date();
                    if ( benefits[j].type == 'anual' ) {
                        let service_date_plus_year = new Date(last_service_date.setFullYear(last_service_date.getFullYear() + 1))
                        if ( today > service_date_plus_year) {
                            suggestions.push(service)
                        }
                    } else if ( benefits[j].type == 'monthly' ) {
                        let service_date_plus_month = new Date(last_service_date.setMonth(last_service_date.getMonth() + 1))
                        if ( today > service_date_plus_month) {
                            suggestions.push(service)
                        }
                    }
                } else {
                    suggestions.push(service)
                }
            }        
        }
        cars[i].model = model
        cars[i].suggestions = suggestions
    }
  
    return cars
}