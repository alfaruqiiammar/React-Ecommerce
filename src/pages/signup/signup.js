import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdbreact";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      email: "",
      password: "",
      status: false
    };
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  setUsername = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  setEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  setStatus = e => {
    e.preventDefault();
    this.setState({ status: e.target.value });
  };

  doRegister = async e => {
    e.preventDefault();
    const self = this;
    axios
      .post("http://api.alfaruqi.xyz/user", {
        username: self.state.username,
        email: self.state.email,
        password: self.state.password,
        status: false
      })
      .then(function(response) {
        this.props.history.push("/");
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
    alert("Anda sudah terdaftar, yuk SignIn!");
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="dark" onClick={this.toggle(14)}>
          SignUp
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="10">
                  <form>
                    <p className="h5 text-center mb-4">Sign up</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Your name"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.setUsername}
                      />
                      <MDBInput
                        label="Your email"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.setEmail}
                      />
                      <MDBInput
                        label="Your password"
                        group
                        type="password"
                        validate
                        onChange={this.setPassword}
                      />
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <div className="text-center">
              <MDBBtn
                onClick={e => {
                  this.doRegister(e);
                }}
                isOpen={this.state.modal14}
                color="dark"
              >
                Register
              </MDBBtn>
            </div>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default SignUp;
