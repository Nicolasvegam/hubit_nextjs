import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/landing-inversionistas-hero'
import StepbyStep from '../components/landing-inversionistas-stepper'
import CTA from '../components/landing-inversionistas-cta'
import TopAlert from '../components/top-alert-inversionistas'
const IndexPage = () => {
  
  const disabled = false;

  return(
    
    <div>
      {disabled ? (<TopAlert/>) : null }
      <HeadPage icon='' 
                 href='https://carvuk.com/inversionistas' 
                 title='Carvuk: Lavado a domicilio para inversionistas' 
                 description='Agenda tu lavado domicilio sólo por hoy.' 
                 image='https://carvuk.com/image-preview.png' /> 
      <Navbar ctaBool={false} />
      <HeroSection disabled={disabled}/>
      <StepbyStep/>
      <CTA disabled={disabled}/>
    </div>
    )
  }

  export default IndexPage
