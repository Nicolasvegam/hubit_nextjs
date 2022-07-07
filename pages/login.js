import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/dashboard-auth'
import Account from '../components/dashboard-index'
import WhatsappLogo from '../components/utils-whatsapp-float'


const LogInPage = () => {
    const [session, setSession] = useState(null)

    useEffect(() => {
        setSession(supabase.auth.session())
        supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
        })
    }, [])

    return (
        <div>
            {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
            <WhatsappLogo/>
        </div>
    )
}

export default LogInPage