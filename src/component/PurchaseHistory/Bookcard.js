import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './bookcard.css';
import { DateRangePicker } from 'react-date-range';
import Details from '../SearchResult/Details';
import { useHistory } from 'react-router-dom'; 

function Bookcard({ src, title, description, price }) {
  const [showSearch, setShowSearch] = useState(false);
  const history = useHistory();

  const update = () => {
    history.push( {pathname: '/update',
    search: `?query=${title}`}) 
  }
  return (
    <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
            <span>
            <Button onClick ={update} >Update</Button>
            </span>
            <Button>Cancel</Button>
        </div>
  )
}

export default Bookcard
