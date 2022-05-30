/* This example requires Tailwind CSS v2.0+ */
export default function NewsSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Notas de prensa
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img 
             className="max-h-12"
             src="./contxto.png" 
             alt="Contxto" 
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="./logotipo2.svg"
              alt="Platanus Ventures"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12"
              src="./bloomerg.png"
              alt="Bloomberg Línea"
            />
          </div>
        </div>
      </div>
    </div>
  )
}