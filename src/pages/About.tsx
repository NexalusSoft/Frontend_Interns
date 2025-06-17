import React from 'react'
import Navbar from '../components/Navbar';
import AboutMission from '../components/AboutMission';
import Timeline from '../components/Timeline';
import Technology from '../components/Technology';
import TeamMember from '../components/TeamMember';
import ClientReview from '../components/ClientReview';
import Partners from '../components/Partners';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

 function About() {
  return (
    <div>
        <Navbar></Navbar>
        <AboutMission/>
        <Timeline />
        <Technology />
        <TeamMember />
        <ClientReview />
        <Partners />
        <NewsLetter />
        <Footer/>
    </div>
  )
}
export default About;
