
const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'White and black',
    href: '#',
    imageSrc: './car-wash.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Revisión técnica',
    color: 'White and lack',
    href: '#',
    imageSrc: './review.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Mantención por kilometraje',
    color: 'White and black',
    href: '#',
    imageSrc: './mantain.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
  {
    id: 1,
    name: 'Revisión pre-compra',
    color: 'White and black',
    href: '#',
    imageSrc: './sale.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
  },
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
  // More products...
]

export default function ServiceSection() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Nuestros Servicios</h2>
              <p className="mt-4 text-xl text-gray-600">
                Nos encargamos de tu auto por una membresía anual.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <div className="relative w-full h-72 rounded-lg overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="relative mt-4">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-80"
                  />
                  <p className="relative text-lg font-semibold text-white">{product.price}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={product.href}
                  className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                >
                  Agendar<span className="sr-only">, {product.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}