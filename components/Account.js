import { Disclosure} from '@headlessui/react'
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline'
import { supabase } from '../utils/supabaseClient'
import CarCard from './car-card.js'
import PastServicesCard from './past-services.js'
import FutureServicesCard from './services-suggestions.js'
import { useState, useEffect } from 'react'
import { loadCars } from '../lib/load-cars'
import { loadPastServices } from '../lib/load-past-services'
import { loadServicesSuggestions } from '../lib/load-service-suggestions'

export default function Account( { session } ) {
  const [ cars, setCars ] = useState([])
  const [ servicesPerCar, setServicesPerCar ] = useState([])
  const [ suggestionsPerCar, setSuggestionsPerCar ] = useState([])

  useEffect(() => {
    loadCars(session.user.id).then((cars) => {
      setCars(cars)
    })
    loadPastServices(session.user.id).then((cars) => {
      setServicesPerCar(cars)
    })
    loadServicesSuggestions(session.user.id).then(
      (cars) => {
        setSuggestionsPerCar(cars)
    })
  }, [session])

  return (
    <>
      {/* Background color split screen for large screens */}
      <div className="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
      <div className="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />
      <div className="relative min-h-screen flex flex-col">
        {/* Navbar */}
        <Disclosure as="nav" className="flex-shrink-0 bg-indigo-600">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  {/* Logo section */}
                  <div className="flex items-center px-2 lg:px-0 xl:w-64">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-auto"
                        src="../icons/logo-tipo-fondo-negro.png"
                        alt="Workflow"
                      />
                    </div>
                  </div>
            
                  <div className="flex lg:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  {/* Links section */}
                  <div className="hidden lg:block lg:w-80">
                    <div className="flex items-center justify-end">
                      <div className="flex">
                        <a
                          href={'https://wa.me/+56931402144?text=¡Hola! Necesito ayuda con mi cuenta. Mi correo ' + session.user.email}
                          className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                        >
                          Soporte
                        </a>
                        <a
                          href="#"
                          onClick={() => supabase.auth.signOut()}
                          className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white"
                        >
                          Cerrar sesión
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="px-2 pt-2 pb-3">
                  <Disclosure.Button
                    as="a"
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800"
                  >
                    Dashboard
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    href={'https://wa.me/+56931402144?text=¡Hola! Necesito ayuda con mi cuenta.'}
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                  >
                    Support
                  </Disclosure.Button>
                </div>
                <div className="pt-4 pb-3 border-t border-indigo-800">
                  <div className="px-2">
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                    >
                      Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                    >
                      Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                      as="a"
                      href="#"
                      className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="relative bg-white overflow-hidden">
          <div className="relative pb-10 sm:pb-20 lg:pb-10">
            <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center mb-10 md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  {suggestionsPerCar.map((car) => (
                    <FutureServicesCard key={car.id} car={car}></FutureServicesCard>
                  ))}
                </div>
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                  {cars.map((car) => (
                    <CarCard key={car.id} car={car}></CarCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white" id="service-section">
          <div className="lg:max-w-7xl lg:mx-auto lg:px-8">
            {servicesPerCar.map((car) => (
              <PastServicesCard key={car.sid} car={car}></PastServicesCard>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}