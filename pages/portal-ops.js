import Calendar from '../components/calendar-admin'
import { loadCalendarAdmin } from '../lib/load-calendar-admin'
import { loadCalendarTypes } from '../lib/load-calendar-types'
import { loadDrivers } from '../lib/load-drivers'
import { loadSuppliers } from '../lib/load-suppliers'

const PortalOps = ({services, calendars, drivers, suppliers}) => {

  return(
    <div>
      { services ? <Calendar meetings={services} calendars={calendars} drivers={drivers} suppliers={suppliers}/> : null}
    </div>
    )
}

export async function getServerSideProps() {
  const services = await loadCalendarAdmin()
  const calendars = await loadCalendarTypes()
  const drivers = await loadDrivers()
  const suppliers = await loadSuppliers()
  return { props: { services, calendars, drivers, suppliers } }
}

export default PortalOps
