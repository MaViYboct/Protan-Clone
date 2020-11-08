import React from "react";


function MiddleCards () {
    return (
        <div className="middle-cards">
            <div className="middle-cards-hr"></div>

            <div className="row middle-cards-row">
                    <div className="col-md-4" className="middle-first-card">
                        <a href="">
                            <h4><strong>Tools</strong></h4>
                            <p>
                            Protan has developed several unique technical tools that ensure quality,
                            efficiency and cost efficiency throughout the whole project. In the menu you will find more information about the different tools.
                            </p>
                        </a>
                    </div>
                
                <div className="col-md-8" className="middle-second-card">
                    <a href=""> <img className="middle-sec-img" src="./images/card1.jpg" alt="protan images"/> </a>
                    <a href=""> <img className="middle-sec-img" src="./images/card2.jpg" alt="protan images"/> </a>
                    <a href=""> <img className="middle-sec-img" src="./images/card3.jpg" alt="protan images"/> </a>
                    <a href=""> <img className="middle-sec-img" src="./images/card4.jpg" alt="protan images"/> </a>
                </div>
            </div>

        </div>
    )
}

export default MiddleCards