import Calendar from '../components/calendar-admin'
import { loadCalendarAdmin } from '../lib/load-calendar-admin'
import { loadCalendarTypes } from '../lib/load-calendar-types'

const PortalOps = ({services, calendars}) => {
  
  return(  
    <div>
      { services ? <Calendar meetings={services} calendars={calendars}/> : null}
    </div>
    )
}

export async function getServerSideProps() {
  const services = await loadCalendarAdmin()
  const calendars = await loadCalendarTypes()
  return { props: { services, calendars } }
}

export default PortalOps