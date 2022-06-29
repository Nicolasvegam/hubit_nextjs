import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/landing-inversionistas-hero'
import StepbyStep from '../components/landing-inversionistas-stepper'
import CTA from '../components/landing-inversionistas-cta'
import TopAlert from '../components/top-alert-inversionistasOpen'
import TopAlert2 from '../components/top-alert-inversionistasClose'

const IndexPage = () => {
  
  const disabled = true;

  return(
    
    <div>
      {disabled ? (<TopAlert2/>) : (<TopAlert/>) }
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
