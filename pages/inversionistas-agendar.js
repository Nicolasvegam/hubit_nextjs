import { InlineWidget } from "react-calendly";

export default function BookingPage() {
  
  return (
      <div className="min-h-full">  
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <a href="#">
                      <span className="sr-only">Carvuk</span>
                      <img
                      className="h-8 w-auto sm:h-10"
                      src="./carvuk-logo.svg"
                      alt=""
                      />
            </a>
          </div>
        </header>
        <main>
          <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-2 py-2 sm:px-0">
              <InlineWidget url="https://calendly.com/carvuk-inversionistas/lavado-a-domicilio" />
            </div>
          </div>
        </main>
      </div>
  )
}