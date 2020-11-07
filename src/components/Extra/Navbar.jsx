import React from "react";
import { NavDropdown } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav'

//react router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar () {

    return (
      <Router>
      <div>

        <Nav variant="pills" activeKey="1">

        <img class="protan-img" src="./images/protan.png" alt="protan-img"/>

        <div class= "navbar-elements-down navbar-go-right">

        <NavDropdown title="ABOUT PROTAN" id="nav-dropdown">

          <NavDropdown.Item eventKey="0.0"> <Link to="/business">PROTAN'S BUSINESS AREAS</Link> </NavDropdown.Item>
          
          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.1"> <Link to="/group-management">GROUP MANAGEMENT</Link></NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.2">PROTAN'S MISSION</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.3">PROTAN'S FOUR VALUES</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.4">PROTAN'S ETHICAL CODE</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.5">PROTAN'S HISTORY</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.6">PROTAN AND THE ENVIRONMENT</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.7">CAREERS AT PROTAN</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.8">HSE AT PROTAN</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.9">REFERENCES</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.10">TOOLS</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.11">TECHNICAL DRAWINGS</NavDropdown.Item>

          <NavDropdown.Divider />

          <NavDropdown.Item eventKey="0.12">PROTAN AND BIM</NavDropdown.Item>

        </NavDropdown>

        </div>


        <div class= "navbar-elements-down">

        <NavDropdown class= "navbar-elements-down" title="NEWS" id="nav-dropdown">
          <NavDropdown.Item eventKey="1.0">PRESS RELEASE - ESWA</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1.1">PROTECTING STRATEGIC SPORTS FACILITIES</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1.2">SINGLE SOLUTION TO COMPLEX PROJECT</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1.3">PREPARING HISTORIC ARCHITECTURE FOR THE FUTURE</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1.4">PROTECTING RAIL HUB'S ENERGY</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1.5">PROTAN ACQUIRES MULTIPLAN</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="1.6">PROTAN STRENGTHENING THE POSITION IN TUNNELS AND MINING</NavDropdown.Item>
        </NavDropdown>

        </div>


        <div class= "navbar-elements-down">

        <NavDropdown class= "navbar-elements-down" title="DOCUMENTATION" id="nav-dropdown">
          <NavDropdown.Item eventKey="2.0">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="2.1">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="2.2">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="2.3">Separated link</NavDropdown.Item>
        </NavDropdown>

        </div>


       <div class="navbar-elements-down divider">│</div>
       

       <div class= "navbar-elements-down">

        <NavDropdown class= "navbar-elements-down" title="ENGLISH" id="nav-dropdown">
          <NavDropdown.Item eventKey="3.0">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="3.1">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="3.2">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="3.3">Separated link</NavDropdown.Item>
        </NavDropdown>

       </div>

      </Nav>
      
      </div>
      </Router>
    );
}

export default Navbar;