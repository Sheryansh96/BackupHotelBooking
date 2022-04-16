import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from '@material-ui/core'
import PeopleIcon from "@material-ui/icons/People";
import { useHistory } from 'react-router-dom'; 
import Axios from 'axios'
import AuthService from '../User_auth';

function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [location, setLocation ] = useState("");
    const handleLocChange = (event) => {
      setLocation(event.target.value);
    };
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };
      function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const details = () => {
      if(!AuthService.validUser()){
        history.push('/')
      }
      else{
      history.push('/search')
      Axios.post("http://localhost:3001/hotel",{
      startdate: startDate,
      enddate : endDate,
      location : location
    }).then((response) => {
        console.log(response)
    })}
    }
  return (
    <div className='search'>
      <Dropdown
        label="Where to stay?"
        options={[
          { label: 'London', value: 'London' },
          { label: 'Paris', value: 'Paris' },
          { label: 'Delhi', value: 'Delhi' },
        ]}
        value={location}
        onChange={handleLocChange}
      />
      <Button onClick={details}>Search AirBNB</Button>
    </div>
  )
}

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label className = "label">
      {label}
      <select value={value} className = "dropdown" onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Search
