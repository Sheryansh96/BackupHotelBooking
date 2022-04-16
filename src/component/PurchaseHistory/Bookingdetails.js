import React, { useEffect, useState } from 'react';
import './bookingdetails.css';
import Bookcard from './Bookcard';



function Bookingdetails() {

    const [userData, setData] = useState([])
    
    let cars = [
        {
          "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
          "location": "Entire homes",
          "desc": "Comfortable private places, with room for friends or family.",
        },
        {
            "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
            "location": "Entire homes",
            "desc": "Comfortable private places, with room for friends or family.",
        },
        {
            "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
            "location": "Entire homes",
            "desc": "Comfortable private places, with room for friends or family.",
          },
          {
              "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
              "location": "Entire homes",
              "desc": "Comfortable private places, with room for friends or family.",
          },
          {
            "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
            "location": "Entire homes",
            "desc": "Comfortable private places, with room for friends or family.",
          },
          {
              "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
              "location": "Entire homes",
              "desc": "Comfortable private places, with room for friends or family.",
          },
          {
            "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
            "location": "Entire homes",
            "desc": "Comfortable private places, with room for friends or family.",
        },
        {
          "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
          "location": "Entire homes",
          "desc": "Comfortable private places, with room for friends or family.",
        },
        {
            "src": "https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",
            "location": "Entire homes",
            "desc": "Comfortable private places, with room for friends or family.",
        }
     ]

    useEffect(() => {
        setData(cars)

        // AuthService.getBookingDetails(userName, userPassword).then(
        //     (x) => {
        //     setData(x)
        //     },
        //     error => {
        //         const resMessage =
        //         (error.response &&
        //         error.response.data &&
        //         error.response.data.message) ||
        //         error.message ||
        //         error.toString();
        //         setLoading(false)
        //     }
        // )

     }, [])
     
    const users=userData.map((data,id)=>{
        return (
          <Bookcard
                 src={data.src}
                 title={data.location}
                 description={data.desc}
            />
            
        )
        
    })

    // const balance = () =>{   
    //     console.log("Creating array") 
    //     itemList.map((cars,id)=>{
    //         console.log(cars.color)
    //         return <Bookcard
    //             src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
    //             title="Entire homes"
    //             description="Comfortable private places, with room for friends or family."
    //         /> 
    //       })
    // }

  return (
    <div className='book__section'>
         {users}
    </div>
  )
}

export default Bookingdetails
