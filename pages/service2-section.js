import { useState } from 'react'
import FirstModal from './first-modal'
import SecondModal from './second-modal'

const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'Vamos a tu 🏡 y te lo lavamos',
    href: '#',
    imageSrc: './car-wash.svg',
    imageAlt: 'Lavado a domicilio de tu vehículo.',
    price: 'Desde $11.990',
    sizes: [
      { name: 'Simple', description: 'Limpiamos tu auto por fuera.' , price: '$11.990', id: 'lavado-simple'},
      { name: 'Full', description: 'Limpiamos tu auto por dentro y por fuera.', price: '$15.990', id: 'lavado-full'},
    ],
  },
  {
    id: 2,
    name: 'Revisión técnica',
    color: 'Te lo llevamos a la revisión',
    href: '#',
    imageSrc: './review.svg',
    imageAlt: 'Revisión técnica a domicilio. Lo recogemos, lo llevamos a la revisión y te lo devolvemos',
    price: '$29.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
  },
  {
    id: 3,
    name: 'Mantención por kilometraje',
    color: 'Mantenlo al 💯',
    href: '#',
    imageSrc: './mantain.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20la%20mantenci%C3%B3n%20de%20mi%20veh%C3%ADculo...'
  },
  {
    id: 4,
    name: 'Revisión pre-compra',
    color: 'Dale un doble chequeo',
    href: '#',
    imageSrc: './sale.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
  },
  {
    id: 5,
    name: 'Inspección general',
    color: 'Dale un doble chequeo',
    href: '#',
    imageSrc: './sale.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
  },
  {
    id: 6,
    name: 'Desabolladura y pintura',
    color: 'White and black',
    href: '#',
    imageSrc: './crash.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...'
  },
  {
    id: 7,
    name: 'Cambio de aceite',
    color: 'White and black',
    href: '#',
    imageSrc: './aceite.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20aceite...'
  },
  {
    id: 8,
    name: 'Cambio de parabrisas',
    color: 'White and black',
    href: '#',
    imageSrc: './parabrisas.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20cambio%20de%20parabrisas...'
  },
  {
    id: 9,
    name: 'Frenos',
    color: 'White and black',
    href: '#',
    imageSrc: './brakes.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20revisi%C3%B3n%20de%20frenos...'
  },
  {
    id: 10,
    name: 'Vulcanización',
    color: 'White and black',
    href: '#',
    imageSrc: './vulca.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20una%20vulcanizaci%C3%B3n...'
  },
  {
    id: 11,
    name: 'Cambio de batería',
    color: 'White and black',
    href: '#',
    imageSrc: './car-fix.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20bater%C3%ADa...'
  },
  {
    id: 12,
    name: '¿No está lo que buscas?',
    color: 'White and black',
    href: '#',
    imageSrc: './scanner.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20ayuda%20con%20mi%20veh%C3%ADculo'
  },  
]

export default function Service2Section() {
  
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  
  function openModal(product){
    setActiveProduct(product);
    if (product.name == 'Lavado a domicilio'){
      setOpenFirst(true);
    }
    else {
      setOpenSecond(true);
    }
  }

  return (
    <div className="bg-white" id="service-section">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
        <FirstModal open={openFirst} onCloseModal={()=> setOpenFirst(false)} product={activeProduct}/>
        <SecondModal open={openSecond} onCloseModal={()=> setOpenSecond(false)} product={activeProduct}/>
        <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Los más populares</h2>
          <a href="#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Ver todos los servicios<span aria-hidden="true"> &rarr;</span>
          </a>
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
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="w-full h-full object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="mt-6">
                      <h3 className="mt-1 font-semibold text-gray-900">
                        <a href={product.href}>
                          <span className="absolute inset-0" />
                          {product.name}
                        </a>
                      </h3>
                      <p className="text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-gray-900">{product.price}</p>
                      <div className="mt-3">
                          <a
                          href={product.href}
                          className="relative flex bg-indigo-600 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-white hover:bg-indigo-700"
                          onClick={()=> {
                            openModal(product);
                          }}
                          >
                          Ver más<span className="sr-only">, {product.name}</span>
                          </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex px-4 sm:hidden">
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Ver todos los servicios<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}