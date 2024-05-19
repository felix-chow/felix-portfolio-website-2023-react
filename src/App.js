import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Ensure to import your custom CSS
import Home from './components/Home';
import Projects from './components/Projects';
import { ViewportProvider } from './components/ViewportProvider';

const App = () => {
  return (
    <ViewportProvider>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="custom-navbar">
          <Container>
            <Navbar.Brand href="https://felix-chow.netlify.app/">
              <img
                alt="Logo"
                src="../images/Black-Pink-Bold-Elegant-Monogram-Personal-Brand-Logo-1-e1681776583474.png"
                width="52"
                height="52"
                className="d-inline-block align-top"
                style={{ marginLeft: "100px" }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto"> {/* Use ms-auto for proper alignment */}
                <Nav.Link as={HashLink} smooth to="/#home" style={{ color: 'white' }}>
                  Home
                </Nav.Link>
                <NavDropdown title={<span style={{ color: 'white' }}>Projects</span>} id="navbarScrollingDropdown" className="custom-nav-dropdown">
                  <NavDropdown.Item as={HashLink} smooth to="/#web-dev" style={{ backgroundColor: 'black', color: 'white' }}>
                    Web Development
                  </NavDropdown.Item>
                  <NavDropdown.Item as={HashLink} smooth to="/#ecommerce" style={{ backgroundColor: 'black', color: 'white' }}>
                    E-commerce Web Development
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}

export default App;
