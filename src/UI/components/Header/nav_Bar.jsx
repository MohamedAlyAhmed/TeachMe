import React,{ Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav_Bar.css";
class Header extends Component {
  toggleMenus = () => {
    let subMenu = document.getElementById("subMenu");

    subMenu.classList.toggle("open-menu");
  };
  render() {
    return (
      <Navbar bg="#fff" expand="lg">
        <Container fluid>
          <Navbar.Brand className="ms-4" href="#">
            <img
              alt=""
              height="50"
              width="90"
              src="data:image/png;base64,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"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Button variant="">Instructors</Button>
              <div>

                <Button
                  onClick={this.toggleMenus}
                  className="user-pic"
                  variant=""
                >
                  Courses
                  &nbsp;
                  <i class="fa-solid fa-angle-down"></i>

                </Button>

                <div className="sub-menu-wrap" id="subMenu">
                  <div className="sub-menu">
                    <div className="user-info">
                      <h3>Categories</h3>
                    </div>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Languages</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Arts & Design</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Soft Skills</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Medis, Phogrphy & Film</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Business Management</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Sales & Marketing</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Technology, Science & Productivity</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Parenting & Relationships</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <a href="#" className="sub-menu-link">
                      <div className="ss">
                        <p>Kids Development</p>
                        <span>
                          <i class="fa-solid fa-angle-right"></i>
                        </span>
                      </div>
                    </a>
                    <Button variant="danger">Browse Courses
                    &nbsp;

                    <i class="fa-solid fa-arrow-right"></i>        
                                                 </Button>
                  </div>
                </div>
              </div>
              <Button  className="ms-4 ss" variant="outline-danger">
                Subscribe
              </Button>
            </Nav>

            <form className="form">
              <div class="main">
                <input
                  type="text"
                  name=""
                  placeholder="search courses ,topics .."
                />
                <a href="#">
                  <i class="fa fa-search icon-search"></i>
                </a>
              </div>
            </form>
            <Button variant="link">Login</Button>
            <style type="text/css">
              {`
      .btn-flat {
        background-color: #D31616;
        color: white;
      }
  
      .btn-xxl {
        padding: 1rem 1.5rem;
        font-size: 1.5rem;
      }
      `}
            </style>
            <Button className="me-4" variant="flat">
              Sign Up
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
