import { useState } from 'react'
import FirstModal from './modal-first'
import SecondModal from './modal-second'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'Vamos a tu 🏡 y te lo lavamos',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20el%20lavado%20a%20domicilio...',
    imageSrc: './lavado-img.svg',
    imageAlt: 'Lavado a domicilio de tu vehículo.',
    price: '$11.990',
    sizes: [
      { name: 'Simple', description: 'Limpiamos tu auto por fuera.' , price: '$0', id: 'lavado-simple'},
      { name: 'Full', description: 'Limpiamos tu auto por dentro y por fuera.', price: '$0', id: 'lavado-full'},
    ],
  }
]

export default function Service2Section() {

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  
  function openModal(product){
    setActiveProduct(product);
    if (product.name == 'Lavado a domicilio'){
      setOpenFirst(true);
      setOpenSecond(false);
    }
    else {
      setOpenSecond(true);
      setOpenFirst(false);
    }
  }

  return (
    <div className="bg-white" id="service-section">
      <div className="pb-12 pt-5 sm:py-5 lg:max-w-7xl lg:mx-auto lg:px-8">
        <FirstModal open={openFirst} onCloseModal={()=> setOpenFirst(false)} product={activeProduct}/>
        <SecondModal open={openSecond} onCloseModal={()=> setOpenSecond(false)} product={activeProduct}/>
        <div className="px-4 flex items-center justify-center sm:px-6 lg:px-0">
          <h2 className="text-4xl font-extrabold  tracking-tight text-gray-900">¡Canjea aquí tu lavado!</h2>
        </div>
        <div className="mt-8 relative">
          <div className="relative w-full pb-6 -mb-6 overflow-x-auto">
            <ul
              role="list"
              className="mx-4 flex items-center justify-center space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:gap-x-8"
            >
              {products.map((product) => (
                  <div key={product} className="group relative">
                    <div className="w-full bg-gray-200 rounded-md overflow-hidden aspect-w-1 aspect-h-1">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
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
                      </h3>
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-gray-900"><span className='line-through'>{product.price}</span> $0</p>
                      <div className="mt-3">
                          <button
                          type="button"
                          className="w-full relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                          onClick={()=> {
                            openModal(product);
                          }}
                          >
                          Canjear<span className="sr-only">, {product.name}</span>
                          </button>
                      </div>
                    </div>
                  </div>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex px-4 sm:hidden">
            <Link href="/servicios">
              <a className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              Ver todos los servicios<span aria-hidden="true"> &rarr;</span></a>
            </Link>
        </div>
      </div>
    </div>
  )
}