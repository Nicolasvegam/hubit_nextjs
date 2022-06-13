import HeadPage from '../components/head'
import Navbar from '../components/navbar'
import HeroSection from '../components/hero-suscription'
import CTA from '../components/cta-carvukpro'
import ChatwootWidget from '../components/chatwoot'
import FooterSection from '../components/footer'
import Pricing from '../components/carvuk-pro-pricing'


const IndexPage = () => {
  return(
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com/carvuk-pro' 
                 title='Carvuk: Despreocúpate por completo' 
                 description='Suscríbete a Carvuk Pro para que nunca te tengas que preocupar de los cachos de tu vehículo.' 
                 image='' />
      <Navbar ctaBool={false} />
      <HeroSection/>
      <Pricing/>
      <CTA/>
      <ChatwootWidget/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
