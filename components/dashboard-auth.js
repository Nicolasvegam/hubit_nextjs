import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import Notification from './success-notification.js'
import { useRouter } from 'next/router'
import Loading from '../components/loading'

// TODO:
// reseteo de Contraseña mail
// reseteo de Contraseña link
// dar opcion llenar dato si no tiene km
// linkear cada servicio a un detalle de servicio
// reviews de servicios
// hacer las querys bien

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [plate, setPlate] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [main, setMain] = useState(null)
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(true)
  const [loading, setLoading ] = useState(false)

  const router = useRouter();

  const handleSignUp = async () => {
    try {
      if (plate.length != 6) throw { message: 'Debes rellenar tu patente.'}
      setLoading(true)
      await supabase.auth.signUp({
        email,
        password,
      }).then((data) => {
        if (data.error) throw error
        supabase.from('profiles')
        .upsert({ auth_id: data.user.id, mail: email }, { onConflict: 'mail' }).then( (data) => {
          if (data.error) throw error
          supabase.from('cars')
          .upsert({ profile_id: data.data[0].id, plate: plate }, { onConflict: 'plate' })
        })
        setLoading(false)
        router.replace('/registro-exitoso')
      })
    } catch (error) {
      setLoading(false)
      setSuccess(false)
      setMain(error.message)
      setMessage(error.error_description)
    }
  }

  const handleForgotPass = async () => {
    try {
      const { data, error } = await supabase.auth.api
      .resetPasswordForEmail(email)
      if (error) throw error

      setMain('¡Cuenta recuperada exitosamente!')
      setMessage('Revisa tu correo para cambiar tu contraseña.')
    } catch (error) {
      setSuccess(false)
      setMain(error.message)
      setMessage(error.error_description)
    }
  }

  const handleLogIn = async () => {
    try {
      const { user, session, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      })
      if (error) throw error

      setMain('¡Bienvenido de vuelta!')
      setMessage('')
    } catch (error) {
      setSuccess(false)
      setMain(error.message)
      setMessage(error.error_description)
    }
  }

  const changeForm = async () => {
    setIsSignUp(value => !value)
  }

  const onChangePlate = (e) => {
    if (e.target.value.length <= 6) {
      setPlate(e.target.value.replace(/\s/g, '').toUpperCase())
    }
  }

  if (loading) {
    return (
      <Loading></Loading>
    )
  } else {

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        {main ? <Notification
        main={main}
        message={message}
        success={success}
        ></Notification> : null}
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-12 w-auto"
            src="../icons/logo.png"
            alt="Workflow"
          />
          {isSignUp ? <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Crea tu cuenta</h2> :
           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"> Inicia sesión</h2>}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
              </div>

              { isSignUp ?
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Patente de tu vehículo
                </label>
                <div className="mt-1">
                  <input
                    id="patente"
                    name="patente"
                    type="text"
                    autoComplete="Ej. HPVY21"
                    placeholder="Ej. HPVY21"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={onChangePlate}
                    value={plate}
                  />
                </div>
              </div> :
              null
              }

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">

                <div className="text-sm">
                  <a onClick={handleForgotPass} className="font-medium text-indigo-600 hover:text-indigo-300">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              { isSignUp ? 
              <div>
                <button
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleSignUp}
                >
                  Registrate
                </button>
              </div> : 
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={handleLogIn}
                >
                  Inicia sesión
                </button>
              </div>
            }
            </div>

            <div className="mt-6"> 

              <div>
                  <a
                    className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    onClick={changeForm}
                    href='#'
                  >
                    {isSignUp ? '¿Ya tienes una cuenta? Inicia sesion...' :
                    '¿No tienes una cuenta? Registrate...'}
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
}