import { supabase } from '../utils/supabaseClient'

export async function loadDrivers() {
    // para un auto despues escalar
    const { data: drivers } = await supabase.from('drivers').select('*')

    return drivers
}
