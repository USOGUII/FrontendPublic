import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Registration from "./Pages/Registration";
import { Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Dobav from "./Pages/Dobav";
import Notfound from "./Pages/Notfound";
import AddMoney from "./Pages/AddMoney";
import UserProfileNotanAuthor from "./Pages/UserProfileNotanAuthor";


const TrueRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {(localStorage.length!==0 && localStorage.getItem('role')<1) && <Route path="/User" element={<UserProfileNotanAuthor/>}/>}
                {localStorage.length!==0 && <Route path="/AddMoney" element={<AddMoney/>}/>}               
                {localStorage.length!==0 && <Route path="/Home" element={<Home/>}/>}
                {(localStorage.length!==0 && localStorage.getItem('role')>0) && <Route path="/Dobav" element={<Dobav/>}/>}
                {localStorage.length!==0 && <Route path = '/Shop' element = {<App/>}/>}
                {localStorage.length===0 && <Route path = '' element = {<Registration/>}/>}
                {localStorage.length===0 && <Route path="/Login" element={<Login/>}/>}
                <Route path="*" element={<Notfound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default TrueRouter