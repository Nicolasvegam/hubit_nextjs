/* This example requires Tailwind CSS v2.0+ */
import { useRouter } from 'next/router'

export default function CTA({disabled}) {
  
  const router = useRouter();

  function redirectHome(){
    router.replace('/inversionistas-agendar')
    }
    return (
      <div className="bg-indigo-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            <span className="block">¿Listo para vivir la experiencia Carvuk?</span>
            <span className="block text-indigo-600">Los cupos son limitados</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            { disabled ? 
              (<button
                onClick={() => redirectHome()}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 disabled:opacity-75 cursor-not-allowed"
              disabled>
                Agendar gratis
              </button>
              ): 
              (<button
                onClick={() => redirectHome()}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Agendar gratis
              </button>
              ) 
            }
              
            </div>
          </div>
        </div>
      </div>
    )
  }