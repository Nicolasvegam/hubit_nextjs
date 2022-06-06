import { Fragment, useState, useEffect } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { ShieldCheckIcon, XIcon } from '@heroicons/react/outline'
import { CheckIcon, StarIcon } from '@heroicons/react/solid'
import { withRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function FirstModal(props) {
  const {open, onCloseModal, product} = props
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [currentPrice, setCurrentPrice] = useState(product.sizes[0].price)

  function onClickButton(e){
    e.preventDefault()
    const value = selectedSize.id
    console.log('push', value)
    props.router.push({
      pathname: '/agendar',
      query: {'servicio': value}
    });
  }

  function onClickType(e){
    setSelectedSize(e);
    const price = e.price;
    setCurrentPrice(price);
  }

  return (
    <Transition.Root show={open} as={Fragment}>
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
                        <img src={product.imageSrc} alt={product.imageAlt} className="object-center object-cover" />
                      </div>
                      <p className="absolute top-4 left-4 text-center sm:static sm:mt-6">
                        <a href={product.href} className="font-medium text-indigo-600 hover:text-indigo-500">
                          ¿Tienes dudas? Contáctanos 🤳
                        </a>
                      </p>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">{product.name}</h2>

                      <section aria-labelledby="information-heading" className="mt-4">
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <div className="flex items-center">
                          <p className="text-lg text-gray-900 sm:text-xl">{currentPrice}</p>

                          <div className="ml-4 pl-4 border-l border-gray-300">
                            <h4 className="sr-only">Reviews</h4>
                            <div className="flex items-center">
                              <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      product.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">{product.rating} out of 5 stars</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 flex items-center">
                          <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                          <p className="ml-2 font-medium text-gray-500">In stock and ready to ship</p>
                        </div>
                      </section>

                      <section aria-labelledby="options-heading" className="mt-6">
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form onSubmit={(e)=> onClickButton(e)}>
                          <div className="sm:flex sm:justify-between">
                            {/* Size selector */}
                            <RadioGroup value={selectedSize} onChange={(e) => onClickType(e)}>
                              <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                Tipo
                              </RadioGroup.Label>
                              <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    as="div"
                                    key={size.name}
                                    value={size}
                                    className={({ active }) =>
                                      classNames(
                                        active ? 'ring-2 ring-indigo-500' : '',
                                        'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                          {size.name}
                                        </RadioGroup.Label>
                                        <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                          {size.description}
                                        </RadioGroup.Description>
                                        <div
                                          className={classNames(
                                            active ? 'border' : 'border-2',
                                            checked ? 'border-indigo-500' : 'border-transparent',
                                            'absolute -inset-px rounded-lg pointer-events-none'
                                          )}
                                          aria-hidden="true"
                                        />
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
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

export default  withRouter(FirstModal);