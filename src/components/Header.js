import React from 'react';
import './news.css';
import { Button,Navbar,Nav,Form,FormControl} from 'react-bootstrap';


const Header=()=>{
    return(
 <> 
  <Navbar className="nav" bg="light" variant="dark">
    <Navbar.Brand href="#home">NEWS-WEB</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link  href="/">Home</Nav.Link>
      <Nav.Link  href="/Search">Search</Nav.Link>
      <Nav.Link  href="/Entertainment">Entertainment</Nav.Link>
      <Nav.Link  href="/Sports">Sports</Nav.Link>
      <Nav.Link  href="/Business">Business</Nav.Link>
      <Nav.Link  href="/Health">Health</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2"  />
      <Button variant="outline-primary" >Search</Button>
    </Form>
  </Navbar>
</>
    );
}
export default Header;