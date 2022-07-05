---
title: 'Cómo creamos Carvuk App en menos de 6 horas'
metaTitle: 'Next.js page options and how they work'
description: 'Probando una descripción cualquiera'
metaDesc: 'How to use pages in Next.js exploring the options'
authorImage: ./matias-perez.jpeg
authorName: 'Matías Perez'
socialImage: ./blogImg1.jpg
readingTime: '5 minutos'
categoryName: 'Tecnología'
date: '2021-09-22'
tags:
  - nextjs
---
# The main content

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.