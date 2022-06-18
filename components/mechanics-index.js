import Link from "next/link"
const mecanicos = {
    '':
    {
    id: 0,
    name: '',
    lastName: '',
    profession: '',
    imageSrc: './desabolladura-img.svg',
    imageAlt: '',
    description: '¡Hola, soy Nacho! Tu mecánico Carvuk. Estoy acá para ayudarte en lo que necesites. En Carvuk, tu auto es nuestro problema y nuestra prioridad. No dudes en preguntarme lo que necesites, estoy aquí para ayudarte.',
    rating: 5
    },
  }

/* This example requires Tailwind CSS v2.0+ */
const people = [
    {
      id:0,  
      name: 'Steve',
      lastName:"Jobs",
      profession: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    imageAlt: '',
    description: '¡Hola, soy Nacho! Tu mecánico Carvuk. Estoy acá para ayudarte en lo que necesites. En Carvuk, tu auto es nuestro problema y nuestra prioridad. No dudes en preguntarme lo que necesites, estoy aquí para ayudarte.',
    rating: 5
    },
    {
        id:0,  
        name: 'Steve',
        lastName:"Jobs",
        profession: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      imageAlt: '',
      description: '¡Hola, soy Nacho! Tu mecánico Carvuk. Estoy acá para ayudarte en lo que necesites. En Carvuk, tu auto es nuestro problema y nuestra prioridad. No dudes en preguntarme lo que necesites, estoy aquí para ayudarte.',
      rating: 5
      },
      {
        id:0,  
        name: 'Steve',
        lastName:"Jobs",
        profession: 'Co-Founder / CTO',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
      imageAlt: '',
      description: '¡Hola, soy Nacho! Tu mecánico Carvuk. Estoy acá para ayudarte en lo que necesites. En Carvuk, tu auto es nuestro problema y nuestra prioridad. No dudes en preguntarme lo que necesites, estoy aquí para ayudarte.',
      rating: 5
      },
       
    

  ]
  
  export default function MechanicDisplay() {
    return (
      <div className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Nuestros Mecánicos</h2>
              <p className="text-xl text-gray-500">
                El equipo de Carvuk tiene un excelente equipo de mecánicos de primer nivel, 100% dispuestos y muy buena onda.
              </p>
            </div>
            <ul
              role="list"
              className="flex flex-wrap items-center justify-center gap-24"
            >
              {people.map((person) => (
                
               <Link href={"/mecanicos/" + person.name}><a><li key={person.name}>
               
                  <div className="space-y-4">
                    <img className="mx-auto h-20 w-20 rounded-full lg:w-24 lg:h-24" src={person.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
                </a></Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }