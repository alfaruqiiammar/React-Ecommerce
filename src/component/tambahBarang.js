import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
import axios from "axios";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      detail: "",
      url: "",
      harga: 0,
      total: 0
    };
  }

  setNama = e => {
    e.preventDefault();
    this.setState({ nama: e.target.value });
  };

  setDetail = e => {
    e.preventDefault();
    this.setState({ detail: e.target.value });
  };

  setFotoItem = e => {
    e.preventDefault();
    this.setState({ url: e.target.value });
  };

  setHarga = e => {
    e.preventDefault();
    this.setState({ harga: e.target.value });
  };

  setTotal = e => {
    e.preventDefault();
    this.setState({ total: e.target.value });
  };

  doAddItem = async e => {
    e.preventDefault();
    const self = this;
    axios
      .post("http://api.alfaruqi.xyz/item", {
        nama: self.state.nama,
        detail: self.state.detail,
        url: self.state.url,
        harga: self.state.harga,
        total: self.state.total
      })
      .then(function(response) {
        self.props.history.push("/home");
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
    alert("Anda sudah menambah barang, yuk SignIn!");
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow className="justify-content-center pt-5">
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="spinner" /> Add Item:
                  </h3>
                </MDBCardHeader>
                <form>
                  <div className="grey-text">
                    <MDBInput
                      label="Nama Barang"
                      icon=""
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.setNama}
                    />
                    <MDBInput
                      label="Detail Barang"
                      icon=""
                      group
                      type="text"
                      validate
                      onChange={this.setDetail}
                    />
                    <MDBInput
                      label="Foto Barang"
                      icon=""
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.setFotoItem}
                    />
                    <MDBInput
                      label="Harga Barang"
                      icon=""
                      group
                      type="text"
                      validate
                      onChange={this.setHarga}
                    />
                    <MDBInput
                      label="Total Barang"
                      icon=""
                      group
                      type="text"
                      validate
                      onChange={this.setTotal}
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn
                      onClick={e => {
                        this.doAddItem(e);
                      }}
                      color="light-blue"
                      className="mb-3"
                      type="submit"
                    >
                      Add
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default AddItem;
