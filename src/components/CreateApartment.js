import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


function CreateApartment(props) {
    const { apartmentId } = useParams();
    
    const navigate = useNavigate();

    const [details, setDetails] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");

    setTitle("");
    setPrice("");
    setImg("")

    const useHandleSubmit = (e) => {
        e.preventDefault();
        const newApartment = {
          title: title,
          price: price,
          img: img,
        };
        props.addApartment(newApartment)

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_API_URL}/apartments/${apartmentId}`, setDetails)
            .then(response => {
                setDetails(response.data);
            })
            .catch(e => console.log(e))
    }, []);

    const createApartment = () => {
        axios.create(`${process.env.REACT_APP_API_URL}/apartments/${apartmentId}`)
            .then( (response) => {
                props.callbackToUpdateList(); 
                navigate("/"); 
            })
            .catch( e => console.log("Error creating appartment...", e));
    }

    return (
        <div className="box">

        <form onSubmit={useHandleSubmit}>
        <span>Add Apartment</span>
  
        <label>Name</label>
        <span value={title} type="text" onChange={(e) => {setTitle(e.target.value)}} />
  
        <label>Image</label>
        <span value={price} type="text" onChange={(e) => {setPrice(e.target.value)}} />
  
        <label>Image</label>
        <span value={img} type="text" onChange={(e) => {setImg(e.target.value)}} />
  
        <button onClick={createApartment}>Create this apartment</button>

            <p>
                <Link to="/">Back</Link>
            </p>
      
      </form>
      </div>);
    
}
}
export default CreateApartment;