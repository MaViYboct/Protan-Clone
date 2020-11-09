import React from "react";


function HandleClick (props)  {
    window.scrollTo(0,0);
  }

function LowerMiddle () {
    return (
        <div className="middle-cards">
            <div className="middle-cards-hr"></div>

            <h4 style={{marginLeft:"42%"}}><u><strong>ENVORIMENTAL PROFILE</strong></u></h4>

            <div className="lower-middle-div">
                <h3><strong>Sustainability</strong></h3>
                <div className="row">
                    <h5 style={{width:"500px"}}>Protan takes responsibility for its impact on the <br/> environment. Our products are made ​​from <br/> environmentally 
                    friendly raw materials. They are <br/> manufactured, used and managed with minimal use <br/> of resources. We work with organisations, suppliers 
                    <br/> and our customers to maximise our environmental <br/> efforts.</h5>

                    <img className="grass-pic" src="./images/grass.jpg" alt="nature"/>
                </div>

                <button onClick={HandleClick} className="round-button">^</button>
            </div>
        </div>
    )
}


export default LowerMiddle;