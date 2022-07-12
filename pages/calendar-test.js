import Calendar from '../components/calendar-admin'
import Selector from '../components/calendar-select-menu'

const CalendarTest = () => {
  
  return(  
    <div>
      <Calendar />
      <div className="px-[20vw] pt-10">
        <Selector />
      </div>
    </div>
    )
}

  export default CalendarTest