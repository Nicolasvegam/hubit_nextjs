import { InlineWidget } from "react-calendly";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Calendly({props}) {

  const {urlCalendly} = props
  return (
    <>
      <div className="min-h-full">  
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">Agendamiento</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <InlineWidget url={urlCalendly} />
            <div className="px-4 py-4 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}