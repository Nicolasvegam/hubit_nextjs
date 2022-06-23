import React from 'react'
import FooterSection from '../../components/footer'
import { useState } from 'react'
import Service2Section from '../../components/inversionista-service'
import Link from 'next/link'
import Divider from '../../components/inversionista-divider'
import PRSection from '../../components/index-pr-banner'

const Inversionistas = () => {

  return (
    <div className='bg-white'>

<div className='text-center pt-16'>
        <h1 className='text-4xl font-bold  text-indigo-500'>¡Hola Inversionista!</h1>
        <p className='mt-2 font-medium text-xl'>Te damos la bienvenida a Carvuk</p>
    </div>

    <div className='my-12 space-y-6 flex flex-col items-center justify-center'>
        <button className='w-64 bg-indigo-500 text-white rounded-md py-2 px-3 hover:bg-indigo-600'>Sobre Nosotros</button>
      <Link href={'/servicios'}><button className='w-64 bg-indigo-500 text-white rounded-md py-2 px-3 hover:bg-indigo-600'>Revisa todos los servicios </button></Link> 

    </div>

    <Divider/>
    
    {/* car wash component */}
    <Service2Section/>
    
    <PRSection/>
    {/* Footer */}
    <FooterSection/>
    </div>
  )
}

export default Inversionistas