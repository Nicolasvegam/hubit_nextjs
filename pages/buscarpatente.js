import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import { useState } from 'react'
import InfoPatente from '../components/buscarpatente-infocard'
import Error from '../components/buscarpatente-error'


const BuscarPatente = () => {

    const [input,setInput] = useState('')
    const [result,  setResult] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(null)
    
    async function getPatenteData(patente){
        const data = await fetch(`https://script.google.com/macros/s/AKfycby1m72T2XbSR6jNcm5YPaLseAgXXL4NxXmo_oqe1VLZSjA1Uvk/exec?plate=${patente}`).then((res)=>res.json())
        //console.log(data)
        return data
    
    }    
    
    const  handleSubmit =  async (e)=>{
        e.preventDefault()
try{

    setLoading(true)
    const result = await getPatenteData(input)
    setResult(result)
    setError(false)
    setLoading(false)
        //console.log(result)

    }catch(error){
        setError(error)
        //alert(error)

    }finally{

        setLoading(false)
    }
        
    }

    const handleInputChange = (e)=>{
        e.preventDefault()
        setInput(prev => e.target.value)
    }


  return (
    <div>
        <Navbar/>
        <div className='flex flex-col items-center justify-center'>


<div className='flex flex-col items-center justify-center mt-12 text-sky-600'>
            <span className='font-mono font-bold text-3xl py-5'>Busca una patente</span>
            <form onSubmit={handleSubmit} className='flex flex-col items-center '>
            <input spellCheck={false} required onChange={handleInputChange} className='rounded-md shadow-lg w-64 h-9 text-center font-mono text-md  text-sky-600 placeholder-sky-600' placeholder='Ingresa Patente'/>
            <button className='bg-sky-500 rounded-md text-white w-20 py-1 mt-4'>Buscar</button>
            </form>
            </div>

            {loading && <h1 className='mt-12 animate-pulse animate-bounce text-xl font-bold text-sky-600'>Cargando...</h1>}

            {result?
                    <InfoPatente 
                    nombre={result?.nombre} 
                    rut={result?.rut}
                    marca = {result?.multas}
                    modelo={result?.modelo}
                    motor={result?.motor}
                    chasis={result?.chasis}
                    multas = {result?.multas}
                    />:null }

            {error && <Error error={"No encontramos la patente :("}/>}
        </div>
    </div>
  )
}



export default BuscarPatente