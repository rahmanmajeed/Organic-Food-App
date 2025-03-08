import React from 'react'
import Hero from '../components/Hero'
import LatestOffer from '../components/LatestOffer'
import PremiumBakery from '../components/PremiumBakery'

const PageContent = () => {
  return (
    <main className='min-h-screen'>
      {/** Hero Section */}
      <Hero />
      {/** Latest Offer section */}
      <LatestOffer />
      {/** Bakery */}
      <PremiumBakery />
    </main>
  )
}

export default PageContent