import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
/* Query String
?assigned_to=Carvuk
&event_type_uuid=6e730944-57f1-4808-a67c-450448e74f82
&event_type_name=Revisión%20pre-compra
&event_start_time=2022-06-08T09%3A30%3A00-04%3A00
&event_end_time=2022-06-08T12%3A30%3A00-04%3A00
&invitee_uuid=33efc673-7a44-4c9b-9852-17156af1550f
&invitee_first_name=Nicolás
&invitee_last_name=Vega
&invitee_email=ndvega%40uc.cl
&answer_1=%2B56%209%203735%206356
&answer_2=Test
&answer_3=Puente%20alto
&answer_4=2984324
&answer_5=Llamar%20a%20tu%20teléfono
*/

//realizar links de mercado pago
const urls = { 'revision-tecnica' : 'https://calendly.com/carvuk/revision-tecnica',
                'lavado-full': 'https://calendly.com/carvuk/lavado-a-domicilio-full',
                'lavado-simple': 'https://calendly.com/carvuk/lavado-a-domicilio-simple',
                'revision-pre-compra': 'https://calendly.com/carvuk/revision-precompra',
                'inspeccion-general': 'https://calendly.com/carvuk/inspeccion-general',
}

export default function SuccessfulPayment() {


  const router = useRouter();
    
    useEffect(() => {
      if (router.isReady) {
        console.log(router.query)
        }
      }, [router.isReady]);
    
    function redirectHome() {
        router.replace('/')
    }
    return (
    <>
      <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 grid grid-cols-3">

            <a href="#">
                      <span className="sr-only">Carvuk</span>
                      <img
                      className="h-8 w-auto sm:h-10"
                      src="./carvuk-logo.svg"
                      alt=""
                      />
            </a>
          </div>
      </header>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">¡Nos vemos pronto 🚗!</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <span className="px-2 bg-white text-gray-500 justify-center">Hemos recibido exitosamente tu pago.<br></br> Si tienes dudas, puedes contactarnos por WhatsApp al +56 9 8384 1944.</span>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">¡Gracias por preferirnos!</span>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1">
                <button
                type="submit"
                onClick={() => redirectHome()}
                className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Volver a página principal
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
// 
//            
