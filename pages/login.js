import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabaseClient'
import Auth from '../components/dashboard-auth'
import Account from '../components/dashboard-index'
import WhatsappLogo from '../components/utils-whatsapp-float'
import HeadPage from './../components/head'

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
            <HeadPage icon='' 
            href='https://carvuk.com/login' 
            title='Portal Carvuk Pro'
            description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode. Servicio exclusivo para nuestros clientes Carvuk Pro' 
            image='https://carvuk.com/image-preview.png' />
            {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
            <WhatsappLogo/>
        </div>
    )
}

export default LogInPage