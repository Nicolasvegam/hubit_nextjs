/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import Badge from './badge'
import { PopupButton } from '@typeform/embed-react'
import { CheckCircleIcon} from '@heroicons/react/solid'

const pricing = {
  tiers: [
    {
      title: 'El clásico 🔥',
      price: "$4.990",
      frequency: '/mes',
      description: 'Nos encargamos de la agenda de tu auto. Nunca más se te pasará la mantención o revisión técnica',
      features: [
        {text: 'Revisión técnica a domicilio', tag: '$35.000'},
        {text: 'Inspección y diagnóstico de tu 🚘', tag: '$25.000'},
        {text: 'Precios preferenciales en todos nuestros servicios', tag: '$100.000'},
      ],
      label: 'Ahorra $100.000 y 30 horas por año',
    },
    {
      title: 'El reluciente ✨',
      price: "$15.990",
      frequency: '/mes',
      description: 'Si te gusta que tu auto este siempre impecable. ¡Este plan esta hecho para ti!',
      features: [
        {text: 'Revisión técnica a domicilio', tag: '$35.000'},
        {text: 'Inspección y diagnóstico de tu 🚘', tag: '$25.000'},
        {text: 'Precios preferenciales en todos nuestros servicios', tag: '$100.000'},
        {text: 'Lavado a domicilio mensual 🚘🚿', tag: '$220.000'},
      ],
      label: 'Ahorra $172.000 y 40 horas por año',
    },
    {
      title: 'El full 💎',
      price: 'A medida',
      frequency: '/mes',
      description: 'Olvídate de cobros inesperados y paga tan sólo una cuota al mes que incluya todo ✅',
      features: [
        {text: 'Revisión técnica a domicilio'},
        {text: 'Inspección y diagnóstico de tu 🚘'},
        {text: 'Precios preferenciales en todos nuestros servicios'},
        {text: 'Lavado a domicilio mensual 🚘🚿'},
        {text: 'Seguro y permiso de circulación'},
        {text: 'Mantención por kilometraje'},
      ],
      label: 'Ahorra a tu medida',
    },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <div id="pricing" className="max-w-7xl mx-auto py-24 px-4 bg-grey sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
        Para todos los gustos
      </h2>
      <p className="mt-6 max-w-2xl text-xl text-gray-500">    
        Con Carvuk Pro dejas tu auto a cargo de expertos. <br></br>
      </p>

      {/* Tiers */}
      <div className="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        {pricing.tiers.map((tier) => (
          <div
            key={tier.title}
            className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">{tier.title}</h3>
              
              <p className="absolute top-0 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                {tier.label}
              </p>
              
              <p className="mt-4 flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                <span className="ml-1 text-xl font-semibold">{tier.frequency}</span>
              </p>
              <p className="mt-6 text-gray-500">{tier.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon className="flex-shrink-0 w-6 h-6 text-indigo-500" aria-hidden="true" />
                    <span className="ml-3 text-gray-500">{feature.text} <br></br></span>
                  </li>
                ))}
              </ul>
            </div>
            <>
            {tier.title === 'El clásico 🔥'? (
              <div className="rounded-md bg-green-50 p-4 mb-2">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">¡Subscríbete HOY y llévate un lavado GRATIS!</p>
                  </div>
                </div>
              </div>
            ) : (
              null
            ) }
          </>
            <PopupButton id="YE27fOe4" 
              className={classNames(
              tier.mostPopular
                ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
              'mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium')}>
              Me interesa
            </PopupButton>
        
          </div>
        ))}
      </div>
    </div>
  )
}