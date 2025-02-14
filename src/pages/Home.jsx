import React from 'react'
import HeroSection from '../components/HeroSection'
import ShopByCategories from '../components/ShopByCategories'
import OurBestSeller from '../components/OurBestSeller'
import DealsOfTheMonth from '../components/DealsOfTheMonth'
import CustomerReview from '../components/CustomerReview'
import InstagramStories from '../components/InstagramStories'
import WhatWeOffer from '../components/WhatWeOffer'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ShopByCategories />
      <OurBestSeller />
      <DealsOfTheMonth />
      <CustomerReview />
      <InstagramStories />
      <WhatWeOffer />
    </div>
  )
}
