import Calendar from '../components/calendar-admin'
import { loadCalendarAdmin } from '../lib/load-calendar-admin'

const CalendarTest = (services) => {
  
  return(  
    <div>
      { services ? <Calendar meetings={services.services}/> : null}
    </div>
    )
}

export async function getServerSideProps() {
  const services = await loadCalendarAdmin()
  return { props: { services } }
}

export default CalendarTest