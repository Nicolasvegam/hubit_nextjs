import { CalendarIcon, LocationMarkerIcon, ClipboardIcon } from '@heroicons/react/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons'

export default function PastServicesCard( { car } ) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md mb-10">
      <h1 className="font-medium text-gray-900 m-5"> Historial de servicios: </h1>
      <ul role="list" className="divide-y divide-gray-200">
        {car ? car.map((service) => (
          <li key={service.sid}>
            <a href="#" className="block hover:bg-gray-50">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-indigo-600 truncate">{ service.name }</p>
                  <div className="ml-2 flex-shrink-0 flex">
                    {service.status == "Realizado" ? <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{ service.status }</p> :
                    service.status == "Agendado" ? <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">{ service.status }</p> :
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">{ service.status }</p>}
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <FontAwesomeIcon icon={faNoteSticky} className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {service.details}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                      {service.address}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                    { service.service_date ? 
                    <p>
                      Agendado para <time dateTime={service.service_date}>{ service.service_date.substring(8,10) }/{ service.service_date.substring(5,7) }/{ service.service_date.substring(0,4) }</time>
                    </p> :
                    'Sin fecha agendamiento'}
                  </div>
                </div>
              </div>
            </a>
          </li>
        )) : null}
      </ul>
    </div>
  )
}