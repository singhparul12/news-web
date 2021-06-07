import React, { useState } from "react";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-3 ">
        <Navbar.Brand href="/">
          React<i className="bi bi-lightning"></i>News
          <span className="ring-container">
            <span className="ringring"></span>
            <span className="circle"></span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="  mr-auto">
            <Nav.Link href="/">
              <span className="ln ">Trending</span>
            </Nav.Link>

            <Nav.Link href="/Entertainment">
              <span className="ln">Entertainment</span>
            </Nav.Link>
            <Nav.Link href="/Technology">
              <span className="ln">Technology</span>
            </Nav.Link>
            <Nav.Link href="/Sports">
              <span className="ln">Sports</span>
            </Nav.Link>
            <Nav.Link href="/Business">
              <span className="ln">Business</span>
            </Nav.Link>
            <Nav.Link href="/Health">
              <span className="ln">Health</span>
            </Nav.Link>
          </Nav>

          <input
            className="form-control ms-lg-5 me-1 my-1 input"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Link
            to={search ? `/Search/${search}` : ""}
            className="btn btn-outline-light my-2 my-sm-0 mr-5"
            type="submit"
          >
            <i className="bi bi-search fs-5"></i>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Header;
{
  /* <Navbar className="nav" bg="light" variant="dark">
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
</Navbar>*/
}
