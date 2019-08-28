import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn
} from "mdbreact";
import SignIn from "../signin/SignIn";
import SignUp from "../signup/signup";
import { connect } from "unistore/react";
import { actions } from "../../store";
import Tentang from "../../component/tentangkita";

const Intro = props => {
  console.log(props.is_login);
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView
                hover
                cascade
                waves
                className="text-center animated flash"
              >
                <img
                  src="http://images4.fanpop.com/image/photos/23700000/Sharing-is-Caring-sam-winchester-23785964-900-700.jpg"
                  style={{ width: "100%", height: "300px" }}
                  alt=""
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h1 className="font-weight-bold" style={{ color: "#ffffff" }}>
                  <a style={{ color: "#000000" }} href="#!">
                    Berbagi
                  </a>
                </h1>
                <p>est 18/08/2019</p>
                <div className="row justify-content-center">
                  <div className="col-md6">
                    <SignIn />
                  </div>
                  <div className="col-md6">
                    <SignUp />
                  </div>
                  <br />
                  <Tentang />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
};

export default connect(
  "is_login",
  actions
)(Intro);
