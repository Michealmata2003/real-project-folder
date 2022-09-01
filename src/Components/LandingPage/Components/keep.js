import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Rating() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios({
            method: 'get',
            // url: 'https://api.themoviedb.org/3/movie/550?api_key=2c011d331198689498236316968cb9dd'
            // url: 'https://jsonplaceholder.typicode.com/photos'
            // url: 'http://abbrefy.xyz/24cb497/dff4cfb3890e4769adbf0ba42608b31c'
        })
            .then((res) => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    return (
        <div className="container">
            {/* {
                movies.map((movie) => (
                    <div className="cards" key={movie.id}>
                       <img  src={movie.url} alt={movie.title} />
                    </div>
                ))

            } */}
        </div>
    )
}

export default Rating
