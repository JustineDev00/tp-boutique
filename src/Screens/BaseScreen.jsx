import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function BaseScreen(){
    return(<>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>)
        
    }


export default BaseScreen;