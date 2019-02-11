import React from "react";
import { Company } from "../config";
import { Navbar } from "react-bootstrap";

const AppHeader = ({ userRole, userName }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">{Company.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#">
              {userName} {userRole === "manager" ? "(Manager)" : "(Biker)"}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default AppHeader;
