import '../styles/globals.css'
import {ScriptAnalyticsGA} from '../components/utils-ganalytics'
import {ScriptTagManager} from '../components/utils-gtagmanager'
import {ScriptTypeform} from '../components/utils-typeform'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  
  return (
    <>  
        <ScriptAnalyticsGA/>
        <ScriptTagManager/>
        <ScriptTypeform/>
        <Component {...pageProps} /> 
    </>
  )
}

export default MyApp
