import React, { Component } from "react";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBTestimonial,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardUp,
  MDBAvatar,
  MDBBtn,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Quotes from "../../component/quotes";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      password: "",
      data: []
    };
  }

  setUsername = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  setPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  componentDidMount() {
    const self = this;
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };
    axios
      .get("http://api.alfaruqi.xyz/user", config)
      .then(response => {
        self.setState({ data: response.data });
        self.setState({
          username: response.data.username,
          email: response.data.email
        });
      })
      .catch(error => {
        console.log("error user_details", error);
      });
  }

  render() {
    console.log("woi", this.state.data.status);
    if (this.props.is_login === false) {
      return <Redirect to={{ pathname: "/" }} />;
    }
    if (this.state.data.status == false) {
      return (
        <MDBContainer>
          <section className="text-center my-5 animated rubberBand">
            <h3 className="h1-responsive font-weight-bold my-5">Profile</h3>

            <div>
              <div className="mx-auto mb-4">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png"
                  className="rounded-circle img-fluid"
                  style={{ height: "150px" }}
                />
              </div>
              <p>
                <MDBIcon icon="quote-left" /> <Quotes />
              </p>
              <h2 className="font-weight-bold">{this.state.username}</h2>
              <h3 className="font-weight-bold my-3">{this.state.email}</h3>
            </div>
            <div className="row justify-content-center">
              <Link to="/trans">
                <MDBBtn color="dark" style={{ width: "130px", height: "50px" }}>
                  History
                </MDBBtn>
              </Link>
            </div>
          </section>
        </MDBContainer>
      );
    } else {
      return (
        <MDBContainer>
          <section className="text-center my-5">
            <h3 className="h1-responsive font-weight-bold my-5">
              Profile Admin
            </h3>

            <div>
              <div className="mx-auto mb-4">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/users-6/100/654853-user-men-2-512.png"
                  className="rounded-circle img-fluid"
                  style={{ height: "180px" }}
                />
              </div>
              <p>
                <MDBIcon icon="quote-left" /> <Quotes />
              </p>
              <h2 className="font-weight-bold">{this.state.username}</h2>
              <h3 className="font-weight-bold my-3">{this.state.email}</h3>
              <Link to={"/add"}>
                <MDBBtn
                  color="dark"
                  className="align-center"
                  variant="success"
                  style={{ width: "120px", height: "50px" }}
                >
                  Tambah Barang
                </MDBBtn>
              </Link>
            </div>
          </section>
        </MDBContainer>
      );
    }
  }
}

export default connect(
  "is_login, token",
  actions
)(Profile);
