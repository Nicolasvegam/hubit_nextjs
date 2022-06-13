import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import Stepper from '../components/stepper'

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
const urls = { 'Revisión técnica' : 'https://mpago.la/1v2xHYQ',
                'Lavado a domicilio Full': 'https://mpago.la/2yiV1Gh', 
                'Lavado a domicilio Simple': 'https://mpago.la/28mjfnK', 
                'Revisión pre-compra': 'https://mpago.la/2pp1vd6', 
                'Inspección general': 'https://mpago.la/2bViWm5', 
}

export default function Example() {


    const router = useRouter();

    useEffect(() => {
      if (router.isReady) {
        }
      }, [router.isReady]);
    
    const service = router.query.event_type_name
    const urlMEPA = urls[service];


    return !router.isReady ? null : (
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">¡Estás casi listo!</h2>
          <h1 className="text-center font-semibold uppercase text-indigo-600">{router.query.invitee_first_name} {router.query.invitee_last_name}</h1>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <span className="px-2 bg-white text-gray-500 justify-center">Has agendado el servicio &quot;{router.query.event_type_name.toLowerCase()}&quot; para el {router.query.event_start_time.toString().slice(0,10)}. Ese día vamos a {router.query.answer_5.toLowerCase()} para recoger tu vehículo patente {router.query.answer_4.toUpperCase()} en la dirección {router.query.answer_2}. Para confirmar tu cita procede a realizar el pago.</span>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Procede con el pago</span>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1">
                <a
                type="submit"
                href={urlMEPA}
                className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Pagar
              </a>
              <p className="flex justify-center text-sm font-medium text-gray-500 mt-6">
                <LockClosedIcon className="w-5 h-5 text-gray-400 mr-1.5" aria-hidden="true" />
                Pagos protegidos por Mercado Pago
              </p>
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
