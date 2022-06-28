import '../styles/globals.css'
import {ScriptAnalyticsGA} from '../components/utils-ganalytics'
import {ScriptTagManager} from '../components/utils-gtagmanager'
import {ScriptTypeform} from '../components/utils-typeform'

/* icons */ 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
