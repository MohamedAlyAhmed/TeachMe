import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import "./Footer.css"
export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 footerlogo'>
Teach Me
              </h6>
              <p>
                <a href='#' className='text-reset footerlinks'>
                  About
                </a>
              </p>
              <p>
                <a  href='#' className='text-reset footerlinks'>
                  Press
                </a>
              </p>
              <p>
                <a href='#' className='text-reset footerlinks'>
                  Team
                </a>
              </p>
              <p>
                <a href='#' className='text-reset footerlinks'>
                  Contact
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Explore</h6>
              <p>
                <a href='#' className='text-reset footerlinks'>
                  Browse Courses
                </a>
              </p>
              <p>
                <a href='#' className='text-reset footerlinks'>
                  Popular Courses
                </a>
              </p>
              <p>
                <a href='#' className='text-reset footerlinks'>
                  Instructors
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset footerlinks'>
                  Subscription Plans
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Buisness</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Become an instructor
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <section  style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
     
 <span>© 2022 TeachMe.net</span>
 
      <Nav.Item>
        <Nav.Link eventKey="link-1">Privacy policy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Terms of use</Nav.Link>
      </Nav.Item>
        <span> <a className='text-reset fw-bold' href='#'>
       Help Center
        </a></span>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
     
    </MDBFooter>
  );
}