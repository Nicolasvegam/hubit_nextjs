import { supabase } from '../utils/supabaseClient'

export async function loadSuppliers() {
    // para un auto despues escalar
    const { data: suppliers } = await supabase.from('suppliers').select('*').eq('is_active', 'true')

    return suppliers
}
