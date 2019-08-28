import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Media from "./media";

const Footer = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="justify-content-center">
          <MDBCol md="12"></MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <h1 className="title">B E R B A G I</h1>
          <Media />
          <br />
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> Berbagi.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
