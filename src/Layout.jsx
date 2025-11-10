import React from "react";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";

// is function ke through hum hr jgh header aur footer same rahega uske bich ki cheeze change hongi (outlet ki wajah se )

function Layout(){
    return(
        <>

        <Header/>
        <Outlet/> {/* outlet ko humne bich me rkha hai uske upr header & niche footer hai co'z hum upr aur niche wali cheeze as it is rkhna chahte hai */}
        <Footer/>

        </>
    )
}

export default Layout
 // outlet is layout function ko as a base rakh lega.