import HeadPage from '../components/head'
import TopAlert from '../components/top-alert'
import Navbar from '../components/navbar'
import HeroSection from '../components/index-hero'
import Service2Section from '../components/index-service'
import PVSection from '../components/index-pv-banner'
import StepbyStep from '../components/index-stepper'
import Revision from '../components/index-lead-gen.js'
import BoxSuscripcion from '../components/index-carvuk-pro'
import NewsSection from '../components/index-pr-banner'
import DownloadSection from '../components/index-download-banner'
import FooterSection from '../components/footer'
import WhatsappLogo from '../components/utils-whatsapp-float'


const IndexPage = () => {
  
  return(
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com' 
                 title='Carvuk: Servicio para vehículos a domicilio' 
                 description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.' 
                 image='https://carvuk.com/image-preview.png' />

      <TopAlert/>
      <Navbar ctaBool={true} />
      <HeroSection/>
      <Service2Section/>      
      <Revision/>
      <StepbyStep/>
      <PVSection/>
      <BoxSuscripcion/>
      <NewsSection/>
      <DownloadSection />
      <WhatsappLogo/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
