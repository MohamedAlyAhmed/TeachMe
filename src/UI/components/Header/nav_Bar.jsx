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
  const BASE_CATEGORY = 'http://localhost:4000/category';
  // const navegator = useNavigate();

  const toggleMenus = () => {
    let subMenu = document.getElementById("subMenu");

    subMenu.classList.toggle("open-menu");
  };

  const toggleProfile = () => {
    let subProfileMenu = document.getElementById("subProfileMenu");
    subProfileMenu.classList.toggle("open-menu")
  }

  return (
    <Navbar bg="#fff" expand="lg">
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <a href="http://localhost:4000/"> <p className="logo">
          Teach <span>Me</span>&nbsp;&nbsp;&nbsp;
        </p></a>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <a href="/instructors" style={{ color: "black", textDecoration : "none" }}>
              <Button variant="">Instructors</Button>
            </a>&nbsp;
            
            <div >
              <Button onClick={toggleMenus} className="user-pic" variant="">
                Courses &nbsp;
                <i class="fa-solid fa-angle-down"></i>
              </Button>&nbsp;&nbsp;&nbsp;&nbsp;

              <div className="sub-menu-wrap " id="subMenu">
                <div className="sub-menu shadow">
                  <div className="header">
                    <h3>Categories</h3>
                  </div>
                  <a href={`${BASE_CATEGORY}/Languages`} className="sub-menu-link">
                    <p>Languages</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Arts-&-Design`} className="sub-menu-link">
                    <p>Arts & Design</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Soft-Skills`} className="sub-menu-link">
                    <p>Soft Skills</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Media,-Photography-&-Film`} className="sub-menu-link">
                    <p>Medis, Phogrphy & Film</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Business-Management`} className="sub-menu-link">
                    <p>Business Management</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Sales-&-Marketing`} className="sub-menu-link">
                    <p>Sales & Marketing</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Technology,-Science-&-Productivity`} className="sub-menu-link">

                    <p>Technology, Science & Productivity</p>

                  </a>
                  <a href={`${BASE_CATEGORY}/Parenting-&-Relationships`} className="sub-menu-link">
                    <p>Parenting & Relationships</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Kids-Development`} className="sub-menu-link">
                    <p>Kids Development</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Lifestyle-&-Health`} className="sub-menu-link">
                    <p>Lifestyle & Health</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Entrepreneurship`} className="sub-menu-link">
                    <p>Entrepreneurship</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Mental-Health-&-Wellness`} className="sub-menu-link">
                    <p>Mental Health & Wellness</p>
                  </a>
                  <a href={`${BASE_CATEGORY}/Education`} className="sub-menu-link">
                    <p>Education</p>
                  </a>
                  <a href={`${BASE_CATEGORY}`}>
                  <MyButton>
                    Browse Courses &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                  </MyButton>
                  </a>
                </div>
              </div>
            </div>

            {/* <MyButton isOutline={true}>Subscribe</MyButton> */}
            <a href="#">
              <MyButton isOutline={true}>Subscribe</MyButton>
            </a>&nbsp;
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
                <div className="user-profile-menu-container mat-menu-panel">

                  <div className="user-profile-container">
                    <div className="user-info-card d-flex">
                      <div className="profile-avatar">
                        <img src="assets/default-avatar.jpg" className="avatar" alt="" />
                      </div>
                      <div className="info-details">
                        <h6>{props.userData.first_name} {props.userData.last_name}</h6>
                        <p>{props.userData.email}</p>
                      </div>

                    </div>
                  </div>
                  <div className="user-profile-subscribed ng-star-inserted">
                    <button routerlink="" className="btn btn-outline-light user-profile-subscribe-btn" >
                      Subscribe
                    </button>
                  </div>
                  <div class="user-profile-card__options-menu-list-container">
                  <div class="user-profile-card__user-options-menu-list">
                    <a class="user-profile-card__user-option-item" href="">
                      <i class="fa-regular fa-circle-play"></i>
                      <p>My Progress</p>
                    </a>
                    <a class="user-profile-card__user-option-item" href="">
                      <i class="fa-regular fa-bookmark"></i>
                      <p >Saved Courses</p>
                    </a>

                    <a class="user-profile-card__user-option-item" href="">
                      <i class="fa-solid fa-certificate"></i>
                      <p >Certificates</p>
                    </a>
                    <a class="user-profile-card__user-option-item " href="">
                      <i class="fa-solid fa-gear"></i>
                      <p >Account settings</p>
                    </a>
                    <a class="user-profile-card__user-option-item " href="">
                      <i class="fa-solid fa-comments"></i>
                      <p >Messages</p>

                    </a>
                  </div>
                  <a class="user-profile-card__purchase-log user-profile-card__user-option-item " href="">
                    <i class="fa-solid fa-clipboard"></i>
                    <p> Purchase Log </p>
                  </a>
                </div>
                <div className="btn-logout ">
                  <a class="btn btn-link user-profile-card__user-option-item user-profile-card__btn-logout" onClick={props.LogOut}>
                    <i class="fa-solid fa-right-from-bracket"></i>
                    <p>Logout</p>
                  </a>
                </div>
                </div>
                
              </div>
              
                </>
        ) : (
        <>
          <Button variant="link" >
            <a href="/login" className="loginlink">Login</a>
          </Button>

          <a href="/register">
            <MyButton isOutline={false}>sign up</MyButton>
          </a>
        </>
          )}
      </Navbar.Collapse>
    </Container>
    </Navbar >
        );
};

export default Header;
