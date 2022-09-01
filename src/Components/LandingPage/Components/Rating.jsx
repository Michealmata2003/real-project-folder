import React from 'react';
import './Styles/Rating.css';
import bend from '../images/bend.png';
import stream from '../images/stream.png';
import CountUp from 'react-countup';


function Rating() {
    return (
        <div>
            <div className="full-container">
                <div className="container">
                    <div className="watch">
                        <div className="text">
                            <h2>Enjoy Watching Them on TV.</h2>
                            <h3>Whether it’s Smart TV, Xbox, Apply TV, Watch Your Favorite Program with Great Pleasure.</h3>
                        </div>
                        <img src={bend} alt="" />
                    </div>
                </div>
            </div>
            <div className="full-numbers">
                <div className="container">
                    <div className="real-numbers">
                        <div className="positions">
                            <h1><CountUp   duration={2.75} end={500 } />+</h1>
                            <h5>Total Videos</h5>
                        </div>
                        <div className="positions">
                            <h1><CountUp  duration={2.75} end={10 } />+</h1>
                            <h5>Positions</h5>
                        </div>
                        <div className="positions">
                            <h1><CountUp  duration={2.75} end={200 } />+</h1>
                            <h5>Subscribers</h5>
                        </div>
                        <div className="positions">
                            <h1><CountUp  duration={2.75} end={300 } />+</h1>
                            <h5>Awards</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="full-container">
                <div className="container">
                    <div className="watch">
                       
                        <img src={stream} alt="" />
                        <div className="text">
                            <h2> Download Favorites, Watch them Offline!.</h2>
                            <h3>It’s super easy to save your favorite shows!</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rating
