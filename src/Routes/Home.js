import React from 'react';
import Navbar from '../Components/LandingPage/Components/Navbar';
import Package from '../Components/LandingPage/Components/Package';
import Questions from '../Components/LandingPage/Components/Questions';
import Rating from '../Components/LandingPage/Components/Rating';
import Slide from '../Components/LandingPage/Components/Slide';
import Footer from '../Components/Movies/Components/Footer';



function Home() {
  return (
    <div>
      <Navbar />
      <Slide />
      <Rating />
      <Package />
      <Questions />
      <Footer />
    </div>
  );
}

export default Home;
