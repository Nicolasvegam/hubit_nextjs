import { useState } from 'react'
import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/landing-revision-tecnica-hero'
import StepbyStep from '../components/landing-revision-tecnica-stepper'
import CTA from '../components/landing-revision-tecnica-cta'
import SecondModal from '../components/modal-second'

const product = {
    id: 2,
    name: 'Revisión técnica',
    color: 'No hagas más filas, vamos por tí',
    href: 'https://wa.me/+56931402144?text=Hola!%20Tengo%20dudas%20con%20la%20revisión%20a%20técnica...',
    imageSrc: './revision-img.svg',
    imageAlt: 'Revisión técnica imagen',
    description: 'Uno nuestros mecánicos inspecciona el vehículo, lo traslada a la plante de revisión técnica y gestiona su certificado. En caso de de que la revisión salga rechaza nos pondremos en contacto para ayudarte a solucionar el problema.',
    price: '$29.990',
    queryString: 'revision-tecnica',
    sizes: [
      { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
      { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    ],
}
const RevisionTecnicaPage = () => {

  const [open, setOpen] = useState(false);

  return(
    <div>
        
        <HeadPage icon='' 
                 href='https://carvuk.com/revision-tecnica' 
                 title='Carvuk: Revisión técnica a domicilio' 
                 description='Agenda tu revisión técnica hoy. No hagas más filas, hacemos todo por tí.' 
                />
        <SecondModal open={open} onCloseModal={()=> setOpen(false)} product={product}/>
        <Navbar ctaBool={false} />
        <HeroSection onClick={()=> setOpen(true)}/>
        <StepbyStep/>
        <CTA onClick={()=> setOpen(true)}/>
    </div>
    )
  }

  export default RevisionTecnicaPage
