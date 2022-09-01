import React from 'react';
import Category from '../Components/Movies/Components/Category';
import Footer from '../Components/Movies/Components/Footer';
import Index from '../Components/Movies/Components/Index';
import MovieNavbar from '../Components/Movies/Components/Navbar';
import PopularMovies from '../Components/Movies/Components/PopularMovies';
import Series from '../Components/Movies/Components/Series';
import TopTen from '../Components/Movies/Components/TopTen';

function Movies() {
  return (
    <div>
      <MovieNavbar />
      <Index />
      <Category />
      <PopularMovies />
      <TopTen />
      <Series />
      <Footer />
    </div>
  );
}

export default Movies;
