export default function PVSection() {
    return (
      <div className="bg-indigo-200 bg-opacity-25">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 className="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">
              Somos parte de la aceleradora más importante de Latinoamérica
            </h2>
            <div className="flow-root self-center mt-8 lg:mt-0">
              <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-10"
                    src="./logotipo2.png"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }