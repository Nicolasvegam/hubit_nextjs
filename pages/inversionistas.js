import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/landing-inversionistas-hero'
import StepbyStep from '../components/landing-inversionistas-stepper'
import CTA from '../components/landing-inversionistas-cta'

const IndexPage = () => {
  
  return(
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com/inversionistas' 
                 title='Carvuk: Lavado a domicilio para inversionistas' 
                 description='Agenda tu lavado domicilio sólo por hoy.' 
                 image='https://carvuk.com/image-preview.png' /> 
      <Navbar ctaBool={false} />
      <HeroSection/>
      <StepbyStep/>
      <CTA/>
    </div>
    )
  }

  export default IndexPage
