import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import { Login } from '../Login/Login'
import { Logout } from '../Logout/Logout'
import { Profile } from '../Profile/Profile'

const Userlogout = () => {
    const {isAuthenticated} = useAuth0()
  return (
    <div>
      { isAuthenticated ? (<>
    <Profile/>
    <Logout/></>)  :
      <Login/> }
    </div>
  )
}

export default Userlogout