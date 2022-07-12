import {
    format,
  } from 'date-fns'
  
  export default function Example( { services, selectedDay, monthSpanish }) {
    return (
      <div className="px-8 sm:px-12 lg:px-14 pt-10">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900">Calendario para el{' '} 
            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                {monthSpanish(format(selectedDay, 'MMM dd yyyy'))}
            </time>
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Ojo SIEMPRE confiar Bender 🤖, si hay un dato malo en el pipeline este no se mostrara aquí.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Cliente
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Teléfono
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Dirección
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Servicio
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Modelo
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Patente
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Net amount
                      </th>
                      <th scope="col" className="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {services.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                          {transaction.phone}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {transaction.first_name + ' ' + transaction.last_name}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.share}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.commission}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.price}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.quantity}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.netAmount}</td>
                        <td className="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, {transaction.id}</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }