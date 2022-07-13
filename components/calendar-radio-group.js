/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4 overflow-y-auto h-[50vh] px-10 py-5">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'border-indigo-500 ring-2 ring-indigo-500' : '',
                'relative block bg-white border rounded-lg shadow-sm px-6 py-4 cursor-pointer sm:flex justify-around focus:outline-none'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <span className="flex justify-center">
                  <span className="text-sm flex flex-col justify-center">
                    <RadioGroup.Label as="span" className="font-medium text-gray-900">
                      {plan.name}
                    </RadioGroup.Label>
                  </span>
                </span>
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-500' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}