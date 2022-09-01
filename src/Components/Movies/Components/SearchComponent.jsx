import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/Search.css'
import { IoIosSearch } from 'react-icons/io';
import { TiTimes } from 'react-icons/ti';
import SearchMovie from './SearchMovie';
import { NavLink } from 'react-router-dom';


const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=2c011d331198689498236316968cb9dd&language=en-US&page=1&include_adult=true&query=?'
const API_URL = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=2c011d331198689498236316968cb9dd'
}



function SearchPage() {
    const [searchMovies, setSearchMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        axios(API_URL)
            .then((res) => {
                console.log(res.data.results)
                setSearchMovies(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, []);



    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            fetch(SEARCH_URL + searchTerm)
                .then((res) => res.json())
                .then((data) => {
                    setSearchMovies(data.results)

                });
            setSearchTerm('')
        }
    }
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="full-search">
            <div className="container">
                <div className="head">
                    <form onSubmit={handleOnSubmit}>
                        <IoIosSearch />
                        <input
                            type="search"
                            value={searchTerm}
                            onChange={handleOnChange}
                            autoFocus
                            placeholder='Search...'
                        />
                        <NavLink to='/'>
                        <TiTimes />
                        </NavLink>
                    </form>
                </div>
                <div className="page">
                    {searchMovies.length > 0 &&
                       
                        searchMovies.map((object) => <SearchMovie
                            key={object.id}
                            {...object}
                        />)
                    }
                </div>
            </div>
        </div>
    );
}


export default SearchPage;



