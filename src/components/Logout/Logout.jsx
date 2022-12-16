import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const Logout = () => {
    const {logout} = useAuth0()
  return (
    <div>
        <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button>
    </div>
  )
}
