import React from 'react';
import {Link} from 'react-router-dom'
import './Sign.css'

function SignUp() {
  return (
    <div className='sign-background'>
      <div >
        <div className="black">
            <div className="form">
                <form action="post">
                    <div className="value">
                        <label>Full Name</label>
                        <input type="text" />
                    </div>
                    <div className="value">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="value">
                        <label>Password</label>
                        <input type="password" />
                    </div>
                    <div className="value">
                        <label>Confirm Password</label>
                        <input type="password" />
                    </div>
                </form>
                <div className="foot">
                    <p><span></span></p>
                    <Link to='/'><button>Sign Up</button></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
