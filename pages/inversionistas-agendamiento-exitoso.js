import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Example() {


    const router = useRouter();

    useEffect(() => {
      if (router.isReady) {
        }
      }, [router.isReady]);
    
    function redirectHome() {
        router.replace('/')
    }

    function getDateFormat(){
      var fullDate = router.query.event_start_time.toString()
      var year = fullDate.slice(0,4)
      var month = fullDate.slice(5,7)
      var day = fullDate.slice(8,10)
      var time = fullDate.slice(11,16)
      var finalDate = day + '/' + month + '/' + year + ' a las ' + time
      return finalDate
    }

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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">¡Estás listo!</h2>
          <h1 className="text-center font-semibold uppercase text-indigo-600">{router.query.invitee_first_name} {router.query.invitee_last_name}</h1>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <span className="px-2 bg-white text-gray-500 justify-center">Has agendado el servicio <span className='font-bold'>lavado a domicilio</span> para el <span className='font-bold'>{getDateFormat()}</span>. Ese día vamos a {router.query.answer_5.toLowerCase()} cuando estemos en la dirección <span className='font-bold'>{router.query.answer_2}</span> para lavar tu vehículo patente <span className='font-bold'>{router.query.answer_4.toUpperCase()}</span>.</span>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
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
