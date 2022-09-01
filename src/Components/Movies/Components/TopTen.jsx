import React, { useState } from 'react';
import { TopCard } from './heroData'
import { ImCancelCircle } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io'
import './Styles/Category.css'
const slideLength = TopCard.length;

function TopTen() {
    const [playVideo, setPlayVideo] = useState(false)

    const handlePlayVideo = () => {
        setPlayVideo(true)
    }

    const handleCancelVideo = () => {
        setPlayVideo(false)
    }

    const [concorrent, setconcorrent] = useState(0)
    const nextSlide = () => {
        setconcorrent(concorrent === slideLength - 1 ? 0 : concorrent + 1)
    }

    const prevSlide = () => {
        setconcorrent(concorrent === 0 ? slideLength - 1 : concorrent - 1)
    }

    return (
        <div className="top-ten">

            <div className="top-ten-full">
                <div className="container">
                    <div className='bemding'>

                        {
                            TopCard.map((obj, idx) => (
                                <div key={obj.id} className={idx === concorrent ? "sliden currenten" : "sliden"}>
                                    {concorrent === idx &&
                                        (<div className='vexen'>
                                            <div className="description">
                                                <h1>{obj.title}</h1>
                                                <h6>{obj.about}</h6>
                                                <div className="star">
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                </div>
                                                <button onClick={handlePlayVideo}>Play Video</button>

                                                {playVideo ?
                                                    <div className="watch-topten">
                                                        <iframe src={obj.watch} frameborder="0"></iframe>
                                                        <ImCancelCircle className='stop-video' onClick={handleCancelVideo} />

                                                    </div>
                                                    : null
                                                }
                                            </div>

                                            <div>
                                                <img src={obj.img} alt="" />
                                            </div>
                                        </div>)
                                    }
                                </div>


                            ))


                        }
                    </div>
                </div>
            </div>
            <div div className='arrowen'>
                <IoMdArrowDropleft className='backward' onClick={nextSlide} />
                <IoMdArrowDropright className=' forward' onClick={prevSlide} />

            </div>
        </div >
    );
}

export default TopTen;
