import React, {useEffect, useState} from 'react';
import AuthService from '../User_auth';
import { useHistory } from 'react-router-dom'; 
import './Update.css';
import { Button } from '@material-ui/core';
import { DateRangePicker } from 'react-date-range';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Header } from '..'

function Update() {


    // daily_continental_breakfast,
    //     access_to_fitness_room,
    //     access_to_swimming_Pool_Jacuzzi,
    //     daily_parking,
    //     all_meals_included
    const[curr, setCurr] = useState([]);
    const[breakfast_book, setBreak] = useState("Yes");
    const[fit_book, setFit] = useState("No");
    const[swim_book, setSwim] = useState("No");
    const[park_book, setPark] = useState("No");
    const[meal_book, setMeal] = useState("No");

    const { search } = useLocation()
    const {query} = queryString.parse(search)

    let x = {
        "fromDate" : "2022-04-30",
        "toDate" : "2022-05-07",
        "amenities": {
            "daily_continental_breakfast":true,
            "access_to_fitness_room":false,
            "access_to_swimming_Pool_Jacuzzi":true,
            "daily_parking":true,
            "all_meals_included":false
          }
    }

    useEffect(() => {
        setCurr(x)
        if(x.amenities.daily_continental_breakfast){
            setBreak("Yes")
        }
        if(x.amenities.access_to_fitness_room){
            setFit("Yes")
        }
        if(x.amenities.access_to_swimming_Pool_Jacuzzi){
            setSwim("Yes")
        }
        if(x.amenities.daily_parking){
            setSwim("Yes")
        }
        if(x.amenities.all_meals_included){
            setSwim("Yes")
        }
        // AuthService.getBookingDetails().then(
        //         (x) => {
        //             setCurr(x)
        //              
        //         },
        //         error => {
        //             const resMessage =
        //             (error.response &&
        //             error.response.data &&
        //             error.response.data.message) ||
        //             error.message ||
        //             error.toString();
        //         }
        //     )
     }, [])



    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [breakfast, setCheckedBF] = React.useState(false);
    const [fit, setCheckedFit] = React.useState(false);
    const [pool, setCheckedPool] = React.useState(false);
    const [park, setCheckedParking] = React.useState(false);
    const [meals, setCheckedMeals] = React.useState(false);
    const [room, setRoomType] = React.useState(false);
    const [rooms, setRooms] = useState(1);
    const [child, setChild] = useState(1);
    const [adult,setAdult] = useState(1);
    const history = useHistory();

    

    const setCheckedOne = () => {
      setCheckedBF(!breakfast);
    };

    const setCheckedTwo = () => {
      setCheckedFit(!fit);
    };

    const setCheckedThree = () => {
      setCheckedPool(!pool);
    };

    const setCheckedFour = () => {
      setCheckedParking(!park);
    };

    const setCheckedFive = () => {
      setCheckedMeals(!meals);
    };
  
    const roomType = (event) => {
      console.log(event.target.value)
      setRoomType(event.target.value)
    }

    const roomInc = () => {
      if(rooms >= 4){
        setRooms(4)
      }
      else{
        let v1 = rooms
        v1=v1+1
        setRooms(v1)
        console.log(rooms)
      }
    }
    
    const roomDec = () => {
      if(rooms <= 1){
        setRooms(1)
      }
      else{
        let v2 = rooms
        console.log(rooms)
        setRooms(--v2)
      }
    }


    const ChildInc = () => {
      if(child >= 4){
        setChild(4)
      }
      else{
        let v1 = child
        v1=v1+1
        setChild(v1)
      }
    }
    
    const ChildDec = () => {
      if(child <= 0){
        setChild(0)
      }
      else{
        let v2 = child
        setChild(--v2)
      }
    }

    const AdultInc = () => {
      if(adult >= 4){
        setAdult(4)
      }
      else{
        let v1 = adult
        v1=v1+1
        setAdult(v1)
      }
    }
    
    const AdultDec = () => {
      if(adult <= 1){
        setAdult(1)
      }
      else{
        let v2 = adult
        setAdult(--v2)
      }
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
      };
      function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const UpdateBook = () => {
        var g1 = new Date();
        if(startDate.getTime() < g1.getTime()){
            window.alert("Kindly select the later dates")
            return
        }
        AuthService.getUserUpdate(room, startDate, endDate, breakfast, fit, pool, park, meals, rooms, child, adult, query).then(
            () => { history.push('/') 
            //window.location.reload(false);
            },
            error => {
                const resMessage =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            }
        )
    }

  return (
    <div>
      <Header/>
        <div className = "card_update">
        <h2>Current Booking</h2>
        <br></br>
        <div className = "cardupdate__info">
        <div>
        <h4>From</h4>
        {curr.fromDate}
        </div>
        <div>
        <h4>To</h4>
        {curr.toDate}
        </div>
        <div>
        <h4>Breakfast</h4>
        {breakfast_book}
        </div>
        <div>
        <h4>Fitness</h4>
        {fit_book}
        </div>
        <div>
        <h4>Pool</h4>
        {swim_book}
        </div>
        <div>
        <h4>Parking</h4>
        {park_book}
        </div>
        <div>
        <h4>All Meals</h4>
        {meal_book}
        </div>
        </div>
        </div>
        <div className = "card_update">
        <h2>Please Update your booking</h2>
        <br></br>
        <br></br>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h3>Amenities <RoomServiceIcon /></h3>
        <input type="checkbox" checked={breakfast} onChange={setCheckedOne}/> Daily Continental Breakfast
        <br></br>
        <input type="checkbox" checked={fit} onChange={setCheckedTwo}/> Access to fitness room
        <br></br>
        <input type="checkbox" checked={pool} onChange={setCheckedThree}/> Access to Swimming Pool/Jacuzzi
        <br></br>
        <input type="checkbox" checked={park} onChange={setCheckedFour}/> Daily Parking
        <br></br>
        <input type="checkbox" checked={meals} onChange={setCheckedFive}/> All meals included (Breakfast, Lunch, Dinner)
        <br></br>
        <br></br>
        <br></br>
        <h3>Room Type <BedroomParentIcon /></h3>
        <div onChange = {roomType}>
          <input type="radio" value="Single" name="room"/> Single Room
          <br></br>
          <input type="radio" value="Double" name="room"/> Double Room
          <br></br>
          <input type="radio" value="Suite" name="room"/> Suite
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Number of Room</h3>
        <div>
        <Button onClick  = {roomInc}>+</Button>
        {rooms}
        <Button onClick  = {roomDec}>-</Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Number of Children</h3>
        <div>
        <Button onClick  = {ChildInc}>+</Button>
        {child}
        <Button onClick  = {ChildDec}>-</Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <h3>Number of Adults</h3>
        <div>
        <Button onClick  = {AdultInc}>+</Button>
        {adult}
        <Button onClick  = {AdultDec}>-</Button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <span>
        <Button onClick = {UpdateBook}>Confirm</Button>
        </span>
        </div>
    </div>
  )
}

export default Update
