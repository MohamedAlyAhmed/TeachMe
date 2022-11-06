import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./nav_Bar.css";
import MyButton from "../Button/Button";

const Header = () => {
  // const navegator = useNavigate();

  const toggleMenus = () => {
    let subMenu = document.getElementById("subMenu");

    subMenu.classList.toggle("open-menu");
  };

  return (
    <Navbar bg="#fff" expand="lg">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
       
        <p className="logo">Teach <span>Me</span></p>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a href="/instructorsPage">
                       <Button variant="">Instructors</Button>


            
          </a>
            <div>
              <Button onClick={toggleMenus} className="user-pic" variant="">
                Courses &nbsp;
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
                     
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Arts & Design</p>
                    
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Soft Skills</p>
                     
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Medis, Phogrphy & Film</p>
                     
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Business Management</p>
                      
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Sales & Marketing</p>
                      
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Technology, Science & Productivity</p>
                      {/* <span>
                        <i className="fa-solid fa-angle-right"></i>
                      </span> */}
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Parenting & Relationships</p>
                      
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Kids Development</p>
                      
                    </div>
                  </a>
                  <MyButton >
                    Browse Courses &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                  </MyButton>
                </div>
              </div>
            </div>

            <MyButton  isOutline={true} >
            Subscribe
            </MyButton>
          </Nav>

          <form className="form">
            <div className="main">
              <input
                type="text"
                name=""
                placeholder="search courses ,topics .."
              />
              <a href="#">
                <i className="fa fa-search icon-search"></i>
              </a>
            </div>
          </form>
          <Button variant="link">Login</Button>
        
          <a href="/login">
            <MyButton  isOutline={false}>
            sign up

            </MyButton>
          </a>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
