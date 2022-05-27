import React from 'react'
import Image from 'next/image'
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import BoxSuscripcion from './suscripcion'
import HeroSection from './hero-section'
import FooterSection from './footer-section'
import TopAlert from './top-alert'
import ServiceSection from './service-section'
import PVSection from './pv-section'
import NewsSection from './news-section'

const IndexPage = () => {
  const [value, setValue] = React.useState('1')
  return(
    <div>
      <TopAlert/>
      <HeroSection/>
      <ServiceSection/>
      <PVSection/>
      <BoxSuscripcion/>
      <NewsSection/>
      <FooterSection/>
    </div>
    )
  }

  export default IndexPage
