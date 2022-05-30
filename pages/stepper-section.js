/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, CalendarIcon } from '@heroicons/react/solid'

const steps = [
  { name: '1. Agenda 🗓', description: 'Agenda en nuestra plataforma o con Sergio👨🏻‍🔧', href: '#', status: 'complete' },
  { name: '2. Vamos 👨🏻‍🔧', description: 'Vamos a donde nos indicaste a realizar el', href: '#', status: 'current' },
  { name: '3. Devolvemos tu 🚗', description: 'Te dejamos el auto donde nos indiques.', href: '#', status: 'upcoming' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function StepperSection() {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="overflow-hidden">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative')}>
            {step.status === 'complete' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            ) : (
              <>
                {stepIdx !== steps.length - 1 ? (
                  <div className="-ml-px absolute mt-0.5 top-4 left-4 w-0.5 h-full bg-indigo-600" aria-hidden="true" />
                ) : null}
                <a href={step.href} className="relative flex items-start group">
                  <span className="h-9 flex items-center">
                    <span className="relative z-10 w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                      <CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="ml-4 min-w-0 flex flex-col">
                    <span className="text-xs font-semibold tracking-wide uppercase">{step.name}</span>
                    <span className="text-sm text-gray-500">{step.description}</span>
                  </span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}