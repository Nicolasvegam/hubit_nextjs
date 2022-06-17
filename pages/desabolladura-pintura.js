import { useState } from 'react'
import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/landing-desabolladura-hero'
import StepbyStep from '../components/landing-desabolladura-stepper'
import CTA from '../components/landing-revision-tecnica-cta'
import SecondModal from '../components/modal-second'

const product = {
  id: 6,
  name: 'Desabolladura y pintura',
  color: 'White and black',
  href: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...',
  imageSrc: './desabolladura-img.svg',
  imageAlt: 'Desabolladura y pintura imagen.',
  description: 'Cotizamos el arreglo según las fotos que nos envíes, agendamos y en tan solo un día desabollamos y pintamos tu auto en el lugar que mas te acomode.',
  price: 'Desde $11.990',
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
  link: 'https://wa.me/+56983841944?text=Hola!%20Necesito%20cotizar%20una%20desabolladura%2Fpintura...'
}
const DesabolladuraPage = () => {

  const [open, setOpen] = useState(false);

  return(
    <div>
        
        <HeadPage icon='' 
                 href='https://carvuk.com/desabolladura-pintura' 
                 title='Carvuk: Reparamos tu choque a domicilio' 
                 description='Agenda tu reparación a domicilio y complemente online, lo dejamos listo en un sólo día.' 
                 image='https://carvuk.com/image-preview.png'
                 />
        <SecondModal open={open} onCloseModal={()=> setOpen(false)} product={product}/>
        <Navbar ctaBool={false} />
        <HeroSection onClick={()=> setOpen(true)}/>
        <StepbyStep/>
        <CTA onClick={()=> setOpen(true)}/>
    </div>
    )
  }

  export default DesabolladuraPage
