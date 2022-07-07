  export default function CarCard({ car }) {
    return (
      <div className="bg-white">
        <section aria-labelledby="features-heading" className="relative">
  
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:gap-x-8">
            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-gray-500">
                {car.brand}
              </h2>
              <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">{car.model}</p>
              <p className="mt-4 text-gray-500">
                En Carvuk gestionamos todos los datos de tu auto, para que no te tengas que preocupar de nada.
              </p>
  
              <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-medium text-gray-900">Patente</dt>
                    <dd className="mt-2 text-gray-500">{car.plate}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Año</dt>
                    <dd className="mt-2 text-gray-500">{car.year}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Número de chasis</dt>
                    <dd className="mt-2 text-gray-500">{car.vim}</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Kilometraje aprox</dt>
                    <dd className="mt-2 text-gray-500">{car.km ? car.km : 'No manejamos este dato.'}</dd>
                  </div>
              </dl>
              <img src={car.image_url}></img>
            </div>
          </div>
        </section>
      </div>
    )
  }