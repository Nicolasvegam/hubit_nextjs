import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'


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
            {!session ? <p /> : <p key={session.user.id} session={session} />}
        </div>
    )
}

export default LogInPage