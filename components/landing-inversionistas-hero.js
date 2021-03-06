import React from 'react'
import { StarIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export default function HeroSection({disabled}) {

  const router = useRouter();

  function redirectToBooking(){
    router.replace('/inversionistas-agendar')
  }

  return (
    <div className="relative bg-white">
      <div className="relative pt-3 pb-16 sm:pb-24 lg:pb-32">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">Usar Carvuk es</span>
                  <span className="block text-emerald-400"> así de simple ✨</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              ¿Interesado en la experiencia Carvuk?<br></br>
              Tenemos un <span className='font-bold	'>lavado a domicilio gratis </span> para ti
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    { disabled ? 
                      (<button onClick={()=> redirectToBooking()}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:py-4 md:text-lg md:px-10 disabled:opacity-75 cursor-not-allowed"
                      disabled>
                      Agendar gratis
                      </button>
                      ): 
                      (<button onClick={()=> redirectToBooking()}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                      Agendar gratis
                      </button>) 
                    }
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="inline-flex items-center divide-x divide-gray-300">
                  <div className="flex-shrink-0 flex pr-5">
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                    <StarIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">4.8 estrellas</span> por más de {' '}
                    <span className="font-medium text-indigo-600">200 clientes</span>
                  </div>
                  <div className="min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3">
                    <span className="font-medium text-gray-900">Servicio válido sólo para {' '}</span>
                    <span className="font-medium text-indigo-600">Santiago 🇨🇱</span>

                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                  <div className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'>
                    <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" 
                    src="./hero-image.svg" alt=""/>
                  </div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}