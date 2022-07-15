/* This example requires Tailwind CSS v2.0+ */
import { RadioGroup } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({ selected, setSelected, options }) {

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
      <div className="space-y-4 overflow-y-auto h-[50vh] px-10 py-5">
        {options.map((option) => (
          <RadioGroup.Option
            key={option.name}
            value={option}
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
                      {option.name}
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