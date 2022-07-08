---
title: 'Cómo creamos Carvuk App en menos de 6 horas'
subtitle: 'En mi primer día de pega, saqué a producción Carvuk App. Si necesitas una aplicación confiable, instalable y con altas capacidades, pero además lo necesitas para esta semana esto es lo que podrías hacer.'
metaTitle: 'Next.js page options and how they work'
description: 'En mi primer día de trabajo logré hacer la aplicación de Carvuk ¿Cómo lo logré? Te invito a leer mi artículo'
metaDesc: 'How to use pages in Next.js exploring the options'
authorImage: ./matias-perez.jpeg
authorName: 'Matías Perez'
socialImage: ./blogImg1.jpg
readingTime: '5 min'
categoryName: 'Tecnología'
date: '2021-09-22'
tags:
  - nextjs
---

Me contrataron en Carvuk la semana pasada y me transmitieron desde un inicio, el  enfoque que tenía la empresa en mejorar su producto, mediante el feedback constante de sus clientes. Los desarrollos se dan en horas, no en días, semanas ni meses.

Ese es el mismo espíritu que está detrás de Carvuk App, y fue lo que me motivó a proponer esta idea. Era recién mi primer día de trabajo y sentía que ya estaba generando valor a la empresa. Desde que lo pensé, hasta dejarlo en producción, no pasaron más de 6 horas.

Para lograrlo usé una PWA (Progressive Web Application). Las PWA han solucionado silenciosamente los problemas que han presentado las apps móviles durante algunos años. Pero más recientemente, ha habido una gran cantidad de actualizaciones que indican que este año puede ser el momento en que las PWA pasen a ser el centro de atención.


![meme-pwa](https://www.binaryfolks.com/media/blog/3cwcox.jpg#single)
### ¿Que ¢&@$#/ es una PWA?

#
Conocí las PWA´s, a través de un ramo que hice en la universidad este semestre y desde el primer minuto me hizo sentido. Digamos que no existe una definición precisa para una PWA, ya que es más un concepto que una "tecnología" real. 

Dicho esto, el concepto en palabras simples: es una aplicación web que simula ser una aplicación nativa en cualquier dispositivo: móvil, escritorio y web. Utiliza las últimas tecnologías web para ofrecer una experiencia casi igual a la de una aplicación. Este concepto no es nuevo, sino algo que se ha estado trabajando durante años, mejorando año tras año, a medida que la web evoluciona hacia una plataforma aún más poderosa.

¿Por qué? Debido a que la tecnología web se ha vuelto más capaz, ahora es posible crear una vez, ejecutar en todas partes y obtener el mismo nivel de rendimiento en todos los dispositivos sin tener que crear aplicaciones de forma nativa para cada dispositivo. 

Por ejemplo, las PWA pueden admitir operaciones sin conexión o con poco ancho de banda mediante service workers. Pueden integrarse fácilmente con funciones del dispositivo, como notificaciones, y también pueden anclarse a la pantalla de inicio de un usuario para funcionar como una aplicación real. 

En Carvuk, aprovechamos esta oportunidad y en una tarde teníamos la aplicación en producción, para iPhone y Android:  

![Screenshot-pwa-1](./pwa-1.png#left)
![Screenshot-pwa-2](./pwa-2.png#right)
![Screenshot-pwa-3](./pwa-3.png#center)

### Ok, pero ¿Cuál es el problema que soluciona las PWA´s?

En resumen, es la herramienta to-go, para tener estar en contacto directo con el cliente desde el primer minuto. Es impresionante la cantidad de startups, que creen que tienen la mejor idea y desarrollan el “mejor producto”, pasan meses sin estar en contacto real con sus clientes, lanzan su producto y sus usuarios simplemente no lo utilizan. 

No por nada se habla del product market fit. Necesitas un producto que solucione un problema, un cliente que necesite solucionar ese problema y un mercado lo suficientemente abierto que permita que tu producto crezca. 

Mientras menos demores en probar tu producto en el mercado, menos tiempo y recursos vas a gastar. Por lo tanto, en Carvuk apuntamos a hacer más con menos y una PWA era la solución a este problema tan común. Te dejo de quitar tiempo, aquí un punteo de lo más importante:

1. **Las PWA´s son rápidas**: Según una presentación reciente de Google, las PWA tienen un tiempo medio de carga menor a un segundo, lo que las hace 4 veces más rápidas con 10 veces menos datos. Según Kissmetrics, casi la mitad (47 por ciento) de los consumidores esperan que una página se cargue en dos segundos o menos, y el 40 por ciento de los consumidores abandonan un sitio web que tarda más de tres segundos en cargarse.

2. **Son costo efectivas**: Las PWA´s son altamente flexibles, tu empresa probablemente ya tenga una página web, ahora solo agrega un par de archivos, hazlo responsive y disfruta. Esto te ahorra tiempo y dinero que, anteriormente, podría haberse utilizado para crear experiencias digitales nativas por separado para cada dispositivo.

3. **Apple/Google cut**: Ahórrate la absurda comisión del 30% de tus ventas en IOS o el 15% en Android. Es tu trabajo, la de tu empresa y hay que valorarlo. Por esta razón, nació la famosa problemática que tuvo epic games (fortnite), en contra de Apple, que los llevó a los tribunales. Ahorrémonos estos problemas, evitemos los stores nativos, al menos en un inicio.  

4. **Son fáciles de descubrir**: A medida que los usuarios utilizan cada vez más los celulares para buscar información, las PWA se integran muy bien a esta tendencia. Debido a que las PWA se crean en la web, esto significa que la web indexa todo el contenido asociado dentro de este tipo de aplicación, lo que hace que las empresas con PWA sean más buscables y detectables, al mismo tiempo que contribuye positivamente al SEO.

5. **Utilizan poca memoria**: Las personas tienen memoria limitada en su celular y acceso a una cantidad casi ilimitada de aplicaciones. Compites contra todas ellas. En comparación con una aplicación nativa, una PWA casi no te tomará espacio de tu celular.

Como pueden ver las PWA ’s traen varios beneficios, pero aún hay espacio para mejoras. Por ejemplo, integrarse con distintos sensores del celular, como la autenticación mediante huella digital. Como todas las cosas, existe un trade-off. 

¿No quieres perderte del potencial tráfico que puede generar una store? Desarrolla una aplicación nativa. ¿Quieres tener tu aplicación hoy día? Transforma tu sitio web en una PWA. No tengo la respuesta definitiva a lo que deberías hacer y creo que sólo tú puedes tomar esa decisión, pero mientras tanto puedes descargarte nuestra PWA en [Carvuk](https://carvuk.com)