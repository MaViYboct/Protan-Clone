import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";


function Card (props) {
      return(
        <div className="card">
          <h2><strong>{props.title}</strong></h2>
          <hr class="card-hr"/>
          <p>{props.extra}</p>

          <button class="btn btn-primary btn-lg"><strong>READ MORE</strong></button>
        </div>
      );
  }

  export default Card;