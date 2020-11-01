import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from "react-bootstrap";


function NavbarPage () {
  return (
    <div class="navbar-page">
    <div class="greenbox"></div>
  <Navbar bg="primary" variant="dark">
    <div class="navbar-page-inside">
    <Nav className="mr-auto">
      
      <NavDropdown title="ROOFING AND MEMBRANES">
      
      <NavDropdown.Item>1</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>2</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>3</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>4</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>5</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>6</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>7</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>8</NavDropdown.Item>

      </NavDropdown>


      <NavDropdown title="TECHNICAL TEXTILES">
        
        <NavDropdown.Item>1</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>4</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>5</NavDropdown.Item>
  
      </NavDropdown>

      <NavDropdown title="VENTIFLEX">
        
        <NavDropdown.Item>1</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>2</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>4</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>5</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>6</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>7</NavDropdown.Item>
  
      </NavDropdown>

    </Nav>

    </div>

    <div class="search-bar">
    <Form inline>
      <FormControl type="text" placeholder="" className="mr-sm-1 submit-button"/>
      <Button variant="light">🔍</Button>
    </Form>
    </div>

  </Navbar>

    </div>
  )
}

export default NavbarPage;