import { useRouter } from 'next/router'

// id , nombre, apellido, profesion, descripcion, imagen, rating
const mecanicos = {
  '':
  {
  id: 0,
  name: '',
  lastName: '',
  profession: '',
  imageSrc: './desabolladura-img.svg',
  imageAlt: '',
  description: '¡Hola, soy Nacho! Tu mecánico Carvuk. Estoy acá para ayudarte en lo que necesites. En Carvuk, tu auto es nuestro problema y nuestra prioridad. No dudes en preguntarme lo que necesites, estoy aquí para ayudarte.',
  rating: 5
  },
}

const MecanicPage = () => {

  const router = useRouter()
  const { mecanico } = router.query

  return(
    <>
      <div className="min-h-full">  
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <a href="#">
                <span className="sr-only">Carvuk</span>
                <img
                className="h-8 w-auto sm:h-10"
                src="../carvuk-logo.svg"
                alt=""
                />
            </a>
          </div>
        </header>
        <main>
        <div className="mt-12 max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">{mecanico}</h1>
              </div>
              <div className="mt-4">
                <h2 className="sr-only">Reviews</h2>
                <div className="flex items-center">
                  <p className="text-sm text-gray-700">
                    3.9
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                  <div className="ml-1 flex items-center">
                    <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-yellow-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div aria-hidden="true" className="ml-4 text-sm text-gray-300">·</div>
                  <div className="ml-4 flex">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">See all 512 reviews</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                <img src="https://st2.depositphotos.com/1518767/6556/i/950/depositphotos_65565071-stock-photo-smiling-mechanic-looking-at-camera.jpg" alt="Back of women&#039;s Basic Tee in black." className="lg:col-span-2 lg:row-span-2 rounded-lg" />
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">

              <div className="mt-1">
                <h2 className="text-sm font-medium text-gray-900">Sobre mi</h2>

                <div className="mt-4 prose prose-sm text-gray-500">
                  <p>¡Hola, soy Nacho! Tu mecánico Carvuk. Estoy acá para ayudarte en lo que necesites. En Carvuk, tus problemas son nuestros problemas y tus prioridades son las nuestras. No dudes en preguntarme lo que necesites, estoy aquí para ayudarte.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>

    </>
    )
  }

  export default MecanicPage