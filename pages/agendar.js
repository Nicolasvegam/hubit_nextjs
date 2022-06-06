import { InlineWidget } from "react-calendly";
import { useRouter } from 'next/router'
import { useEffect, useState} from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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

const urls = { 'revision-tecnica' : 'https://calendly.com/carvuk/revision-tecnica',
                'lavado-full': 'https://calendly.com/carvuk/lavado-a-domicilio-full',
                'lavado-simple': 'https://calendly.com/carvuk/lavado-a-domicilio-simple',
                'revision-pre-compra': 'https://calendly.com/carvuk/revision-precompra',
                'inspeccion-general': 'https://calendly.com/carvuk/inspeccion-general',
}

export default function BookingPage() {

  const router = useRouter();

  //esperar el router!
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
      }
    }, [router.isReady]);

  const service = router.query.servicio
  const urlCalendly = urls[service];
  

  return !urlCalendly ? null : (
    <>
      
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
              <InlineWidget url={urlCalendly} />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}