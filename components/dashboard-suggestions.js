import Badge from './badge-benefits'
import BadgeSub from './badge-sub'

export default function FutureServicesCard( { car } ) {
  function format_date(string) {
    let month = new Date(string).toLocaleDateString('es-ES', {month: 'long'})
    let year = new Date(string).toLocaleDateString('es-ES', {year: 'numeric'})
    return month.charAt(0).toUpperCase() + month.slice(1) + ' ' + year;
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mb-10">
      <h1 className="font-large text-xl text-black-1000 m-5"> Carvuk <BadgeSub label={car.subscription}/> incluye: </h1>
      <ul role="list" className="divide-y divide-gray-200">
        {car ? car.suggestions.map((service) => (
          <li key={service.id}>
            <div className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate xl:w-[30vw] lg:w-[40vw] md:w-[53vw] sm:w-[70vw] w-[45vw]">{ service.name }</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    {service.status == "Realizado" ? <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{ service.status }</p> :
                    service.status == "Agendado" ? <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">{ service.status }</p> :
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{ service.status }</p>}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-xs text-gray-500">
                        Precio anterior:
                      </p>
                      <p className="mt-2 flex items-center text-xs text-gray-500 sm:mt-0 sm:ml-6">
                        ${service.ref_price.toLocaleString('en-CL')} &nbsp;&nbsp;
                      </p>
                    </div>
                  </div>
                  { service.name == 'Revisión técnica' ? 
                    <div >
                      { service.rt_due_check ? 
                      <>
                        <a href={'https://wa.me/+56931402144?text=¡Hola! Quería pedir mi ' + service.name.toLowerCase() + ' gratis por la suscripción del auto patente ' + car.plate}
                        >
                          <button
                            type="button"
                            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Agendar revisión
                          </button>
                        </a> 
                        <p className="max-w-xs text-center text-xs text-red-500"> {'Vence en ' +  format_date(car.rt_due) + ' ❗️'} </p>
                      </>
                      :
                      <>
                      <div>
                        <button
                        disable
                        type="button"
                        className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-300 hover:bg-indigo-100"
                        >
                          Agendar revisión
                        </button>
                      </div>
                        <p className="max-w-xs text-center text-xs text-gray-500"> {'Vence en ' +  format_date(car.rt_due) + ' ✅'} </p>
                      </>
                      }
                    </div> :
                    <div className="justify-end">
                      { service.offer ? 
                      <a href={'https://wa.me/+56931402144?text=¡Hola! Quería pedir mi ' + service.name.toLowerCase() + ' gratis por la suscripción del auto patente ' + car.plate}
                      >
                        <button
                          type="button"
                          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                        Agendar gratis
                      </button>
                      </a> :
                      <>
                      <a href='#service-section'>
                        <button
                        type="button"
                        className="px-4 py-2 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Agendar con descuento
                        </button>
                      </a>
                      <p className="max-w-xs text-center text-xs text-gray-500">Utilizado para este { service.type == 'monthly 😢' ? 'mes' : 'año 😢'}</p>
                      </>
                      }
                    </div>
                  }
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                  { service.ref_price ? 
                      <p className="text-gray-900">
                        <span>
                          { service.ref_price ? ( 
                          <Badge label={"Precio descuento: GRATIS"}/>
                              ) : (null) }
                        </span>
                      </p> :
                      'Sin fecha agendamiento'}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )) : null}
        <li key='ver descuentos'>
          <div className="block hover:bg-gray-50">
            <div className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <a href="#service-section">
                  <p className="text-sm font-medium text-indigo-600 truncate xl:w-[30vw] lg:w-[40vw] md:w-[53vw] sm:w-[70vw] w-[45vw]"> Ver más beneficios... </p>
                </a>
              </div>      
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}