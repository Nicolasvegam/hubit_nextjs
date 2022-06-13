
import Script from 'next/script'

export default function Revision() {
  return (
    <div id="te-avisamos" className="bg-indigo-700">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">¿Sabes cuando te toca</span>
        <span className="block">la revisión técnica? </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-indigo-200">
          ¡Despreocúpate, déjanos tus datos y te avisamos cuando tienes que hacerla!
        </p>
        <button
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          data-tf-popup="BUV1P2dL" data-tf-iframe-props="title=¡Llena este form y te notificaremos!" data-tf-medium="snippet"
        >
          Me interesa
        </button>
        <Script src="//embed.typeform.com/next/embed.js"></Script>
      </div>
    </div>
  )
}