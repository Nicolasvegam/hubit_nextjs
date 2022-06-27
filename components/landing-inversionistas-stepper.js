import { CheckIcon } from '@heroicons/react/solid'

const timeline = [
  {
    id: 1,
    content: 'Agenda en la',
    target: 'plataforma',
    href: '#',
    date: '🗓',
    datetime: '2020-09-20',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 2,
    content: 'Carvuk va al lugar en la fecha',
    target: 'indicada',
    href: '#',
    date: '⏱',
    datetime: '2020-09-22',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 3,
    content: 'Te lavamos el',
    target: 'vehículo',
    href: '#',
    date: '🚗',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StepbyStep() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">¿Cómo funciona Carvuk?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A domicilio, seguro y más rápido
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Vamos a donde más te acomode a entregarte un servicio garantizado.
          </p>
        </div>

        <div className="mt-10 items-center max-w-2xl">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
          <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classNames(
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                    )}
                  >
                    <p className="text-white" aria-hidden="true" >{event.id}</p>
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      {event.content}{' '}
                      <span className="font-medium text-gray-900">
                        {event.target}
                      </span>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
          </dl>
        </div>
      </div>
    </div>
  )
}