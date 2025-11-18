// import React from "react";
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import { Outlet } from "react-router-dom";

// // is function ke through hum hr jgh header aur footer same rahega uske bich ki cheeze change hongi (outlet ki wajah se )

// function Layout(){
//     return(
//         <>

//         <Header/>
//         <Outlet/> {/* outlet ko humne bich me rkha hai uske upr header & niche footer hai co'z hum upr aur niche wali cheeze as it is rkhna chahte hai */}
//         <Footer/>

//         </>
//     )
// }

// export default Layout
//  // outlet is layout function ko as a base rakh lega.

//---------------------------------------------------------------------------------------------------------------
import React, { useEffect } from "react"; // ⭐️ ADD useEffect ⭐️
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from "react-router-dom";

function Layout(){
    
    // ⭐️ NEW CODE: Inject Clarity script after component mounts ⭐️
    useEffect(() => {
        const injectClarityScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            // Paste your exact Clarity code as a string here:
            script.innerHTML = `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "u83esulr3u");
            `;
            // It is safer to append to the head, but we run it after mount, so it's safe.
            document.head.appendChild(script);
        };
        injectClarityScript();
    }, []); // Runs only once when the app first loads
    // ⭐️ END NEW CODE ⭐️

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Layout