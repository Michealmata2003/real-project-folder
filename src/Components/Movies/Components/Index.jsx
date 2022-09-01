import React, { useState, useEffect } from 'react';
import { HeroImage } from './heroData';
import './Styles/Index.css';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { ImCancelCircle } from 'react-icons/im'
import { HiPlusSm } from 'react-icons/hi'

function Index() {
  const [currentSlide, setcurrentSlide] = useState(0)
  const [playVideo, setPlayVideo] = useState(false)

  const handlePlayVideo = () => {
    setPlayVideo(true)
  }

  const handleCancelVideo = () => {
    setPlayVideo(false)
  }



  const slideLength = HeroImage.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 100000;

  const nextSlide = () => {
    setcurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  // manual scroll
  useEffect(() => {
    setcurrentSlide(0)
  }, [])

  // useEffect for autoScroll

  useEffect(() => {
    if (autoScroll === true) {
      auto();
      return () => clearInterval(slideInterval);
    }
  }, [currentSlide])


  return (
    <div className='heropage'>

      <div className="position-none">
        {
          HeroImage.map((object, index) => (
            <div key={index} className={index === currentSlide ? "slidex current" : "slidex"}>
              {index === currentSlide && (
                <div>
                  <img src={object.img} alt="" />
                  <div className="gradient">
                    <div className="container">
                      <div className='heropage-text'>
                        <button>New</button>
                        <h1>{object.title}</h1>
                        <p>2021 <span>+18</span> 2h 6m</p>
                        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h6>
                        <div className="buttons">
                          <div>
                            <button className='play-video' onClick={handlePlayVideo} to='/'><BsFillPlayFill /> Play Now</button>

                          </div>
                          <button><HiPlusSm /> My List</button>
                        </div>

                      </div>

                    </div>
                    {playVideo ?
                      <div className="frame">
                        <iframe src={object.video} ></iframe>
                        <ImCancelCircle onClick={handleCancelVideo} className='cancel-video' />
                      </div>
                      : null
                    }
                  </div>
                </div>

              )}
            </div>
          ))
        }
      </div>
      <div >
        <AiOutlineArrowLeft className='arrow previous' onClick={nextSlide} />
        <AiOutlineArrowRight className='arrow next' onClick={prevSlide} />
      </div>
    </div>
  );
}

export default Index;
