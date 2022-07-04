import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/auth'
import Account from '../components/account'


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
        </div>
    )
}

export default LogInPage