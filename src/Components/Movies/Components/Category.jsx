import axios from 'axios'
import './Styles/Category.css'
import { ImCancelCircle } from 'react-icons/im'
import React, { useState, useEffect } from 'react'
import { BsFillPlayFill, BsPlus, BsInfo } from 'react-icons/bs'

function Category() {
    const [playVideo1, setPlayVideo1] = useState(false)
    const [playVideo2, setPlayVideo2] = useState(false)
    const [playVideo3, setPlayVideo3] = useState(false)

    const handlePlayVideo1 = () => {
        setPlayVideo1(true)
    }
    const handlePlayVideo2 = () => {
        setPlayVideo2(true)
    }

    const handlePlayVideo3 = () => {
        setPlayVideo3(true)
    }


    const handleCancelVideo1 = () => {
        setPlayVideo1(false)
    }
    const handleCancelVideo2 = () => {
        setPlayVideo2(false)
    }
    const handleCancelVideo3 = () => {
        setPlayVideo3(false)
    }



    const baseURL = 'https://image.tmdb.org/t/p/original'
    const [Featured, setFeatured] = useState([])
    const [Movies, setMovies] = useState([])
    const [Shows, setShows] = useState([])
    // const [isActive, setisActive] = useState()


    const [showFeatured, setshowFeatured] = useState(true)
    const [showMovies, setshowMovies] = useState(false)
    const [showShows, setshowShows] = useState(false)



    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=2c011d331198689498236316968cb9dd'
        })
            .then((response) => {
                setFeatured(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=2c011d331198689498236316968cb9dd'
        })
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/trending/all/week?api_key=2c011d331198689498236316968cb9dd&with_genres=10749'
        })
            .then((response) => {
                setShows(response.data.results)
                console.log(response.data.results)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    const ShowFeatured = () => {
        setshowFeatured(true)
        setshowMovies(false)
        setshowShows(false)

    }
    const ShowMovies = () => {
        setshowMovies(true)
        setshowFeatured(false)
        setshowShows(false)
    }
    const ShowShows = () => {

        setshowShows(true)
        setshowFeatured(false)
        setshowMovies(false)
    }




    return (
        <div className='category'>
            <div className="container">
                <div className="category-text">
                    <div className="category-button">
                        <button onClick={ShowFeatured}>Featured</button>
                        <button onClick={ShowMovies}>Movies</button>
                        <button onClick={ShowShows}>Shows</button>
                    </div>
                </div>
                
                {playVideo1 ?
                    <div className="frame">
                        <iframe src='https://youtube.com/embed/9yHG1kk9XgE' ></iframe>
                        <ImCancelCircle className='cancel-video' onClick={handleCancelVideo1} />
                    </div>
                    : null
                }
                <div className="category-image">

                    {showFeatured ?
                        Featured.map((data, index) => (
                            <div key={data.id} className='reach'>
                                <div className='scaling'>
                                    <img className='reach-image' src={`${baseURL}${data.backdrop_path}`} alt="" />
                                </div>                                     <div className="video-options">
                                    <BsFillPlayFill onClick={handlePlayVideo1} className='play-movie' />
                                    <BsPlus className='add-movie' />
                                    <BsInfo className='movieinfo' />
                                </div>

                            </div>

                        ))
                        : null
                    }


                </div>
                {playVideo2 ?
                    <div className="frame">
                        <iframe src='https://youtube.com/embed/r8dfQja43Ik' ></iframe>
                        <ImCancelCircle className='cancel-video' onClick={handleCancelVideo2} />
                    </div>
                    : null
                }
                <div className="category-image">
                    
                    {showMovies ?
                        Movies.map((data, index) => (
                            <div key={data.id} className='reach' >
                                <div className='scaling'>
                                    <img className='reach-image' src={`${baseURL}${data.backdrop_path}`} alt="" />
                                </div>                                <div className="video-options">
                                    <BsFillPlayFill onClick={handlePlayVideo2} className='play-movie' />
                                    <BsPlus className='add-movie' />
                                    <BsInfo className='movieinfo' />
                                </div>
                            </div>
                        ))
                        : null
                    }

                </div>
                {playVideo3 ?
                    <div className="frame">
                        <iframe src='https://youtube.com/embed/6f4T9_QJnMA' ></iframe>
                        <ImCancelCircle className='cancel-video' onClick={handleCancelVideo3} />
                    </div>
                    : null
                }
                <div className="category-image">

                    {showShows ?
                        Shows.map((data, index) => (
                            <div key={data.id} className='reach' >
                                <div className='scaling'>
                                    <img className='reach-image' src={`${baseURL}${data.backdrop_path}`} alt="" />
                                </div>                                     <div className="video-options">
                                    <BsFillPlayFill onClick={handlePlayVideo3} className='play-movie' />
                                    <BsPlus className='add-movie' />
                                    <BsInfo className='movieinfo' />
                                </div>

                            </div>
                        ))
                        : null
                    }

                </div>


            </div>
        </div>)
}

export default Category

