import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Servises from "./Pages/Servises";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Logo from "./img/Logo.png";
export default function App() {
  return (
    <div className="col-12">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="">
              <img
                className="offcanvas-title "
                id="offcanvasNavbarLabel"
                width={"180px"}
                src={Logo}
              />
            </Link>
            {/* toggle btn */}
            <button
              className="navbar-toggler shadow-none border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {/* side bar  */}
            <div
              className="sideBar bg-dark offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasNavbarLabel"
                  width={"200px"}
                  src={Logo}
                />
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              {/* links */}
              <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-1">
                <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3 gap-3">
                  <li>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="About">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="Servises">
                      Servises
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="Contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gab-3">
                  <li>
                    <Link
                      className=" text-decoration-none "
                      to="Login"
                    >
                      <button className="signUp">Login</button>
                    </Link>
                  </li>
                  <li className="signUpbtn">
                    <Link
                      className="text-decoration-none"
                      to="Register"
                    >
                      <button className="signUp">Sign Up</button>
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Servises" element={<Servises />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />
            <Route path="*" element={<h1>eror 404</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
