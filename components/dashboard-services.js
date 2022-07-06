import { useState } from 'react'
import Badge from './badge-refPrice'
import BadgeGreen from './badge-benefits'

export default function Service2Section( { products, car } ) {

  return (
    <>
    <div className="bg-white" id="service-section">
      <div className="pb-16 sm:pb-36 lg:max-w-7xl lg:mx-auto lg:px-8">
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Productos con descuento por plan:</h2>
        </div>
        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:gap-x-8"
            >
              {products.map((product) => (
                <li key={product.id} className="w-64 inline-flex flex-col text-center">
  
                  <div className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        src={product.imagesrc}
                        alt={product.imagealt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <button 
                          onClick={()=> {
                            openModal(product);
                          }}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </button>
                        <p className="mt-1 text-sm text-gray-500">{ product.refprice ? (<Badge label="Precio referencial"/>) : 
                      (<Badge label={'Precio anterior: $' + product.price.toLocaleString('en-CL').replace(",", ".")}/>) }</p>
                      </h3>
                      { product.probenefit != 0.1 ?
                      <>
                      <div className="mt-1">
                      <BadgeGreen label={ 'Precio descuento: $' +
                        (Math.round(product.price * ( 1 - product.probenefit) / 10) * 10).toLocaleString('en-CL').replace(",", ".")
                        }/>
                      </div>
                      <div className="mt-3">
                        <a href={'https://wa.me/+56931402144?text=¡Hola! Quería pedir mi ' + product.name.toLowerCase() + ' a $' + (Math.round(product.price * ( 1 - product.probenefit) / 10) * 10).toLocaleString('en-CL').replace(",", ".") + ' por la suscripción del auto patente ' + car.plate}>
                        <button
                          type="button"
                          className="w-full relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                          >
                          Agendar<span className="sr-only">, {product.name}</span>
                          </button>
                        </a>
                      </div>
                      </>
                      : 
                      <>
                      <div className="mt-1">
                        <BadgeGreen label={"10% descuento en cotización"}/>
                      </div>
                      <div className="mt-3">
                        <a href={'https://wa.me/+56931402144?text=¡Hola! Quería pedir mi ' + product.name.toLowerCase() + 'con el descuento del 10% por la suscripción del auto patente ' + car.plate}>
                        <button
                          type="button"
                          className="w-full relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                          >
                          Agendar<span className="sr-only">, {product.name}</span>
                          </button>
                        </a>
                      </div>
                    </>
                      }
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}