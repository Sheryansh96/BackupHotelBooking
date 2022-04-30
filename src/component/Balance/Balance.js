import React, {useState, useEffect} from 'react';
import { AuthService } from '..';
import { Header } from '..';
import './Balance.css';

function Balance() {
    const [cbalance, setBalance] = useState(250)
    useEffect(() => {
        balance()
     }, [])
    const balance = () =>{
        AuthService.getBalanceUser().then((e) => 
            {
                let obj = JSON.parse(e)
                console.log(obj.balance)
                setBalance(obj.balance)
            }
        )
    }
  return (
    <div>
    <Header/>
    <div className='reward'>
        <div className='card_class'>
        <h2>
            Thank you for being a loyal customer. Your current reward points are
            <br></br>
        </h2>
        <span>
             {cbalance}
        </span>
        </div>
        {/* <button onClick = {()=>{balance()}} ></button> */}
    </div>
    </div>
  )
}

export default Balance
