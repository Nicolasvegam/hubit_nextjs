import HeadPage from './../components/head'
import TopAlert from '../components/top-alert'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero-banner'
import Service2Section from './service2-section'
import PVSection from '../components/pv-banner'
import StepbyStep from '../components/step-by-step'
import BoxSuscripcion from '../components/suscription-banner'
import NewsSection from '../components/pr-section'
import FooterSection from '../components/footer'


const IndexPage = () => {
  return(
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com' 
                 title='Carvuk: Servicio para vehículos a domicilio' 
                 description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.' 
                 image='' />
      <TopAlert/>
      <Navbar/>
      <HeroSection/>
      <Service2Section/>
      <PVSection/>
      <StepbyStep/>
      <BoxSuscripcion/>
      <NewsSection/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
