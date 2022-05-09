import React, { useState } from 'react'
import './Search.css'
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button, TextField } from '@material-ui/core'
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
      console.log(event.target.value)
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
      // if(!AuthService.validUser()){
      //   history.push('/')
      // }
      // else{
        console.log(location)
        AuthService.getHotelLocation(location).then(
          (x) => {
            console.log(x)
            if(!AuthService.validUser()){
                window.alert("Please Login")
              }
              else{
            history.push('/search')
              }
           }).catch((error) => {
           // Error
           if (error.response) {
               window.alert("No Hotels in this location")
           } else if (error.request) {
               window.alert("No Hotels in this location")
               console.log(error.request);
           } else {
               // Something happened in setting up the request that triggered an Error
               window.alert("No Hotels in this location")
               console.log('Error', error.message);
           }
           console.log(error.config);
       });   
      // Axios.post("http://localhost:3001/hotel",{
      // startdate: startDate,
      // enddate : endDate,
      // location : location
      // }).then((response) => {
      //   console.log(response)
      // })
      //}
    }
  return (
    <div className='search'>
      {/* <Dropdown
        label="Where to stay?"
        options={[
          { label: 'London', value: 'London' },
          { label: 'Paris', value: 'Paris' },
          { label: 'Delhi', value: 'Delhi' },
        ]}
        value={location}
        onChange={handleLocChange}
      /> */}
      <TextField
        className = "dropdown"
        id="first-name"
        label="Type here"
        placeholder = "Enter Location"
        value= {location}
        onChange= {handleLocChange}
        //margin="normal"
        //onChange = {(e)=> {handleLocChange(e.target.value)}} required
        />
      <Button onClick={details}>Search HOTELA</Button>
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
