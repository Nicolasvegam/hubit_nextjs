import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const includedFeatures = [
  'Asistencia 24/7',
  'Revisión técnica a domicilio',
  'Precios preferenciales',
  'Lavado a domicilio',
  'Inspección general',
  'Entre muchos otros ...',
]

export default function BoxSuscripcion() {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Despreocúpate completamente</h2>
            <p className="mt-4 text-xl text-gray-600">
              Nos encargamos de tu auto por una única cuota mensual.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <div className="rounded-md bg-green-50 p-4 mb-5">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">¡Subscríbete HOY y llévate un lavado GRATIS!</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Carvuk Pro</h3>
                <p className="mt-6 text-base text-gray-500">
                  Hacemos que ser dueño de un auto ya no sea un cacho. <br></br>
                  Con Carvuk Pro dejas tu auto a cargo de expertos.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                      ¿Que incluye?
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">Mensual desde</p>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                  <span>$4.990</span>
                  <span className="ml-3 text-xl font-medium text-gray-500">CLP</span>
                </div>
                <div className="mt-6">
                  <Link href="/carvuk-pro">
                    <a
                        className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                      >
                        Ver más
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}