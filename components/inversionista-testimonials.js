import Image from 'next/image'

import { Container } from './inversionista-container'


const testimonials = [
  [
    {
      content:
        'Fue excelente la experiencia, organizados, puntuales. Los felicito, ofrecen un muy necesitado y buen servicio, ya los estoy recomendando. Un 5 y no tengo nada que decir sobre mejorar pues tuve una buenísima atención.',
      author: {
        name: 'Loreto Kinast',
        role: 'Clienta de Carvuk',

      },
    },
    {
      content:
        'Muchas gracias ! Excelente experiencia, los felicito ! Le comenté a mi marido de hecho lo bueno.',
      author: {
        name: 'Macarena Errázuriz',
        role: 'Clienta de Carvuk',

      },
    },
  ],
  [
    {
      content:
        'Super, la experiencia fue bastante buena, no me costó agendar y la persona que vino a limpiar el auto llegó super puntual.También el auto quedó impecable',
      author: {
        name: 'Felipe González',
        role: 'Cliente de Carvuk',

      },
    },
  ]
]

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-slate-50 py-10 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="testimonials-title"
            className="font-display text-center mb-12  text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Clientes que han confiado en nosotros
          </h2>
        </div>
        <ul className="mx-16 mt-2 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute top-6 left-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="h-14 w-14 overflow-hidden rounded-full bg-slate-50">
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}


export default Testimonials