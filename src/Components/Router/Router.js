
import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import Inputfield from '../../Atom/Input/Input'
import Login from '../../pages/Login'
import SignUp from '../../pages/Singup'
import Home from '../Home/Home'

const Router = () => {
  return (
    <div>
      <Routes>
      <Route
             path= "/"
             element= {<Login/>}>
        </Route>
        <Route
             path= "/SingUp"
             element= {<SignUp/>}>
        </Route>
        <Route
            path= "/Home"
            element= {<Home />}>
        </Route>
      </Routes>
    </div>
  )
}

export default Router
