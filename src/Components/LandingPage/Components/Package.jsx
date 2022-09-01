import React from 'react';
import  './Styles/Package.css'

function Package() {
  return (
    <div>
      <div className="packages">
        <div className="container">
          <div className='pack'>
            <div className="each-package">
              <div className="price">
                <h1>$0.00</h1>
                <h6>Free</h6>
              </div>
              <p>laboris nisi ut pariatur.
                Secure Service
                laboris nisi ut pariatur.
                70 Cup of coffee
                Awesome Support
                Offline Download
                nam aliquam</p>
              <button>Choose a Plan</button>
            </div>
            <div className="each-package">
              <div className="price">
                <h1>$100</h1>
                <h6>Premium</h6>
              </div>
              <p>laboris nisi ut pariatur.
                Secure Service
                laboris nisi ut pariatur.
                70 Cup of coffee
                Awesome Support
                Offline Download
                nam aliquam</p>
              <button>Choose a Plan</button>
            </div>
            <div className="each-package">
              <div className="price">
                <h1>$200</h1>
                <h6>Standard</h6>
              </div>
              <p>laboris nisi ut pariatur.
                Secure Service
                laboris nisi ut pariatur.
                70 Cup of coffee
                Awesome Support
                Offline Download
                nam aliquam</p>
              <button>Choose a Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Package;
