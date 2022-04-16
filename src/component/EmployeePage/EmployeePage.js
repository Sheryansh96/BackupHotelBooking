import Axios from "axios";
import React, { useEffect, useState } from "react";

function Employee() {
  const [bookingHistory, setBookingHistory] = useState([]);
  // const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

    useEffect(() => {
      getBookingHistory();
    }, []);

    const getBookingHistory = () => {
        const history = [
            {
                id: "1",
                customerName: "John",
                roomNumber: "104",
                checkIn: "4th May",
                expectedCheckout: "7th May"
            },  {
                id: "2",
                customerName: "Claire",
                roomNumber: "202",
                checkIn: "6th May ",
                expectedCheckout: "9th May"
            }
        ]
        setBookingHistory(history);
    }

  let renderPurchases = null;
  if (bookingHistory.length === 0) {
    renderPurchases = () => {
      return <div>No bookings till now...</div>;
    };
  } else {
    renderPurchases = bookingHistory.map((pro) => {
      return (
        <div style={{width:"50%", marginLeft:"20%"}}  className="home_cards col-md-4 mb-4">
          <div className="home_card card">
            <div
              className="purchase_item_header"
              style={{backgroundColor:"rgb(241 161 162)", height:"40px"}}
            >
              <h4 style={{ width: "100%", color: "white"}} className="purchase_item_price">
                Room No.: {pro.roomNumber}
              </h4><br></br>
            </div>

            <hr style={{ marginTop: "-2px" }}></hr>

            <div className="item">

              <div style={{ marginLeft: "10px" }} className="item-details">
                  
                <h5 style={{marginTop:"5px" }}> Customer Name: </h5>
                <p className="card-title"> {pro.customerName} </p>
                <h5 style={{marginTop:"5px" }}> Check-in Date: </h5>
                <p className="card-title">  {pro.checkIn} </p>
                <h5 style={{marginTop:"5px" }}> Expected Checkout Date:</h5>
                <p className="card-title"> {pro.expectedCheckout} </p>

              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div>
        <h1 style={{ marginLeft: "30px", color: "#ff7779" }}> Bookings in the Hotel </h1>
        <div className="profile_favourites">
          <div className="container-fluid mx-1">
            <div className="row mt-5 mx-1">
              <div className="col-md-9">
                <div className="row"> {renderPurchases} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employee;