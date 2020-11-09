import React from "react";


function BottomMiddleCards () {
    return (
        <div className="middle-cards">
            <div className="middle-cards-hr"></div>

            <h4 style={{marginLeft:"45%"}}><u><strong>LATEST NEWS</strong></u></h4>

            <div className="row">
                <img className="bottom-middle-card bottom-middle-card-first" src="./images/protan-worker.png" alt="latest news"/>

                
                <img className="bottom-middle-card" src="./images/card2.jpg" alt="latest news"/>
                

                
                <img className="bottom-middle-card" src="./images/protan-inside.jpg" alt="latest news"/>
                
            </div>

            <div className="row">

                <div className="bottom-middle-card-2-div-first">
                    <a href=""><h2>Press release - ESWA </h2></a>
                    <p>Erik Øyno is elected as New President for ESWA <br/>(European Single ply Waterproofing Association) </p>
                </div>

                <div className="bottom-middle-card-2-div-second">
                <a href=""><h2>Protan strengthening the <br/> position in tunnels and mining </h2></a>
                    <p>Protan and its Ventiflex brand are strengthening the <br/> presence in Central Europe with a new sales manager <br/> and ambitious plans for the tunnel and mining <br/> market. </p>
                </div>

                <div>
                <a href=""><h2>Protan acquires Multiplan </h2></a>
                    <p>Protan has acquired the Turkish roof and membrane <br/> producer; Multiplan. </p>
                </div>
            </div>

            <button className="btn btn-lg btn-primary bottom-middle-cards-button">MORE NEWS</button>
        </div>
        
    )
}

export default BottomMiddleCards;