import React from 'react'
const IMG_API = 'https://image.tmdb.org/t/p/original'
const SearchMovie = ({title, poster_path, overview, vote_average}) => {
  return (
    <div >
      <img src={IMG_API + poster_path} alt={title} />
    </div>
  )
}

export default SearchMovie
