import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <Link to={'/'}>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>Coin <span className='purple'>Search</span></h1>
            <h1>
            analytics_url :{window.env.REACT_APP_ANALYTICS_URL}
            </h1>
            <h1>
             oth_redirect_url :{window.env.REACT_APP_OAUTH_REDIRECT_URI}
            </h1>
            <h1>
             oth_client_id :{window.env.REACT_APP_OAUTH_CLIENT_ID}
            </h1>
            <h1>
             Testing new values 
            </h1>

            
            

        </div>
    </Link>
  )
}

export default Navbar