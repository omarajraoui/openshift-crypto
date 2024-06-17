import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { REACT_LIVE_SCROLLING_SPEED ,  REACT_START_HOUR } from '../config.ts'; /* IMPORT */

const Navbar = () => {
  return (
    <Link to={'/'}>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>Coin <span className='purple'>Search</span></h1>
            <h1>
            live scrolling speed :{REACT_LIVE_SCROLLING_SPEED}
            </h1>
            <h1>
            start hour :{ REACT_START_HOUR}
            </h1>
        </div>
    </Link>
  )
}

export default Navbar