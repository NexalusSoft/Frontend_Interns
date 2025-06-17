import React from 'react'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import TopBrands from '../components/TopBrands';
import CreativeSolution from '../components/CreativeSolution';
import Map from '../components/WorldMap';
import Review from '../components/Review';
import NewArrival from '../components/NewArrival';

 function Services() {
  return (
    <div>
        <Navbar />
        <Portfolio />
        <CreativeSolution />
        <Map />
        <Review />
        <TopBrands />
        <NewArrival />
        <NewsLetter />
        <Footer />  
    </div>
  )
}

export default Services;
