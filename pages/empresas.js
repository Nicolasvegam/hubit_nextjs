import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/carvuk-empresas-hero'
import CTA from '../components/index-lead-gen'
import WhatsappLogo from '../components/utils-whatsapp-float'
import FooterSection from '../components/footer'
import Services from '../components/carvuk-empresa-servicios'
import CTAEmpresas from '../components/carvuk-empresas-cta'
import StepbyStep from '../components/index-stepper'

const IndexPage = () => {
  
  return(  
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com/empresas' 
                 title='Carvuk Alianzas: Los mejores beneficios para tus colaboradores' 
                 description='Carvuk Alianzas para que nunca te tengas que preocupar de los cachos de tu vehículo.' 
                 image='https://carvuk.com/image-preview.png' />
      <Navbar ctaBool={false} />
      <HeroSection/>
      <Services/>
      <CTA/>
      <StepbyStep/>
      <CTAEmpresas/>
      <WhatsappLogo/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
