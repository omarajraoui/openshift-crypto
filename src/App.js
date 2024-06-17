import React,{useState ,useEffect} from 'react';
import axios from 'axios';
import Coins from './Components/Coins';
import Coin from './routes/Coin';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import { REACT_API_DOMAIN } from './config.ts'; /* IMPORT */


function App() {
  const [coins,setCoins] = useState([]);

  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data);
    console.log(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[])
  
  console.log(REACT_API_DOMAIN);

  return (

    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Coins coins={coins}/>}/>
      <Route path='/coin' element={<Coin/>}>
        <Route  path=':coinId' element={<Coin/>}/>
        </Route>
    </Routes>

    </>
  );
}


export default App;
