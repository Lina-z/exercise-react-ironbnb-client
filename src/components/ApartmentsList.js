import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function ApartmentsList() {


  const [apartmentsArr, setApartmentsArr] = useState(null);

  useEffect(() => {
    getApartmentsFromApi();
  }, []);
  

  const getApartmentsFromApi = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/apartments`)
      .then(response => {
        setApartmentsArr(response.data);
      })
      .catch(e => console.log(e))
  }

    const renderListOfApartments = () => {
        if(apartmentsArr === null){
          return <p>loading....</p>;
        } else {
          return apartmentsArr.map((apartmentObj) => {
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