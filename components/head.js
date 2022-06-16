import Head from 'next/head';

const HeadPage = (props) => {
    const {icon, href, title, description, image } = props
    
    return(
        <div>
            <Head>
                <title>Carvuk: Servicio para vehículos a domicilio</title>  

                <link rel="alternate" hrefLang="es-CL" href={href}/>
                <link rel="icon" href={icon}/>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
                
                <link rel="icon" type="icon" sizes="32x32" href={icon}/>
                <meta name="msapplication-TileColor" content={icon} />
                <meta name="theme-color" content="#317EFB" />

                <meta name="robots" content="INDEX,FOLLOW"/>
                <meta name="description" content={description}/>
                <meta name="title" content={title}/>
                <link rel="canonical" href={href} />

                <meta property="og:description" content={description}/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content={href}/>
                <meta property="og:image" content={image}/>
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta property="og:image:alt" content={title} />
                <meta property="og:locale" content="es-cl" />
                <meta property="og:type" content="website" />

                <meta name="twitter:description" content={description}/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:creator" content="@carvuk" />
                <meta name="twitter:site" content="@carvuk" />
                <meta name="twitter:image" itemProp="image" content={image} />

                <link rel="manifest" href='/manifest.json'/>
                <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />

            </Head>
        </div>
    )
  }

  export default HeadPage