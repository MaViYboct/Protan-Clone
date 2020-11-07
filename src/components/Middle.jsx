import React from "react";
import Card from "./Extra/Card.jsx";
import data from "../data.js";
import MiddleCards from "./Extra/MiddleCards.jsx"


function createCard(data) {
    return (
      <Card
      key = {data.id}
  
      title = {data.title}
      extra = {data.extra}
      />
    );
  }

function Middle() {
    return (
        <div className="body">
          
            <img class="factory-img" src="./images/middle-img.jpg" alt="protan image"/>
            <div class="transparent-box">
              <h2 class="transparent-box-text"> <strong> SEDUM ROOF AT EQUINOR HEADQUARTERS, <br></br> FORNEBU, NORWAY </strong> </h2>
              <p style={{color: "white"}}>Protan single-ply products in combination with sedum on the roof of the Equinor headquarters in Fornebu, Norway. </p>
              <button class="btn btn-primary btn-lg transparent-box-button"><strong>READ MORE</strong></button>
            </div>
            {data.map(createCard)}

            
            <MiddleCards />
        </div>
    )
}

export default Middle;