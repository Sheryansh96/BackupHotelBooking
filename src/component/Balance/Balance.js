import React, {useState, useEffect} from 'react';
import { AuthService } from '..';
import { Header } from '..';
import './Balance.css';
import Card from '../Card/Card'

function Balance() {
    const [cbalance, setBalance] = useState(0)
    useEffect(() => {
        balance()
     }, [])
    const balance = () =>{
        AuthService.getBalanceUser().then((e) => 
            {
                console.log(e)
                setBalance(e)
            }
        )
    }
  return (
    <div>
    <Header/>
    <div className='reward'>
        <div className='card_class'>
        <h2>Thank you for staying with us.</h2>
        <span>
             {cbalance}
        </span>
        </div>
        {/* <button onClick = {()=>{balance()}} ></button> */}
        <div className='home__section'>
            <Card
                src ="amazon.png"
                title="Amazon"
                description="Claim Reward here"
            />
            <Card
                src="ebay.png"
                title="eBay"
                description="Claim Reward here"
            />
            <Card
                src="uber.png"
                title="UBER"
                description="Claim Reward here"
            />
        </div>
    </div>
   
    </div>
  )
}

export default Balance
