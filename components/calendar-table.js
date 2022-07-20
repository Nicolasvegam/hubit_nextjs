import {
    format,
    parseISO
  } from 'date-fns'
import { useRouter } from 'next/router'
import { supabase } from '../utils/supabaseClient'

  function copiar( e ) {
    var copyText = document.getElementById(e.target.value);

    copyText.select();

    navigator.clipboard.writeText(copyText.value);
  }

  export default function Example( { services, selectedDay, monthSpanish, drivers, suppliers }) {
    const router = useRouter()

    function generate_text( service ) {
      let text = 'Hora: ' + format(parseISO(service.service_date), 'h:mm a') + '\n'
      text += 'Telefono Contacto: ' + service.phone + '\n'
      text += 'Nombre cliente: ' + service.first_name + ' ' + service.last_name + '\n'
      text += 'Dirección: ' + service.address + ', ' + service.comuna + '\n'
      text += 'Servicio: ' + service.name + '\n'
      text += 'Modelo: ' + service.brand + ' ' + service.model + '\n'
      text += 'Patente: ' + service.plate + '\n'
      if (typeof window !== "undefined") {
        let supplier = document.getElementById('supplier' + service.id);
        supplier = suppliers.find(x => x.id === parseInt(supplier.value))
        text += supplier.name + ': ' + supplier.address
      }
      return text
    }

    const onChangeDriver = (e) => {
      supabase.from('services_requested').update({ did: e.target.value }).match({ id: e.target.id }).then((data) => {
        router.push({
          pathname: '/portal-ops'
        });
      })
    }

    const onChangeSupplier = (e) => {
      supabase.from('services_requested').update({ supid: e.target.value }).match({ id: e.target.id }).then((data) => {
        router.push({
          pathname: '/portal-ops'
        });
      })
    }

    return (
      <div className="px-8 sm:px-12 lg:px-14 py-10">
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
        {services.length > 0 ?
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-x-auto">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg w-[150vw]">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Hora
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                      >
                        Teléfono
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Cliente
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
                        Driver
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Proveedor
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Copiar
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {services.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          <time dateTime={transaction.service_date}>
                            {format(parseISO(transaction.service_date), 'h:mm a')}
                          </time>{' '}
                        </td>
                        <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                          {transaction.phone}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-900">
                          {transaction.first_name + ' ' + transaction.last_name}
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-900">{transaction.address + ', ' + transaction.comuna}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.name}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.model}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">{transaction.plate}</td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          <div>
                            <select
                              id={'driver' + transaction.id}
                              name="driver"
                              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                              onChange={e => onChangeDriver(e)}
                              defaultValue={transaction.driver}
                            >
                              {drivers.map((driver) => (
                                <option key={driver.id} value={driver.id}>{driver.name}</option>
                              ))}
                            </select>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          <div>
                            <select
                              id={'supplier' + transaction.id}
                              name="supplier"
                              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                              onChange={e => onChangeSupplier(e)}
                              defaultValue={transaction.supplier}
                            >
                              {suppliers.map((supplier) => (
                                <option key={supplier.id} value={supplier.id} address={supplier.address}>{supplier.name}</option>
                              ))}
                            </select>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-2 py-2 text-sm text-gray-500">
                          <button
                            onClick={copiar}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            value={transaction.id}
                          >
                            <input type="hidden" name="custId" value={generate_text(transaction)} id={transaction.id}></input>
                            Copiar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        :
        <p>No servicios hoy día.</p> }
      </div>
    )
  }
