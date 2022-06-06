import Head from 'next/head';

const HeadPage = (props) => {
    const {icon, href, title, description, image } = props
    //"icon-carvuk.svg", "https://carvuk.com", Carvuk: Servicio para vehículos a domicilio, 
    //Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode.
    //https://www.carvuk.com/heroimage.svg
    return(
        <div>
            <Head>
                <title>Carvuk: Servicio para vehículos a domicilio</title>  

                <link rel="alternate" hreflang="es-CL" href={href}/>
                <link rel="icon" href={icon}/>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
                
                <link rel="icon" type="icon" sizes="32x32" href={icon}/>
                <meta name="msapplication-TileColor" content={icon} />
                <meta name="theme-color" content={icon} />

                <meta name="robots" content="INDEX,FOLLOW"/>
                <meta name="description" content={description}/>
                <meta name="title" content={title}/>
                <link rel="canonical" href={href} />

                <meta property="og:description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content={href}/>
                <meta property="og:image" content={image}/>
                <meta property="og:image:type" content="image/svg" />
                <meta property="og:image:width" content="618" />
                <meta property="og:image:height" content="487" />
                <meta property="og:image:alt" content={title} />
                <meta property="og:locale" content="es-cl" />
                <meta property="og:type" content="website" />

                <meta name="twitter:description" content={description}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content="@carvuk" />
                <meta name="twitter:site" content="@carvuk" />
                <meta name="twitter:image" itemprop="image" content={image} />
            </Head>
        </div>
    )
  }

  export default HeadPage