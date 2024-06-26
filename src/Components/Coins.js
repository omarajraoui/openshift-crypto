import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import './Coins.css'
import {Link} from 'react-router-dom'

const Coins = (props) => {
  console.log('API URL:', process.env.REACT_APP_API_URL);
  console.log('API KEY:', process.env.REACT_APP_API_KEY);
  console.log('Environment Variables:', process.env.NODE_ENV);

  return (
    <div className='container'>
        <div>

             <div className='heading'>
                <p>#</p>
                <p  className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            
            </div>
            {props.coins.map((coins=>{
                return(
                    <Link to={`/coin/${coins.id}`} element={<Coin/>}>
                    <CoinItem coins={coins} key={coins.id}/>
                    </Link>
                )
            }))}

        </div>
        
    </div>
  )
}

export default Coins