import Image from "next/image"
import Link from "next/link"

export default function PRSection() {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
            Notas de prensa
          </p>
          <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:mt-8">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Link href="https://www.ing.uc.cl/noticias/dos-ingenieros-uc-crean-plaraforma-tecnologica-para-evitar-que-el-auto-no-sea-un-cacho/">
                <Image
                  src="/ingenieria_uc.png"
                  alt="Ingeniería UC"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Link href="https://ventures.platan.us/startups/carvuk">
                <Image 
                  src="/logotipo2.svg"
                  alt="Platanus Ventures"
                  width={220}
                  height={50}
                />
              </Link>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Link href="https://www.bloomberglinea.com/2022/05/26/platanus-ventures-y-su-apuesta-por-startups-del-metaverso-gamificacion-y-cripto">
                <Image
                  src="/bloomerg.png"
                  alt="Bloomberg Línea"
                  width={250}
                  height={10}
                />
              </Link>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
              <Link href="https://contxto.com/es/venture-capital-es/platanus-ventures-incrementa-a-15-el-numero-de-startups-en-las-que-invertira-este-2022/">
                <Image 
                src="/contxto.png" 
                alt="Contxto" 
                width={150}
                height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }