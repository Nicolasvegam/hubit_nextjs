import { useState } from 'react'
import FirstModal from '../components/modal-first'
import SecondModal from '../components/modal-second'
import Badge from './badge-refPrice'
  
const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20el%20lavado%20a%20domicilio...',
    imageSrc: './lavado-img.svg',
    imageAlt: 'Lavado a domicilio de tu vehículo',
    price: 'Desde $14.990',
    sizes: [
      { name: 'Simple', description: 'Limpiamos tu auto por fuera.' , price: '$14.990', proBenefit: '$11.990', id: 'lavado-simple'},
      { name: 'Full', description: 'Limpiamos tu auto por dentro y por fuera.', price: '$18.990', proBenefit: '$14.990', id: 'lavado-full'},
    ],
  },
  {
    id: 2,
    name: 'Revisión técnica',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20la%20revisión%20a%20técnica...',
    imageSrc: './revision-img.svg',
    imageAlt: 'Revisión técnica imagen',
    description: 'Uno de nuestros mecánicos inspecciona el vehículo, lo traslada a la planta de revisión técnica y gestiona su certificado. En caso de que la revisión salga rechazada nos pondremos en contacto para ayudarte a solucionar el problema. El servicio incluye el costo de la revisión técnica.',
    price: '$39.990',
    proBenefit: '$0', 
    queryString: 'revision-tecnica',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20la%20revisión%20a%20técnica...',
  },
  {
    id: 3,
    name: 'Mantención por kilometraje',
    href: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20realizar%20la%20mantenci%C3%B3n%20de%20mi%20veh%C3%ADculo...',
    imageSrc: './mantencion-img.svg',
    imageAlt: 'Mantención imagen.',
    price: '$180.000',
    refPrice: true,
    proBenefit: '10% de descuento',
    description: 'Cotizamos el servicio, agendamos y llevamos tu auto al taller sin que tengas que salir de tu casa. Contamos con una red de talleres aliados o si prefieres podemos hacerlo con el taller de tu marca.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20la%20mantenci%C3%B3n%20de%20mi%20veh%C3%ADculo...'
  },
  {
    id: 4,
    name: 'Revisión pre-compra',
    href: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20revisi%C3%B3n%20pre-compra...',
    imageSrc: './precompra-img.svg',
    imageAlt: 'Revisión pre-compra.',
    description: 'El servicio incluye inspección mecánica, estética, scanner, prueba en ruta e informe legal.',
    price: '$34.990',
    proBenefit: '$29.990',
    queryString: 'revision-pre-compra',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20revisi%C3%B3n%20pre-compra...'
  },
  {
    id: 5,
    name: 'Inspección general',
    href: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20inspecci%C3%B3n%20general...',
    imageSrc: './inspeccion-img.svg',
    imageAlt: 'Inspección general imagen.',
    description: 'El servicio incluye inspección mecánica, estética, scanner, prueba en ruta e informe legal.',
    price: '$34.990',
    proBenefit: '$0',
    queryString: 'inspeccion-general',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56931402144?text=Hola!%20Necesito%20una%20inspecci%C3%B3n%20general...',
  },
  {
    id: 6,
    name: 'Desabolladura y pintura',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...',
    imageSrc: './desabolladura-img.svg',
    imageAlt: 'Desabolladura y pintura imagen.',
    description: 'Cotizamos el arreglo según las fotos que nos envíes, agendamos y en tan sólo un día desabollamos y pintamos tu auto en el lugar que más te acomode.',
    price: 'Sujeto al vehículo',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...'
  },
  {
    id: 7,
    name: 'Cambio de aceite',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20aceite...',
    imageSrc: './aceite-img.svg',
    imageAlt: 'Cambio de aceite imagen.',
    price: '$59.990',
    proBenefit: '10% de descuento',
    refPrice: true,
    description: 'Uno de nuestros mecánicos traslada tu auto a uno de nuestros talleres aliados para certificar que se haga el cambio de aceite y filtros.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20aceite...'
  },
  {
    id: 8,
    name: 'Cambio de parabrisas',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20cambio%20de%20parabrisas...',
    imageSrc: './parabrisas-img.svg',
    imageAlt: 'Parabrisas imagen.',
    price: '$125.000',
    proBenefit: '10% de descuento',
    refPrice: true,
    description: 'Cotiza y agenda por Whatsapp con Sergio 👨🏻‍🔧. Una vez agendado, vamos a tu domicilio, y hacemos el  cambio de parabrisas.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20cambio%20de%20parabrisas...'
  },
  {
    id: 9,
    name: 'Frenos',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20revisi%C3%B3n%20de%20frenos...',
    imageSrc: './frenos-img.svg',
    imageAlt: 'Frenos imagen.',
    description: 'Cotiza y agenda por Whatsapp con Sergio 👨🏻‍🔧. Una vez agendado, vamos a tu domicilio, y hacemos la revisión de tus frenos, cambio de pastillas, rectificación de disco y cambio de disco, según corresponda.',
    price: 'Sujeto al vehículo',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20hacer%20revisi%C3%B3n%20de%20frenos...'
  },
  {
    id: 10,
    name: 'Vulcanización',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20una%20vulcanizaci%C3%B3n...',
    imageSrc: './vulca-img.svg',
    imageAlt: 'Vulca imagen.',
    price: '$24.990',
    proBenefit: '10% de descuento',
    refPrice: true,
    description: 'Cotiza y agenda por Whatsapp con Sergio 👨🏻‍🔧. Una vez agendado, vamos al lugar que nos indiques, y hacemos el cambio de neumáticos.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20una%20vulcanizaci%C3%B3n...'
  },
  {
    id: 11,
    name: 'Cambio de batería',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20bater%C3%ADa...',
    imageSrc: './baterias-img.svg',
    imageAlt: 'Cambio de batería imagen.',
    price: '$85.000',
    proBenefit: '10% de descuento',
    refPrice: true,
    description: 'Cotiza y agenda por Whatsapp con Sergio 👨🏻‍🔧. Una vez agendado, vamos al lugar que nos indiques, y hacemos el cambio de batería.',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20realizar%20un%20cambio%20de%20bater%C3%ADa...'
  },
  {
    id: 12,
    name: '¿No está lo que buscas?',
    href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20ayuda%20con%20mi%20veh%C3%ADculo',
    imageSrc: './otros-img.svg',
    imageAlt: 'Otros servicios imagen.',
    description: '¿No encontraste lo que buscabas? Háblanos y Sergio 👨🏻‍🔧 solucionará tu problema.',
    price: 'Sujeto al vehículo',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
    link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20ayuda%20con%20mi%20veh%C3%ADculo'
  },  
]

  
export default function AllServices() {
    
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
    
      return (<div className="bg-white">
      <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">

        <FirstModal open={openFirst} onCloseModal={()=> setOpenFirst(false)} product={activeProduct}/>
        <SecondModal open={openSecond} onCloseModal={()=> setOpenSecond(false)} product={activeProduct}/>

        <div className="py-24 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Servicios</h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                Todos nuestros servicios son a domicilio y tienen garantía.
              </p>
        </div>
        <h2 className="sr-only">Servicios</h2>

        <div className="-mx-px mb-20 border-l border-b border-t border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative p-4 border-r border-b border-gray-200 sm:p-6">
              <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="pt-10 pb-4 text-center">
                <h3 className="text-sm font-medium text-gray-900">
                  <button onClick={()=> {
                            openModal(product);
                          }}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </button>
                </h3>
                <p className="mt-4 text-sm text-gray-500">
                  { product.refPrice? 
                    (<Badge label="Precio referencial"/>) : 
                    (<Badge label="Precio"/>) }
                </p>
                <p className="mt-2 text-base font-medium text-gray-900">{product.price}</p>
                <div className="mt-3 flex flex-col items-center">
                    <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={()=> {
                            openModal(product);
                          }}
                    >
                        Ver más
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)
    }