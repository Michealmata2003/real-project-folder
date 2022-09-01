import React, { useState } from 'react';
import './Styles/Series.css'
import { SeriesDrama } from './heroData'
import { SeriesAction, SeriesRomance } from './heroData'
import { Link } from 'react-router-dom';


function Series() {
  const [seriesDrama, setseriesDrama] = useState(SeriesDrama)
  const [seriesAction, setseriesAction] = useState(SeriesAction)
  const [seriesRomance, setseriesRomance] = useState(SeriesRomance)



  const [showseriesDrama, setshowseriesDrama] = useState(true)
  const [showseriesAction, setshowseriesAction] = useState(false)
  const [showseriesRomance, setshowseriesRomance] = useState(false)


  const ShowDrama = () => {
    setshowseriesDrama(true)
    setshowseriesAction(false)
    setshowseriesRomance(false)

  }
  const ShowAction = () => {
    setshowseriesAction(true)
    setshowseriesDrama(false)
    setshowseriesRomance(false)
  }
  const ShowRomance = () => {
    setshowseriesRomance(true)
    setshowseriesAction(false)
    setshowseriesDrama(false)
  }
  return (
    <div>
      <div className="series">
        <div className="container">
          <div className="series-full">
            <div className="series-gist">
              <h6>featured</h6>
              <h1>Best Series</h1>
              <p>News Season 5 Just flown in Watch and debate.</p>
              <div className="work-buttons">
                <button onClick={ShowDrama} className='drama'>Drama</button>
                <button onClick={ShowAction} className='action'>Action</button>
                <button onClick={ShowRomance} className='romance'>Romance</button>
              </div>
            </div>
            <div className='SeriesDrama'>
              {showseriesDrama ?
                seriesDrama.map((object, index) => (
                  <div key={object.id}>
                    <img src={object.img} alt="" />
                    <div className='image-text'>
                      <h6>{object.title}</h6>
                      <div>
                        <p>{object.year}</p>
                        <p>{object.season}</p>
                      </div>
                    </div>
                  </div>
                ))
                : null
              }
            </div>

            <div className='SeriesDrama'>
              {showseriesAction ?
                seriesAction.map((onbj, index) => (
                  <div id={index}>
                    <img src={onbj.img} alt="" />
                    <div className='image-text'>
                      <h6>{onbj.title}</h6>
                      <div>
                        <p>{onbj.year}</p>
                        <p>{onbj.season}</p>
                      </div>
                    </div>
                  </div>
                ))
                : null
              }
            </div>

            <div className='SeriesDrama'>
              {showseriesRomance ?
                seriesRomance.map((object, index) => (
                  <div id={index}>
                    <img src={object.img} alt="" />
                    <div className='image-text'>
                      <h6>{object.title}</h6>
                      <div>
                        <p>{object.year}</p>
                        <p>{object.season}</p>
                      </div>
                    </div>
                  </div>
                ))
                : null
              }
            </div>
          </div>
          <div className="sponsors">
            <div className="container">
              <div className="sponsors-text">
                <h1>OUR SPONSORS</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo ea minima necessitatibus corporis enim!</p>
              </div>
              <div className="sponsor-logos">
                <Link to='/'>Netflix</Link>
                <Link to='/'>AvaStream</Link>
                <Link to='/'>Youtube</Link>
                <Link to='/'>TMDB</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Series;
