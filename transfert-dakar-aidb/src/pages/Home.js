import React from 'react'
import CarList from '../components/CarList'
import HeaderCarousel from '../components/Carousel'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'


export default function Home() {
    return (
        <div>
            <HeaderCarousel />
            <CarList />
            
            <ContactUs />
            <Footer />
        </div>
    )
}
