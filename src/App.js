import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import { HashLink } from 'react-router-hash-link';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#000000" }}>
        <div className="container-fluid">
          <a href="https://felix-chow.netlify.app/" rel="home"><img alt="" style={{marginLeft: "100px"}} width="52" height="52" src="../images/Black-Pink-Bold-Elegant-Monogram-Personal-Brand-Logo-1-e1681776583474.png" alt=""/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarWithDropdown" aria-controls="navbarWithDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="d-flex justify-content-end collapse navbar-collapse show" id="navbarWithDropdown">
            <ul className="navbar-nav">
              <li className="nav-item" style={{ marginRight: 50 }}>
                <HashLink smooth to={"/#home"} className="nav-link m-2" style={{ color: "white" }}>
                  Home
                </HashLink>
              </li>
              <li className="nav-item dropdown m-2">
                <Link className="nav-link dropdown-toggle" style={{ marginRight: 150, color: "white" }} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Projects
                </Link>
                <ul className="dropdown-menu" style={{ backgroundColor: "#000000" }} aria-labelledby="navbarDropdownMenuLink">
                  <li><HashLink className="dropdown-item" smooth to={"/#ecommerce"} style={{ color: "white" }}>
                    E-commerce Web Development
                  </HashLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <Projects />
    </>
  );
}

export default App;
