import React from 'react'
import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import BestSeller from '../components/BestSeller/BestSeller'
import CoffeeHolic from '../components/Story/CoffeeHolic'
import TeaHolic from '../components/Story/TeaHolic'
import Blog from '../components/Blog/Blog'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header className='sticky top-0' />
        <Slider />
        <BestSeller />
        <CoffeeHolic />
        <TeaHolic />
        <Blog />
        <Footer />
    </div>
  )
}

export default Home