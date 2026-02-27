import React from 'react'; 
import styles from "./layout.module.css";
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';


export default function Layout({children}){

   
    return(
        <div className={styles.main__conteiner}> 
           <Navbar/>
            <div className={styles.maincontainer}>
                {children}
            </div>
            <Footer/>
        
        </div>
    )
}