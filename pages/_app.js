import { ChakraProvider } from '@chakra-ui/react'
import '../styles/react-datapicker.css'
import 'react-datepicker/dist/react-datepicker.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
