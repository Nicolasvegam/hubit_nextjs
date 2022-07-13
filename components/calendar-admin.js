import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns'
import { useState, useEffect } from 'react'
import Selector from '../components/calendar-select-menu'
import CalendarTable from '../components/calendar-table'
import { loadBlockedHours } from '../lib/load-blocked-hours'
import { supabase } from '../utils/supabaseClient'
import Router from 'next/router'


function monthSpanish(date){
    const date_ = date.toString().split(' ')
  
     const months_spanish = {
       'Jan':'Enero',
       'Feb':'Febrero',
       'Mar':'Marzo',
       'Apr':'Abril',
       'May':'Mayo',
       'Jun' : 'Junio',
       'Jul': 'Julio',
       'Aug': 'Agosto',
       'Sep': 'Septiembre',
       'Oct': 'Octubre',
       'Nov':'Noviembre',
       'Dec': 'Diciembre'  
       }
  
  const transformed = date_[1] + " de " + months_spanish[date_[0]] + " " + date_[2]
  
  return transformed
}

async function create_block(start_time, end_time, date, calendar){
  if (start_time.id < end_time.id) {
    let start_date = date.toISOString().split("T")[0] + ' ' + start_time.name + ':00-04'
    let end_date = date.toISOString().split("T")[0] + ' ' + end_time.name + ':00-04'
    await supabase
    .from('blocked_hours')
    .insert([
      { start_time: start_date, end_time: end_date, calendar_type: calendar}
    ]).then(() => {
      alert('Creado exitosamente')
      Router.reload(window.location.pathname)
    })
  } else {
    alert('Tu hora partida tiene que ser mas pequeño que la hora final')
  }
}

async function delete_block(id){
  await supabase
  .from('blocked_hours')
  .delete()
  .match({ id: id }).then(() => {
    alert('Eliminado exitosamente')
    Router.reload(window.location.pathname)
  })
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ meetings, calendars }) {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
  const [calendarSelected, setCalendarSelected] = useState(calendars[0])
  const [startBlockedSelected, setStartBlockedSelected] = useState(hours[0])
  const [endBlockedSelected, setEndBlockedSelected] = useState(hours.filter(hour => hour.id > startBlockedSelected.id)[0])
  const [blockedDates, setblockedDates] = useState([])

  useEffect(() => {
    loadBlockedHours(selectedDay).then((hours) => {
      setblockedDates(hours)
      console.log(hours)
    })
  }, [selectedDay])

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.service_date), selectedDay)
  )

  return (
    <>
    <div className="pt-16">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {monthSpanish(format(selectedDay, 'MMM dd yyyy'))}
              </h2>
              <button
                type="button"
                onClick={previousMonth}
                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                onClick={nextMonth}
                type="button"
                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              <div>DOM</div>
              <div>LUN</div>
              <div>MAR</div>
              <div>MIÉ</div>
              <div>JUE</div>
              <div>VIE</div>
              <div>SÁB</div>
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 && colStartClasses[getDay(day)],
                    'py-1.5'
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || isToday(day)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>

                  <div className="w-1 h-1 mx-auto mt-1">
                    {meetings.some((meeting) =>
                      isSameDay(parseISO(meeting.service_date), day)
                    ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
          <div>
            <h1 className="text-sm font-semibold text-gray-900">Calendario para el{' '} 
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                  {monthSpanish(format(selectedDay, 'MMM dd yyyy'))}
              </time>
            </h1>
            <Selector options={calendars} title={'Selecciona una calendario:'} selected={calendarSelected} setSelected={setCalendarSelected}/>
            <div className="mt-2"></div>
            <Selector options={hours} title={'Incio hora de bloqueo:'} selected={startBlockedSelected} setSelected={setStartBlockedSelected}/>
            <div className="mt-2"></div>
            <Selector options={hours.filter(hour => hour.id > startBlockedSelected.id)} title={'Final hora de bloqueo:'} selected={endBlockedSelected} setSelected={setEndBlockedSelected}/>
            <div className="mt-2"></div>
            <button
              onClick={() => create_block(startBlockedSelected, endBlockedSelected, selectedDay, calendarSelected.name)}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              Bloquear
            </button>
            {blockedDates ? 
            <div>
              <p className="text-sm font-semibold py-2">Bloqueados: </p>
              {blockedDates.map((dates) => (
                <div key={dates.idd} className='flex py-2'>
                  <p className="pr-5">{format(parseISO(dates.start_block), 'h:mm a') + '-' + format(parseISO(dates.end_block), 'h:mm a')}</p>
                  <button
                    onClick={() => delete_block(dates.idd)}
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 px-1 py-1"
                  >
                    Desbloquear
                  </button>
                </div>
              ))}
            </div>
            : <p></p>}   
          </div>
          </section>
        </div>
      </div>
    </div>
    <CalendarTable services={selectedDayMeetings} selectedDay={selectedDay} monthSpanish={monthSpanish}></CalendarTable>
    </>
  )
}

let hours = [
  {name: '09:00', id: 1},
  {name: '09:30', id: 2},
  {name: '10:00', id: 3},
  {name: '10:30', id: 4},
  {name: '11:00', id: 5},
  {name: '11:30', id: 6},
  {name: '12:00', id: 7},
  {name: '12:30', id: 8},
  {name: '13:00', id: 9},
  {name: '13:30', id: 10},
  {name: '14:00', id: 11},
  {name: '14:30', id: 12},
  {name: '15:00', id: 13},
  {name: '15:30', id: 14},
  {name: '16:00', id: 15},
  {name: '16:30', id: 16},
  {name: '17:00', id: 17},
]

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]