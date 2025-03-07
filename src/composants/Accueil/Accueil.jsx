import React from "react";
import './Accueil.scss';
import { PiDotsNineBold } from "react-icon/pi";


//impostest Assets
import image from '../assets/préfecture ain sbaa.jpg';
import logo from '../assets/logos-png-01.png';

//imported icon


const Accueil = () => {
    return (
        <div className="Accueil">
            
            <div className="header">
                <header>
                    <h1>مكتب الضبط </h1>
                </header>
                <img src={logo} alt="" style={{ width: "120px", height: "auto" , position: "absolute", top: "1px", left: "-25px" }}/>
            </div>
                
            <div className="Img">
                <img src={image} alt="image" />
            </div>
            
            <div>
            <div className="navBar">
            <div className={navBar}>
                <ul>
                    <li className="navList">الرئيسية</li>
                    <li className="navList">تسجيل الصـــادرات</li>
                    <li className="navList">تحيين معطيات الصـــادرات</li>
                    <li className="navList">بحث عن الصادرات</li>
                    <li className="navList">سجل الصـــادرات</li>
                </ul>
            </div>
                <PiDotsNineBold className="icon menuIcon"/> 
                {/*  onClick={showNavBar} */}




        </div>

                </div>
            </div>





      
    )
}
export default Accueil;


        //     /* <div className="sectionText">
        // //         <h1>Unlock Your Travel Dreams With Us</h1>
        // //         <p>
        // //             Discover the world's most adventurous nature,life is so short for a trip.
        // //         </p>
        // //         <button className="btn flex">GET STARTED</button>
        // //     </div>
        // //     <div className="popularPlaces">
        // //         <div className="content">
        // //             <h3>Popular places</h3>
                   
        // //         </div>
        // //     </div> */




