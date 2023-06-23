import { NavLink, Link, Route, Routes } from "react-router-dom";

function NavBar() {
    return(
        <nav>
        <NavLink to="/">Home Page | </NavLink> 
        <NavLink to="/apartments">List of apartments | </NavLink> 
        <NavLink to="/apartments/create">Add my apartment | </NavLink> 
        <NavLink to="/apartments/:id">See aparments details </NavLink> 
      </nav>
    )
}

export default NavBar;
