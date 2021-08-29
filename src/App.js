import React, { useContext } from "react";

//import Theme from './context/ThemeContext.js';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Store from './components/Store/store.js';
import './App.css';

//import { ThemeContext } from "./context/ThemeContext.js";

export default function App(){
    //const context = useContext(ThemeContext);

    return(
        <>
            <Header />
            <Store />
            <Footer />
        </>
    )
}