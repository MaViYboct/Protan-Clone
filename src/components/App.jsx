import React from "react";
import Header from "./Header.jsx";
import Middle from "./Middle.jsx";
import Footer from "./Footer.jsx"

//react router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Header />
            <Middle />
            <Footer />
        </div>
    )
}

export default App;
