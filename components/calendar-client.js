import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from '@heroicons/react/solid'
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
  isBefore,
  getTime,
  isWeekend
} from 'date-fns'
import { useState } from 'react'
import RadioGroup from './calendar-radio-group'

const options = [
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

function getOptions( selected_day, blocked_hours, amount_blocked_today ) {
  let today = startOfToday()
  let now = new Date()
  if ( isEqual(selected_day, today) ) {
    let minimo = now.getHours() + amount_blocked_today
    return options.filter((date) => parseInt(date.name.slice(0,2)) >= minimo)
  } else {
    return options;
  }
}

function createMarkup( s ) {
  return {__html: s};
}

function dateSpanish(date){
  const date_ = date.toString().split(' ')

  const transformed = date_[1] + " de " + months_spanish[date_[0]] + " " + date_[2]

  return transformed
}

function monthSpanish(date){
  const date_ = date.toString().split(' ')

  const transformed = months_spanish[date_[0]] + ' ' + date_[1]

  return transformed
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ service, setConfirmation, selected, setSelected, selectedDay, setSelectedDay}) {
  let today = startOfToday()
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  function selectDay(day, options_lenght){
    if (day >= today && options_lenght && !isWeekend(day)){
      setSelectedDay(day)
    }
  }

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

  return (
    <>
    <div className="pt-5">
      <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
        <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
          <div className="md:pr-14">
            <div className="flex items-center">
              <h2 className="flex-auto font-semibold text-gray-900">
                {monthSpanish(format(firstDayCurrentMonth, 'MMM yyyy'))}
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
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
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
                    onClick={() => selectDay(day, getOptions(day, null, service.blocked_hours).length)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) &&
                        isToday(day) &&
                        getOptions(day, null, service.blocked_hours).length > 0 &&
                        'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-900',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && getOptions(day, null, service.blocked_hours).length > 0 && 'bg-red-500',
                      isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        'bg-gray-900',
                      isBefore(day, today) && 'text-gray-300',
                      isWeekend(day) && 'text-gray-300',
                      getOptions(day, null, service.blocked_hours).length === 0 && 'text-gray-300',
                      isBefore(today, day) && !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                      (isEqual(day, selectedDay) || (isToday(day) && getOptions(day, null, service.blocked_hours).length > 0)) &&
                        'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}
                  >
                    <time dateTime={format(day, 'yyyy-MM-dd')}>
                      {format(day, 'd')}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <section className="mt-12 md:mt-0 md:pl-14">
            <h2 className="font-semibold text-gray-900 pb-4 pl-14">
              Agenda para {' el '}
              <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {dateSpanish(format(selectedDay, 'MMM dd yyy'))}
              </time>
            </h2>
            {service ?  <RadioGroup selected={selected} setSelected={setSelected} options={getOptions(selectedDay, null, service.blocked_hours)}></RadioGroup>
            : null}
          </section>
        </div>
      </div>
    </div>
    { service ? 
      <>
    <div className="border-b border-gray-200 pt-6 lg:px-24 px-6">
    <div className="sm:flex sm:flex-row sm:justify-between flex flex-col items-center">
    <img
    className="w-auto h-[55px] pb-2"
    src="./carvuk-logo.svg"
    alt=""
    />
    <div className="mt-3 sm:mt-0 sm:mr-12 sm:order-last order-first items-center pb-2">
      <button
        disabled={!selected}
        onClick={() => setConfirmation(true)}
        type="button"
        className="inline-flex items-center px-6 py-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        Confirmar
      </button>
    </div>
    </div>
    <div className="pb-5 sm:flex sm:items-center sm:justify-between items-center">
      <h3 className="text-lg leading-6 font-bold text-gray-900">{service.name}</h3>
    </div>
    <div className="flex">
      <ClockIcon className="h-6 text-gray-500 pr-2"></ClockIcon>
      <p className="text-lg leading-6 font-bold text-gray-500" dangerouslySetInnerHTML={createMarkup(service.duration)}></p>
    </div>
    <p className="pt-2 text-base leading-6 font-light text-gray-900" dangerouslySetInnerHTML={createMarkup(service.main)}></p>
    <p className="pt-2 text-base leading-6 font-light text-gray-900" dangerouslySetInnerHTML={createMarkup(service.description)}></p>
    <p className="pt-2 text-base leading-6 font-medium text-gray-900">¿Tienes dudas?</p>
    <p className="pt-2 text-base leading-6 font-light text-gray-900">Puedes contactarnos por WhatsApp al </p>
    <a className="pt-2" href="https://api.whatsapp.com/send/?phone=%2B56983841944&text=Hola%21+Tengo+dudas+con+la+revisi%C3%B3n+t%C3%A9cnica...&app_absent=0"><p className="pb-4 text-base font-medium">+56 9 8384 1944</p></a>
    </div>
    </> : null}
    </>
  )
}

let colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
]
