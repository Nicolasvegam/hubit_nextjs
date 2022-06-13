import HeadPage from './../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero-lavado'
import { useState } from 'react'
import FirstModal from './first-modal'
import StepbyStep from '../components/step-by-step-lavado'
import CTALavado from '../components/cta-lavado'

const product = {
    id: 1,
    name: 'Lavado a domicilio',
    color: 'Vamos a tu 🏡 y te lo lavamos',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20el%20lavado%20a%20domicilio...',
    imageSrc: './lavado-img.svg',
    imageAlt: 'Lavado a domicilio de tu vehículo.',
    price: 'Desde $11.990',
    sizes: [
      { name: 'Simple', description: 'Limpiamos tu auto por fuera.' , price: '$11.990', id: 'lavado-simple'},
      { name: 'Full', description: 'Limpiamos tu auto por dentro y por fuera.', price: '$15.990', id: 'lavado-full'},
    ],
  }
const CarwashPage = () => {

  const [open, setOpen] = useState(false);

  return(
    <div>
        
        <HeadPage icon='' 
                 href='https://carvuk.com/lavado-autos' 
                 title='Carvuk: Lavado a domicilio' 
                 description='Agenda tu lavado a domicilio hoy. No hagas más filas.' 
                />
        <FirstModal open={open} onCloseModal={()=> setOpen(false)} product={product}/>
        <Navbar ctaBool={false} />
        <HeroSection onClick={()=> setOpen(true)}/>
        <StepbyStep/>
        <CTALavado onClick={()=> setOpen(true)}/>
    </div>
    )
  }

  export default CarwashPage
