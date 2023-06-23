import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function CreateApartment() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [pricePerDay, setPrice] = useState("");
  const [img, setImg] = useState("");

  const useHandleSubmit = (e) => {
    e.preventDefault();
    const newApartment = {
      title: title,
      price: pricePerDay,
      img: img,
  }
  createApartment(newApartment)
  }

  const createApartment = (newApartment) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/apartments`, newApartment)
      .then((response) => {
        navigate("/apartments");
      })
      .catch((e) => console.log("Error creating appartment...", e));
  };

  

  return (
    <section className="box">
      <form onSubmit={useHandleSubmit}>
        <h1>Add Apartment</h1>

        <label>Name</label>
        <input
          value={title}
          type="text"
          onChange={(e) => { setTitle(e.target.value) }}
        />

        <label>Price</label>
        <input
          value={pricePerDay}
          type="text"
          onChange={(e) => { setPrice(e.target.value) }}
        />

        <label>Image</label>
        <input
          value={img}
          type="text"
          onChange={(e) => { setImg(e.target.value) }}
        />

        <button>Create this apartment</button>

      </form>
    </section>
  );
}
export default CreateApartment;
