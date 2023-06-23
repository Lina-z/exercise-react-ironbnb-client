import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ApartmentsList(props) {

    const renderListOfApartments = () => {
        if(props.apartmentsArr === null){
          return <p>loading....</p>;
        } else {
          return props.apartmentsArr.map((apartmentObj) => {
            return (
              <div key={apartmentObj._id} className="character box">
                <img src={apartmentObj.img} alt="apartment" className="img"/> <br />
                Price: {apartmentObj.pricePerDay} <br />
                Location: {apartmentObj.title} <br />
                <Link to={`/apartments/${apartmentObj.id}`}>More details</Link>
              </div>
            )
          })
        }
      }
    
    return(
        renderListOfApartments()
    )
}

export default ApartmentsList;