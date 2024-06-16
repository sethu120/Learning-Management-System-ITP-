import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavDropdown} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar className="justify-content-center" bg="light" expand="lg">
            <div className ="Container">
                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Courses" id="Courses">
                            <NavDropdown.Item href="/subject_activities">Subject Activities</NavDropdown.Item>
                            <NavDropdown.Item href="/create_activity">Create Activity</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Payment" id="Payment">
                            <NavDropdown.Item href="/Student_payment">Student Payment</NavDropdown.Item>
                            <NavDropdown.Item href="/StudentPaymetView">Student Payments</NavDropdown.Item>
                            <NavDropdown.Item href="/TeacherBankAccountList">Teacher Payment</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/advertisement">Advertisement</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <NavDropdown title="Registration" id="Registration">
                            <NavDropdown.Item href="/student_registration">Student Registration</NavDropdown.Item>
                            <NavDropdown.Item href="/teacher_registration">Teacher Registration</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavBar;
