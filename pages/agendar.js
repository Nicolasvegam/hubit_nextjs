import Calendar from '../components/calendar-client'
import Form from '../components/calendar-form'
import { useRouter } from 'next/router'
import { useEffect, useState} from 'react'
import { startOfTomorrow, isWeekend, nextMonday} from 'date-fns'

/* Query String
?assigned_to=Carvuk
&event_type_uuid=6e730944-57f1-4808-a67c-450448e74f82
&event_type_name=Revisión%20pre-compra
&event_start_time=2022-06-08T09%3A30%3A00-04%3A00
&event_end_time=2022-06-08T12%3A30%3A00-04%3A00
&invitee_uuid=33efc673-7a44-4c9b-9852-17156af1550f
&invitee_first_name=Nicolás
&invitee_last_name=Vega
&invitee_email=ndvega%40uc.cl
&answer_1=%2B56%209%203735%206356
&answer_2=Test&answer_3=Puente%20alto
&answer_4=2984324
&answer_5=Llamar%20a%20tu%20teléfono
*/

const info = { 'revision-tecnica' : {id: 1, name: 'Revisión técnica', duration: '3 h',
                main: '<div class="flex flex-row flex-wrap">El servicio a domicilio de la <p class="px-1 font-bold">revisión técnica</p> tiene un costo de <p class="px-1 font-bold">$39.990</p> (con el precio de la revisión incluida).</div>',
                description: '<p class="pr-1 pb-2 font-bold">Vamos a buscar el auto donde mejor te acomode.</p> Lo llevamos a la planta de revisión técnica y lo devolvemos a tu domicilio o oficina.',
                blocked_hours: 5, calendar: 'Carvuk' },
                'lavado-full': {id: 3, name: 'Lavado full', duration: '1 h 30 min',
                main: 'Todos nuestros lavados son en seco 💚🌎 y tienen una duración aproximada de 1.5 horas.',
                description: '<div class="flex flex-row flex-wrap">Vamos a limpiar el  <p class="px-1 font-bold">interior y exterior</p> de tu auto donde más te acomode.</div>',
                blocked_hours: 3, calendar: 'Pro Wash' },
                'lavado-simple': {id: 5, name: 'Lavado simple', duration: '1 h 30 min',
                main: 'Todos nuestros lavados son en seco 💚🌎 y tienen una duración aproximada de 1.5 horas.',
                description: '<div class="flex flex-row flex-wrap">Vamos a limpiar el <p class="px-1 font-bold">exterior</p> de tu auto donde más te acomode.</div>',
                blocked_hours: 3, calendar: 'Pro Wash' },
                'revision-pre-compra': {id: 3, name: 'Revisión pre-compra', duration: '1 h 30 min',
                main: '<div class="flex flex-row flex-wrap">El servicio a domicilio de la <p class="px-1 font-bold">revisión pre-compra</p> tiene un costo de <p class="px-1 font-bold">$34.990</p>.</div> <p class="pt-2 font-bold">Vamos a revisar el auto donde más te acomode.</p>',
                description: '<div class="flex">El servicio incluye: inspección mecánica, estética, scanner, prueba en ruta e informe legal.</div>',
                blocked_hours: 5, calendar: 'Carvuk' },
                'inspeccion-general': {id: 2, name: 'Inspección general', duration: '1 h 30 min',
                main: '<div class="flex flex-row flex-wrap">El servicio a domicilio de la <p class="px-1 font-bold">inspección general</p> tiene un costo de <p class="px-1 font-bold">$34.990</p>.</div> <div class="flex pt-2"><p class="font-bold pr-1">Vamos a donde mejor te acomode</p> e inspeccionamos tu vehículo.</p></div>',
                description: '<div class="flex">El servicio incluye: inspección mecánica, estética, scanner, prueba en ruta e informe legal.</div>',
                blocked_hours: 5, calendar: 'Carvuk' }
            }

export default function BookingPage() {

  const router = useRouter();
  const [confirmation, setConfirmation] = useState(false)
  const [selectedHour, setSelectedHour] = useState(false)
  let day = startOfTomorrow()
  if (isWeekend(day)) {
    day = nextMonday(day)
  }
  const [selectedDay, setSelectedDay] = useState(day)

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      }
    }, [router.isReady]);

  const service = router.query.servicio
  

  return(  
    <div className="min-h-full">  
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <a href="#">
              <span className="sr-only">Carvuk</span>
              <img
              className="h-8 w-auto sm:h-10"
              src="./carvuk-logo.svg"
              alt=""
              />
            </a>
          </div>
        </header>
        <main>
          <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-2 py-2 sm:px-0">
              {!confirmation ? 
              <Calendar service={info[service]} 
                setConfirmation={setConfirmation} 
                selected={selectedHour}
                setSelected={setSelectedHour}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
              /> :
              <Form service={info[service]} 
                setBack={setConfirmation} 
                selectedHour={selectedHour} 
                selectedDay={selectedDay}
              />
              }
            </div>
          </div>
        </main>
    </div>
    )
}