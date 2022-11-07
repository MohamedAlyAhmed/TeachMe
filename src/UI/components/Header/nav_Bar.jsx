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

const Header = (props) => {
  // const navegator = useNavigate();

  const toggleMenus = () => {
    let subMenu = document.getElementById("subMenu");

    subMenu.classList.toggle("open-menu");
  };

  const toggleProfile = () => {
    let subProfileMenu = document.getElementById("subProfileMenu");
    subProfileMenu.classList.toggle("open-menu");
  };

  return (
    <Navbar bg="#fff" expand="lg">
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <p className="logo">
          Teach <span>Me</span>&nbsp;&nbsp;&nbsp;
        </p>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a href="/instructors">
              <Button variant="">Instructors</Button>
            </a>&nbsp;
            <div>
              <Button onClick={toggleMenus} className="user-pic" variant="">
                Courses &nbsp;
                <i class="fa-solid fa-angle-down"></i>
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;

              <div className="sub-menu-wrap" id="subMenu">
                <div className="sub-menu">
                  <div className="header">
                    <h3>Categories</h3>
                  </div>
                  <a href="#" className="sub-menu-link">
                       <p>Languages</p>
                   </a>
                  <a href="#" className="sub-menu-link">
                       <p>Arts & Design</p>
                   </a>
                  <a href="#" className="sub-menu-link">
                       <p>Soft Skills</p>
                   </a>
                  <a href="#" className="sub-menu-link">
                       <p>Medis, Phogrphy & Film</p>
                   </a>
                  <a href="#" className="sub-menu-link">
                      <p>Business Management</p>
                  </a>
                  <a href="#" className="sub-menu-link">
                      <p>Sales & Marketing</p>
                  </a>
                  <a href="#" className="sub-menu-link">
                    
                      <p>Technology, Science & Productivity</p>
              
                  </a>
                  <a href="#" className="sub-menu-link">
                      <p>Parenting & Relationships</p>
                  </a>
                  <a href="#" className="sub-menu-link">
                      <p>Kids Development</p>
                  </a>
                  <MyButton>
                    Browse Courses &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                  </MyButton>
                </div>
              </div>
            </div>

            <MyButton isOutline={true}>Subscribe</MyButton>
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
          {props.userData ? (
            <>
              <Button onClick={toggleProfile} className="user-pic" variant="">
                <img
                  src="assets/default-avatar.jpg"
                  alt=""
                  className="avatar"
                />
              </Button>
              <div className="sub-profile-wrap" id="subProfileMenu">
                <div className="sub-menu">
                  <div className="user-info">
                    <h3>ahmed hamdy</h3>
                  </div>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>My Progress</p>
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Saved Courses</p>
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Certificates</p>
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Account setting</p>
                    </div>
                  </a>
                  <a href="#" className="sub-menu-link">
                    <div className="ss">
                      <p>Messages</p>
                    </div>
                  </a>
                  <a href="/">
                    <MyButton isOutline={false} onClick={props.LogOut}>
                      Logout
                    </MyButton>
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <Button variant="link">
                <a href="/login">Login</a>
              </Button>

              <a href="/register">
                <MyButton isOutline={false}>sign up</MyButton>
              </a>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
