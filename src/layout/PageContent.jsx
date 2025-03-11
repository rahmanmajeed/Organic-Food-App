import React from 'react'
import Hero from '../components/Hero'
import LatestOffer from '../components/LatestOffer'
import PremiumBakery from '../components/PremiumBakery'
import DiscoverProducts from '../components/DiscoverProducts'
import CharityBanner from '../components/CharityBanner'
import GiftSection from '../components/GiftSection'
import InstagramCarousel from '../components/InstagramCarousel'

const PageContent = () => {
  return (
    <main className='min-h-screen'>
      {/** Hero Section */}
      <Hero />
      {/** Latest Offer section */}
      <LatestOffer />
      {/** Bakery */}
      <PremiumBakery />
      <DiscoverProducts />
      <CharityBanner />
      <GiftSection />
      <InstagramCarousel />
    </main>
  )
}

export default PageContent