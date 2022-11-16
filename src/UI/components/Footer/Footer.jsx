import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Nav from "react-bootstrap/Nav";
import "./Footer.css";
import ScrollToTop from "react-scroll-to-top";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="p-3 mt-3">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-4">
            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footerlogo">
                Teach Me
              </h6>
              <p>
                <a href="#" className="text-reset footerlinks">
                  About
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerlinks">
                  Press
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerlinks">
                  Team
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerlinks">
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Explore</h6>
              <p>
                <a href="#" className="text-reset footerlinks">
                  Browse Courses
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerlinks">
                  Popular Courses
                </a>
              </p>
              <p>
                <a href="#" className="text-reset footerlinks">
                  Instructors
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset footerlinks">
                  Subscription Plans
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
      >
        <span>© 2022 TeachMe.net</span>

        <Nav.Item>
          <Nav.Link eventKey="link-1">Privacy policy</Nav.Link>
        </Nav.Item>

        <span>
          <a className="text-reset fw-bold" href="#">
            Help Center
          </a>
        </span>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>

          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <ScrollToTop smooth color="black" />
        </div>
      </section>
    </MDBFooter>
  );
}
