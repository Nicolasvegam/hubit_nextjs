import { useRouter } from 'next/router'
import HeadPage from './../components/head'

export default function SuccessfulSignUp() {


  const router = useRouter();
    
    function redirectHome() {
        router.replace('/')
    }
    return (
    <>
      <HeadPage icon='' 
            href='https://carvuk.com/login' 
            title='Portal Carvuk Pro'
            description='Agenda tu servicio automotriz a domicilio hoy. Llevamos el taller mecánico a tu casa, oficina o el lugar que mejor te acomode. Servicio exclusivo para nuestros clientes Carvuk Pro' 
            image='https://carvuk.com/image-preview.png' />
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">¡Cuenta creada exitosamente!</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 text-center">
          <span className="px-2 bg-white text-gray-500 justify-center">Tu cuenta ha sido creada exitosamente.<br></br> <span className="px-2 bg-white text-black font-extrabold justify-center">Revisa tu correo para confirmar tu cuentar.</span></span>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">¡Gracias por preferirnos!</span>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-1">
                <button
                type="submit"
                onClick={() => redirectHome()}
                className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Volver a página principal
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}