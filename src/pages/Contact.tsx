import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import TopBrands from '../components/TopBrands'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import '../css/Contact.css'

// Fix Leaflet marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

// Office images
import cImg1 from '../image/contact/austria.webp'
import cImg2 from '../image/contact/belgium.webp'
import cImg3 from '../image/contact/netherland.webp'
import cImg4 from '../image/contact/italy.webp'

const offices = [
  {
    country: 'Austria',
    image: cImg1,
    address: '868 Fritsch Stream, Illinois, West Eleonore, Austria',
    phone: '000 - 123 - 456789',
    email: 'info@example.com',
    hours: 'Mon - Fri : 8am - 5pm',
  },
  {
    country: 'Belgium',
    image: cImg2,
    address: 'Chaussée Bernard 120, Lo-Reninge, Leuze-en-Hainaut, Belgium',
    phone: '00 - 123 - 456789',
    email: 'contact@example.com',
    hours: 'Mon - Fri : 8am - 5pm',
  },
  {
    country: 'Netherland',
    image: cImg3,
    address: 'Van der Laarstraat 10, Sint Philipsland, Drenthe, Netherland',
    phone: '0000 - 123-456789',
    email: 'info@example.com',
    hours: 'Mon - Fri : 8am - 5pm',
  },
  {
    country: 'Italy',
    image: cImg4,
    address: 'Rotonda Loredana 5, Sesto Ingrid, Messina, Italy',
    phone: '000 - 123 - 456 - 789',
    email: 'support@example.com',
    hours: 'Mon - Fri : 8am - 5pm',
  },
]

export default function Contact() {
  useEffect(() => {
    // Prevent Leaflet icon errors
    delete (L.Icon.Default.prototype as any)._getIconUrl
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    })
  }, [])

  return (
    <div>
      <Navbar />

      {/* Worldwide Branches */}
      <section className="offices-section">
        <h4 className="subtitle">Worldwide Branches</h4>
        <h2 className="main-title">Our Regional Offices</h2>

        <div className="offices-grid">
          {offices.map((office, index) => (
            <div className="office-card" key={index}>
              <h2>{office.country}</h2>
              <img src={office.image} alt={office.country} />
              <ul>
                <li><i className="fas fa-map-marker-alt"></i> {office.address}</li>
                <li><i className="fas fa-phone"></i> {office.phone}</li>
                <li><i className="fas fa-envelope"></i> {office.email}</li>
                <li><i className="fas fa-calendar-alt"></i> {office.hours}</li>
                <li><i className="fa-solid fa-map-location-dot"></i> View on Google Map</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    
      {/* Contact Form */}
      <div className="background-wrapper">
        <section className="contact-section">
          <div className="contact-container">
            <p className="contact-subtitle">Contact Us</p>
            <h2 className="contact-title">To Set world-Class Industries</h2>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Form submitted!')
              }}
            >
              <div className="form-left">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email ID" required />
                <input type="text" placeholder="Address" required />
                <select required>
                  <option value="">Select your Budget</option>
                  <option value="low">Below $10k</option>
                  <option value="medium">$10k–$50k</option>
                  <option value="high">Above $50k</option>
                </select>
              </div>
              <div className="form-right">
                <select required>
                  <option value="">What you are Interested</option>
                  <option value="industrial">Industrial Setup</option>
                  <option value="consulting">Consulting</option>
                  <option value="automation">Automation</option>
                </select>
                <textarea placeholder="Message" rows={3} required></textarea>
                <button type="submit">Submit Query</button>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/* Map */}
      <div id="map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>Hello! This is London.</Popup>
          </Marker>
        </MapContainer>
      </div>

      <TopBrands />
      <NewsLetter />
      <Footer />
    </div>
  )
}





