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

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nama: "",
      detail: "",
      url: "",
      harga: 0,
      total: 0
    };
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

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

  changeHandle = e => {
    this.props.setJumlah(e.target.value);
  };

  doEdit = async e => {
    e.preventDefault();
    // console.log("doregister", this.state);
    const self = this;
    axios
      .put(
        "http://api.alfaruqi.xyz/item/" +
          String(self.props.match.params.item_id),
        {
          nama: self.state.nama,
          detail: self.state.detail,
          url: self.state.url,
          harga: self.state.harga,
          total: self.state.total
        }
      )
      .then(function(response) {})
      .catch(function(error) {
        console.log("eror edit", error);
      });
    alert("Anda sudah mengedit barang!");
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn color="primary" onClick={this.toggle(14)}>
          Edit
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="10">
                  <form>
                    <p className="h5 text-center mb-4">Edit Item</p>
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
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <div className="text-center">
              <MDBBtn
                onClick={e => {
                  this.doEdit(e);
                }}
                isOpen={this.state.modal14}
                color="primary"
              >
                Edit
              </MDBBtn>
            </div>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default EditItem;
