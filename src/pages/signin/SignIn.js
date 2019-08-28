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
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter, Link, Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      password: ""
    };
    this.doLogin = this.doLogin.bind(this);
  }

  setUsername = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  setPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  setToken = e => {
    e.preventDefault();
    this.setState({ token: e.target.value });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  doLogin = async e => {
    const self = this;
    axios
      .post("http://api.alfaruqi.xyz/auth", {
        username: self.state.username,
        password: self.state.password
      })
      .then(function(response) {
        self.props.setLogin(true);
        self.props.setToken(response.data.token);
        console.log(response.data.status);
        self.props.history.replace("/profile");
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
    alert("Selamat Datang Orang Baik!");
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="dark" onClick={this.toggle}>
          Sign In
        </MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="10">
                  <form>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Type your username"
                        group
                        type="text"
                        validate
                        onChange={this.setUsername}
                      />
                      <MDBInput
                        label="Type your password"
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
            <MDBBtn
              onClick={this.doLogin}
              isOpen={this.state.modal14}
              color="dark"
            >
              Login
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(SignIn));
