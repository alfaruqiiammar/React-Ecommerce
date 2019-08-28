import React from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import Jumlah from "../../component/jumlah";
import Total from "../../component/totalharga";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBModal,
  MDBModalBody,
  MDBBtn,
  MDBInput
} from "mdbreact";
import EditItem from "../../component/edititem";

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      data: [],
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

  componentDidMount() {
    const total = this.props.jum;
    const self = this;
    axios
      .get("http://api.alfaruqi.xyz/item/" + self.props.match.params.item_id)
      .then(function(response) {
        self.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };
    axios
      .get("http://api.alfaruqi.xyz/user", config)
      .then(response => {
        self.setState({ user: response.data });
        self.setState({
          username: response.data.username,
          email: response.data.email
        });
      })
      .catch(error => {
        console.log("error user_details", error);
      });
  }

  doDelete = async e => {
    e.preventDefault();
    const self = this;
    axios
      .delete("http://api.alfaruqi.xyz/item/" + self.props.match.params.item_id)
      .then(function(response) {
        self.props.history.push("/home");
      })
      .catch(function(error) {
        console.log("eror delete", error);
      });
    alert("Anda sudah mendelete barang!");
  };

  doEdit = async e => {
    e.preventDefault();
    const self = this;
    axios
      .put("http://api.alfaruqi.xyz/item/" + self.props.match.params.item_id, {
        nama: self.state.nama,
        detail: self.state.detail,
        url: self.state.url,
        harga: self.state.harga,
        total: self.state.total
      })
      .then(function(response) {
        console.log(response.data);
        self.props.history.push("/home");
      })
      .catch(function(error) {
        console.log("eror edit", error);
      });
    alert("Anda sudah mengedit barang!");
  };

  render() {
    if (this.state.user.status == false) {
      return (
        <div>
          <div className="container pt-3">
            <div className="row">
              <div className="col-md-3 col-xs-2">
                <img
                  width="100%"
                  className="mr-3"
                  src={this.state.data.url}
                  alt="Generic placeholder"
                />
              </div>
              <div className="col-md-7 col-xs-12">
                <h2>{this.state.data.nama}</h2>
                <h5>{this.state.data.detail}</h5>
                <br />
                <h3 style={{ color: "red", fontWeight: 700 }}>
                  Rp {this.state.data.harga}
                </h3>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    Jumlah
                    <Jumlah onChange={this.changeHandle} />
                  </div>
                  <div className="col-md-4">
                    Total Harga
                    {/* <input> */}
                    <h4 className="text-black">
                      Rp {this.props.jumlah * this.state.data.harga}
                    </h4>
                    {/* </input> */}
                  </div>

                  <div className="col-md-4">
                    <Link to={"/checkout/" + this.state.data.item_id}>
                      <MDBBtn
                        color="dark"
                        variant="success"
                        style={{ width: "120px", height: "50px" }}
                      >
                        Beli
                      </MDBBtn>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="container pt-3">
            <div className="row">
              <div className="col-md-3 col-xs-2">
                <img
                  width="100%"
                  className="mr-3"
                  src={this.state.data.url}
                  alt="Generic placeholder"
                />
              </div>
              <div className="col-md-7 col-xs-12">
                <h2>{this.state.data.nama}</h2>
                <h5>{this.state.data.detail}</h5>
                <br />
                <h3 style={{ color: "red", fontWeight: 700 }}>
                  Rp {this.state.data.harga}
                </h3>
                <br />
                <div className="row">
                  <div className="col-md-4">
                    Jumlah
                    <Jumlah onChange={this.changeHandle} />
                  </div>
                  <div className="col-md-4">
                    Total Harga
                    {/* <input> */}
                    <h4 className="text-black">
                      Rp {this.props.jumlah * this.state.data.harga}
                    </h4>
                    {/* </input> */}
                  </div>

                  <div className="col-md-4">
                    <Link to={"/checkout/" + this.state.data.item_id}>
                      <MDBBtn
                        color="dark"
                        variant="success"
                        style={{ width: "120px", height: "50px" }}
                      >
                        Beli
                      </MDBBtn>
                    </Link>
                    <MDBBtn
                      color="dark"
                      variant="success"
                      style={{ width: "120px", height: "50px" }}
                      onClick={e => {
                        this.doDelete(e);
                      }}
                    >
                      Delete
                    </MDBBtn>

                    {/* <MDBContainer> */}
                    <MDBBtn
                      color="dark"
                      style={{ width: "120px", height: "50px" }}
                      onClick={this.toggle(14)}
                    >
                      Edit
                    </MDBBtn>
                    <MDBModal
                      isOpen={this.state.modal14}
                      toggle={this.toggle(14)}
                      centered
                    >
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default connect(
  "is_login, jumlah, token",
  actions
)(Detail);
