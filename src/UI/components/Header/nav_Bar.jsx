import React, { useContext } from "react";
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
import { DataContext } from "../../../DataContext";
import { useEffect } from "react";

const Header = (props) => {
  const { categories } = useContext(DataContext);
  const BASE_CATEGORY = "http://localhost:4000/category";
  const toggleMenus = () => {
    let subMenu = document.getElementById("subMenu");

    subMenu.classList.toggle("open-menu");
  };
  const { userData, LogOut } = useContext(DataContext);

  const toggleProfile = () => {
    let subProfileMenu = document.getElementById("subProfileMenu");
    subProfileMenu.classList.toggle("open-menu");
  };

  return (
    <Navbar bg="#fff" expand="lg">
      <Container
        fluid
        className="d-flex
         justify-content-between
          align-items-center"
      >
        {/* logo */}
        <a href="http://localhost:4000/">
          <p className="logo mx-4">
            Teach <span>Me</span>
          </p>
        </a>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* instructor Button */}
            <a
              href="/instructors"
              style={{
                color: "black",
                textDecoration: "none",
                marginLeft: "1rem",
              }}
            >
              <Button variant="">Instructors</Button>
            </a>

            {/* courses list */}
            <div>
              <Button
                onClick={toggleMenus}
                className="us er-pic "
                variant=""
                style={{ marginRight: "1rem", marginLeft: "1rem" }}
              >
                Courses
                <i className="fa-solid fa-angle-down ms-1"></i>
              </Button>
              {/* &nbsp;&nbsp;&nbsp;&nbsp; */}
              <div className="sub-menu-wrap " id="subMenu">
                <div className="sub-menu shadow">
                  <div className="header">
                    <h3>Categories</h3>
                  </div>

                  {/* Get Categories Links */}
                  {categories.map((e, index) => (
                    <a
                      key={index}
                      href={`${BASE_CATEGORY}/${e.permanentLink}`}
                      className="sub-menu-link"
                    >
                      <p>{e.name}</p>
                    </a>
                  ))}
                  <a href={`${BASE_CATEGORY}`}>
                    <MyButton>
                      Browse Courses &nbsp;
                      <i className="fa-solid fa-arrow-right"></i>
                    </MyButton>
                  </a>
                </div>
              </div>
            </div>
            {userData ? (
              userData.email == "teachme@gmail.com" ? (
                <a href="http://localhost:4000/dashboard/home">
                  <MyButton isOutline={true}>DASHBOARD</MyButton>
                </a>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Nav>
          {/* search icon */}
          <a href={`${BASE_CATEGORY}`} style={{ marginRight: "1rem" }}>
            <i className="fa fa-search icon-search"></i>
          </a>
          {/* if user login */}
          {userData ? (
            <>
              <Button onClick={toggleProfile} className="user-pic" variant="">
                <img
                  src="/assets/default-avatar.jpg"
                  alt=""
                  className="avatar"
                />
              </Button>

              <div className="sub-profile-wrap" id="subProfileMenu">
                <div className="user-profile-menu-container mat-menu-panel">
                  <div className="user-profile-container">
                    <div className="user-info-card d-flex">
                      <div className="profile-avatar">
                        <a href="/profile/Personal">
                          <img
                            src="/assets/default-avatar.jpg"
                            className="avatar"
                            alt=""
                          />
                        </a>
                      </div>

                      <div className="info-details">
                        <a href="/profile/Personal">
                          <h6>
                            {userData.first_name} {userData.last_name}
                          </h6>
                          <p>{userData.email}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="user-profile-subscribed ng-star-inserted">
                    <a href="/profile/Personal">
                      <button className="btn btn-outline-light user-profile-subscribe-btn">
                        Go To Profile Page
                      </button>
                    </a>
                  </div>
                  <div className="user-profile-card__options-menu-list-container">
                    <div className="user-profile-card__user-options-menu-list">
                      <a
                        className="user-profile-card__user-option-item"
                        href="/my-progress"
                      >
                        <i className="fa-regular fa-circle-play"></i>
                        <p>My Progress</p>
                      </a>
                      <a
                        className="user-profile-card__user-option-item"
                        href="/saved-list"
                      >
                        <i className="fa-regular fa-bookmark"></i>
                        <p>Saved Courses</p>
                      </a>

                      <a
                        className="user-profile-card__user-option-item"
                        href="/my-certificates"
                      >
                        <i className="fa-solid fa-certificate"></i>
                        <p>Certificates</p>
                      </a>
                      <a
                        className="user-profile-card__user-option-item "
                        href="/profile/Personal"
                      >
                        <i className="fa-solid fa-gear"></i>
                        <p>Account settings</p>
                      </a>
                      <a
                        className="user-profile-card__user-option-item "
                        href="/"
                      >
                        <i className="fa-solid fa-comments"></i>
                        <p>Messages</p>
                      </a>
                    </div>
                    <a
                      className="user-profile-card__purchase-log user-profile-card__user-option-item "
                      href=""
                    >
                      <i className="fa-solid fa-clipboard"></i>
                      <p> Purchase Log </p>
                    </a>
                  </div>
                  <div className="btn-logout ">
                    <a
                      className="btn btn-link user-profile-card__user-option-item user-profile-card__btn-logout"
                      onClick={LogOut}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <p>Logout</p>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // if user not login
            <>
              <Button variant="link">
                <a href="/login" className="loginlink">
                  Login
                </a>
              </Button>

              <a style={{ marginRight: "1rem" }} href="/register">
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
