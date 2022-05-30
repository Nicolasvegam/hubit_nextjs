import { StarIcon } from '@heroicons/react/solid'

const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'Dale lo que se merece',
    href: '#',
    imageSrc: './car-wash.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Revisión técnica',
    color: 'Ahórrate la espera',
    href: '#',
    imageSrc: './review.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Mantención por kilometraje',
    color: 'Mantenlo al 💯',
    href: '#',
    imageSrc: './mantain.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Revisión pre-compra',
    color: 'Dale un doble chequeo',
    href: '#',
    imageSrc: './sale.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  /*
  {
    id: 1,
    name: 'Desabolladura y pintura',
    color: 'White and black',
    href: '#',
    imageSrc: './crash.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Cambio de aceite',
    color: 'White and black',
    href: '#',
    imageSrc: './aceite.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Cambio de parabrisas',
    color: 'White and black',
    href: '#',
    imageSrc: './parabrisas.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Frenos',
    color: 'White and black',
    href: '#',
    imageSrc: './brakes.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Vulcanización',
    color: 'White and black',
    href: '#',
    imageSrc: './vulca.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Cambio de batería',
    color: 'White and black',
    href: '#',
    imageSrc: './car-fix.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Mecánica general y otros',
    color: 'White and black',
    href: '#',
    imageSrc: './scanner.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  */
  
]

export default function Service2Section() {
  return (
    <div className="bg-white">
      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">
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
              className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
            >
              {products.map((product) => (
                <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
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
                          className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                        >
                          Agendar<span className="sr-only">, {product.name}</span>
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