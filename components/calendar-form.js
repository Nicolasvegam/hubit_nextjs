/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { ClockIcon, ArrowLeftIcon } from '@heroicons/react/outline'

const notificationMethods = [
  { id: 'Tocar el timbre', title: 'Tocar el timbre' },
  { id: 'Llamar a tu teléfono', title: 'Llamar a tu teléfono' },
  { id: 'Mandarte un mensaje por WhatsApp', title: 'Mandarte un mensaje por WhatsApp' },
  { id: 'Recibir las llaves con el conserje', title: 'Recibir las llaves con el conserje' },
]


const comunas = ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]

function createMarkup( s ) {
  return {__html: s};
}

export default function Example({ service, setBack }) {

  return (
    <>
      <div className="h-full lg:flex">
        <div className="w-10 pr-4 cursor-pointer">
          <a onClick={() => setBack(false)}>
            <ArrowLeftIcon></ArrowLeftIcon>
          </a>
        </div>

        <div className="flex-1 min-w-0 flex overflow-hidden">

          <main className="flex-1 lg:flex overflow-hidden">
            {/* Primary column */}
            <section
              aria-labelledby="primary-heading"
              className="min-w-0 flex-1 h-full overflow-y-auto lg:order-last"
            >
            <div className="pt-2 px-5">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Introduzca los detalles</h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Nombre *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Apellido *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Correo electrónico *
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                    Teléfono 📱 *
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                      <label htmlFor="comuna" className="sr-only">
                        comuna
                      </label>
                      <select
                        id="comuna"
                        name="comuna"
                        autoComplete="comuna"
                        className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
                      >
                        <option>CL</option>
                      </select>
                    </div>
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                      placeholder="+56977480065"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="comuna" className="block text-sm font-medium text-gray-700">
                    Comuna *
                  </label>
                  <div className="mt-1">
                    <select
                      id="comuna"
                      name="comuna"
                      autoComplete="comuna-name"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      {comunas.map((comuna) => (
                        <option key={comuna}>{comuna}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                    Dirección donde estará tu vehículo 🚗 *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    Patente *
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6 pb-5">
                  <p className="text-sm leading-5 text-gray-900">Al llegar a tu domicilio, ¿Qué te gustaría que hiciéramos? *</p>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Notification method</legend>
                    <div className="space-y-4">
                      {notificationMethods.map((notificationMethod) => (
                        <div key={notificationMethod.id} className="flex items-center">
                          <input
                            id={notificationMethod.id}
                            name="notification-method"
                            type="radio"
                            defaultChecked={notificationMethod.id === 'email'}
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label htmlFor={notificationMethod.id} className="ml-3 block text-sm font-medium text-gray-700">
                            {notificationMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-start pb-3">
                <button
                  type="submit"
                  className="ml-5 inline-flex justify-center py-3 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Agendar
                </button>
              </div>
            </div>
            </section>

            {/* Secondary column (hidden on smaller screens) */}
            <aside className="lg:block lg:flex-shrink-0 order-first hidden">
              <div className="h-full relative w-96 border-r border-gray-200 bg-white overflow-y-auto">
              { service ? 
                  <>
                <div className="pt-5 px-8">
                <div className="flex justify-between">
                <img
                className="w-auto h-[55px]"
                src="./carvuk-logo.svg"
                alt=""
                />
                </div>
                <div className="pb-5 sm:flex sm:items-center sm:justify-between">
                  <h3 className="text-lg leading-6 font-bold text-gray-900 pt-5">{service.name}</h3>
                </div>
                <div className="flex">
                  <ClockIcon className="h-6 text-gray-500 pr-2"></ClockIcon>
                  <p className="text-lg leading-6 font-bold text-gray-500" dangerouslySetInnerHTML={createMarkup(service.duration)}></p>
                </div>
                <p className="pt-5 text-base leading-6 font-light text-gray-900" dangerouslySetInnerHTML={createMarkup(service.main)}></p>
                <p className="pt-5 text-base leading-6 font-light text-gray-900" dangerouslySetInnerHTML={createMarkup(service.description)}></p>
                <p className="pt-5 text-base leading-6 font-medium text-gray-900">¿Tienes dudas?</p>
                <p className="pt-5 text-base leading-6 font-light text-gray-900">Puedes contactarnos por WhatsApp al </p>
                <a href="https://api.whatsapp.com/send/?phone=%2B56983841944&text=Hola%21+Tengo+dudas+con+la+revisi%C3%B3n+t%C3%A9cnica...&app_absent=0"><p className="pb-4 text-base font-medium">+56 9 8384 1944</p></a>
                </div>
                </> : null}
              </div>
            </aside>
          </main>
        </div>
      </div>
    </>
  )
}