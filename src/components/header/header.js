import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { CollectionsBookmarkRounded } from '@mui/icons-material';




 function header(){

    return (
        <>
        {/* <Nav className="justify-content-center" activeKey="/home" >
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav> */}
  {/* nav */}






{/* image slider */}

        <Carousel>
        <Carousel.Item>
        <img className="d-block w-100" src='./images/tutorlogo.jpg' alt="First slide" />
        <Carousel.Caption>
            <h3>Learn well</h3>
            <p>Tutor will provide variety of courses to follow</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src='./images/lms.jpg'
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>E learning</h3>
            <p>E learning platform with better features.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src='./images/1.jpg'
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Tutor</h3>
            <p>Learn smart not hard</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>

       
       {/* cards */}
        <CardGroup className="justify-content-center">
  <Card>
    <Card.Img variant="top" src="./images/chloe.jpg" />
    <Card.Body>
      <Card.Title>Jef nickerson</Card.Title>
      <Card.Text> 
       BSc.Higher mathematics
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/jef.jpg" />
    <Card.Body>
      <Card.Title>chole perera</Card.Title>
      <Card.Text>
        BSc.Mechanical Engineering{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/melo.jpg" />
    <Card.Body>
      <Card.Title>Melo aang</Card.Title>
      <Card.Text>
        BSc.Quantom physics
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="./images/niti.jpg" />
    <Card.Body>
      <Card.Title>Niti Jakcson</Card.Title>
      <Card.Text>
        BA. Music and literature
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup> 


    <MDBFooter color="#" className="font-small pt-4 mt-4" fixed="bottom">
      <MDBContainer fluid className="text-center text-md-left">
  {/*
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
  */}
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#"> Tutor.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>


        </>
    )
}

export default header;
