import React from 'react';
import { Navigate } from "react-router-dom";
import {UserAuth} from '../../LandingPage/Components/AuthContext'

const Protective = ({children}) => {
    const {user} = UserAuth()
    if (!user) {
        return(
            <Navigate to='/' />
        )
    }
  return children
}

export default Protective;
