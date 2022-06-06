import HeadPage from './../components/head'
import Navbar from '../components/navbar'
import FooterSection from '../components/footer'


const IndexPage = () => {
  return(
    <div>
      <HeadPage icon='' 
                 href='https://carvuk.com/servicios' 
                 title='Carvuk: Selecciona el servicio que necesitas' 
                 description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.' 
                 image='' />
      <Navbar/>
      <allServices firstModalState={false} secondModalState={false}/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
