import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './Styles/Category.css'


function PopularMovies() {
  const [PopularMovies, setPopularMovies] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/upcoming?api_key=2c011d331198689498236316968cb9dd&language=en-US'
    })
      .then((response) => {
        setPopularMovies(response.data.results)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <div className='category'>
      <div className="container">
        <div className="popular-text">
          <h1>Popular Movies</h1>
        </div>
        <div className="category-image">
          {
            PopularMovies.map((movies, index) => (
              <div key={movies.id}>
                <div className='scaling' >
                <img  className='reach-image' src={`https://image.tmdb.org/t/p/original${movies && movies.backdrop_path}`} alt="" />
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default PopularMovies;









