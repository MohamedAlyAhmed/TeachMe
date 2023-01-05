import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./nav_Bar.css";
import MyButton from "../Button/Button";
import { DataContext } from "../../../DataContext";


const Header = (props) => {
  const { categories } = useContext(DataContext);
  const BASE_CATEGORY = "/category";
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
        <Link to={`/`}>
          <p className="logo mx-4">
            Teach <span>Me</span>
          </p>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* instructor Button */}
            <Link
              to={`instructors`}
              style={{
                textDecoration: "none",
                color: "black",
                marginLeft: "1rem",
              }}
            >
              <Button variant="">Instructors</Button>
            </Link>
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
                    <Link
                      key={index}
                      to={`${BASE_CATEGORY}/${e.permanentLink}`}
                      className="sub-menu-link"
                    >
                      <p>{e.name}</p>
                    </Link>
                  ))}
                  <Link to={`${BASE_CATEGORY}`}>
                    <MyButton>
                      Browse Courses &nbsp;
                      <i className="fa-solid fa-arrow-right"></i>
                    </MyButton>
                  </Link>
                </div>
              </div>
            </div>
            {userData ? (
              userData.email == "teachme@gmail.com" ? (
                <Link to={`/dashboard/home`}>
                  <MyButton isOutline={true}>DASHBOARD</MyButton>
                </Link>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </Nav>
          {/* search icon */}
          <Link to={`${BASE_CATEGORY}`} style={{ marginRight: "1rem" }}>
            <i className="fa fa-search icon-search"></i>
          </Link>
          {/* if user login */}
          {userData ? (
            <>
              <Button onClick={toggleProfile} className="user-pic" variant="">
                <img
                  src={`https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg`}
                  alt=""
                  className="avatar"
                />
              </Button>

              <div className="sub-profile-wrap" id="subProfileMenu">
                <div className="user-profile-menu-container mat-menu-panel">
                  <div className="user-profile-container">
                    <div className="user-info-card d-flex">
                      <div className="profile-avatar">
                        <Link to={`/profile/Personal`}>
                          <img
                            src={`https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg`}
                            className="avatar"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="info-details">
                        <Link to={`/profile/Personal`}>
                          <h6>
                            {userData.first_name} {userData.last_name}
                          </h6>
                          <p>{userData.email}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="user-profile-subscribed ng-star-inserted">
                    <Link to="/profile/Personal">
                      <button className="btn btn-outline-light user-profile-subscribe-btn">
                        Go To Profile Page
                      </button>
                    </Link>
                  </div>
                  <div className="user-profile-card__options-menu-list-container">
                    <div className="user-profile-card__user-options-menu-list">
                      <Link
                        className="user-profile-card__user-option-item"
                        to="/my-progress"
                      >
                        <i className="fa-regular fa-circle-play"></i>
                        <p>My Progress</p>
                      </Link>
                      <Link
                        className="user-profile-card__user-option-item"
                        to="/saved-list"
                      >
                        <i className="fa-regular fa-bookmark"></i>
                        <p>Saved Courses</p>
                      </Link>

                      <Link
                        className="user-profile-card__user-option-item"
                        to="/my-certificates"
                      >
                        <i className="fa-solid fa-certificate"></i>
                        <p>Certificates</p>
                      </Link>
                      <Link
                        className="user-profile-card__user-option-item "
                        to="/profile/Personal"
                      >
                        <i className="fa-solid fa-gear"></i>
                        <p>Account settings</p>
                      </Link>
                      <Link
                        className="user-profile-card__user-option-item "
                        to="/"
                      >
                        <i className="fa-solid fa-comments"></i>
                        <p>Messages</p>
                      </Link>
                    </div>
                    <Link className="user-profile-card__purchase-log user-profile-card__user-option-item ">
                      <i className="fa-solid fa-clipboard"></i>
                      <p> Purchase Log </p>
                    </Link>
                  </div>
                  <div className="btn-logout ">
                    <Link
                      className="btn btn-link user-profile-card__user-option-item user-profile-card__btn-logout"
                      onClick={LogOut}
                    >
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <p>Logout</p>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            // if user not login
            <>
              <Button variant="link">
                <Link to="/login" className="loginlink">
                  Login
                </Link>
              </Button>

              <Link style={{ marginRight: "1rem" }} to="/register">
                <MyButton isOutline={false}>sign up</MyButton>
              </Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
