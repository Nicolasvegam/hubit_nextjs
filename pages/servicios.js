import HeadPage from './../components/head'
import Navbar from '../components/navbar'
import FooterSection from '../components/footer'
import AllServices from '../components/service-catalog'

const IndexPage = () => {
  return(
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com/servicios' 
                 title='Carvuk: Selecciona el servicio que necesitas' 
                 description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.' 
                 image='' />
      <Navbar ctaBool={false} />
      <AllServices/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
