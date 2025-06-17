import React from 'react'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import PricingPlans from '../components/PricingPlans'
import TopBrands from '../components/TopBrands'
import PFaq from '../components/PFaq'

export default function Pricing() {
  return (
    <div>
        <Navbar></Navbar>
        <PricingPlans/>
        <TopBrands/>
        <PFaq/>
        <NewsLetter/>
        <Footer/>
        
        </div>
  )
}
