import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon, ShieldCheckIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Badge from './badge-benefits'

export default function SecondModal({ open, onCloseModal, product }) {
  
  const router = useRouter()

  function onClickButton(e){
    
    e.preventDefault()
    if (product.queryString){
      const value = product.queryString
      router.push({
        pathname: '/agendar',
        query: {'servicio': value}
      });
    }
    else {
      window.location.href = product.href
    }
  }

  return (
    <Transition.Root show={Boolean(open)} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-stretch md:items-center justify-center min-h-full text-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex text-base text-left transform transition w-full md:max-w-2xl md:px-4 md:my-8 lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={onCloseModal}
                  >
                    <span className="sr-only">Cerrar</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                        <img src={product?.imageSrc} alt={product?.imageAlt} className="object-center object-cover" />
                      </div>
                      <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                        <a href={product?.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                          ¿Tienes dudas? Contáctanos 🤳
                        </a>
                      </p>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product?.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-3">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">{product?.price} &nbsp;&nbsp;
                            <span>
                              { product?.proBenefit ? (<Badge label={"Carvuk Pro: " + product.proBenefit}/>) :(null) }
                            </span>
                        </p>

                        {/* Reviews 
                        <div className="mt-3">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating ? 'text-gray-400' : 'text-gray-200',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                           <p className="sr-only">{product.rating} out of 5 stars</p>
                          </div>
                        </div>
                        */}

                        <div className="mt-6">
                          <h4 className="sr-only">¿En que consiste? </h4>

                          <p className="text-sm text-gray-700">{product?.description}</p>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-6">
                        <form onSubmit={(e)=> onClickButton(e)}>
                          <div className="mt-6">
                            <button
                              type="submit"
                              className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                              Agendar
                            </button>
                          </div>
                          <div className="mt-6 text-center">
                            <p className="group inline-flex text-base font-medium">
                              <ShieldCheckIcon
                                className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="text-gray-500">Servicio con garantía</span>
                            </p>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
