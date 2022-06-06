import { useState } from 'react'
import Example from './first-modal'
import Modal2 from './second-modal'
import { withRouter } from 'next/router'

import HeadPage from './../components/head'
import Navbar from '../components/navbar'
import FooterSection from '../components/footer'

const products = [
  {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'Dale lo que se merece',
    href: '#',
    imageSrc: './car-wash.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: 'Simple - $11.990', description: 'Exterior.' },
      { name: 'Full - $15.990', description: 'Exterior e Interior.' },
    ]
  },
  {
    id: 1,
    name: 'Revisión técnica',
    color: 'Ahórrate la espera',
    href: '#',
    imageSrc: './review.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
  },
  {
    id: 1,
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
  },
  {
    id: 1,
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
    id: 1,
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
  },
  {
    id: 1,
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
  },
  {
    id: 1,
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
  },
  {
    id: 1,
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
  },
  {
    id: 1,
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
  },
  {
    id: 1,
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
  },
  {
    id: 1,
    name: 'Mecánica general y otros',
    color: 'White and black',
    href: '#',
    imageSrc: './scanner.svg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: 'Desde $11.990',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
  },  
]

function AllServices(props) {
  
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);

  function onClickAny(){
    props.router.push({
      pathname: 'agendar',
      query: {'servicio': 'valor'}
    });
  }

  function openModal(product){
    if (product.name == 'Lavado a domicilio'){
        setOpenFirst(true);
        setActiveProduct(product);
    }
    else {
        setOpenSecond(true);
        setActiveProduct(product);
    }
  }
  
  return (
    
    <div className="bg-white">
      
      <HeadPage icon='' 
                 href='https://carvuk.com/servicios' 
                 title='Carvuk: Selecciona el servicio que necesitas' 
                 description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.' 
                 image='' />
      <Navbar/>

      <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:px-8">

        <Example open={openFirst} onCloseModal={()=> setOpenFirst(false)} product={activeProduct}/>
        <Modal2 open={openSecond} onCloseModal={()=> setOpenSecond(false)} product={activeProduct}/>

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
                          onClick={()=> {
                            openModal(product);
                           // onClickAny();
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
      </div>

      <FooterSection/>
    </div>
  )
}

export default withRouter(AllServices);