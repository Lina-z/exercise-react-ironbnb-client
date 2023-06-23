

import axios from 'axios';
import { useState, useEffect } from 'react';
import { Route, Routes, NavLink, Link } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentDetails from "./components/ApartmentDetails";
import ApartmentsList from "./components/ApartmentsList";
import CreateApartment from "./components/CreateApartment";
import './App.css';



function App() {

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



  return (
    <div className="App">
       <nav>
       <NavBar />
       </nav>
      <h1>Welcome</h1>

    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/apartments' element={<ApartmentsList apartmentsArr={apartmentsArr}/>} />
        <Route path='/apartments/create' element={<CreateApartment callbackToUpdateList={getApartmentsFromApi}/>} />
        <Route path='/apartments/:id' element={<ApartmentDetails />} />
        
     </Routes> 
    </div>
  );
}

export default App;


//axios.get(`${process.env.REACT_APP_API_URL}/characters`)