import React, { Component } from "react";
import "./media.css";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../store";
import { MDBBtn } from "mdbreact";

class Invoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      item_id: "",
      nama_item: "",
      total_qty: "",
      total_harga: "",
      tanggal: "",
      kode_unik: 0
    };
  }

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

  setKodeUnik = e => {
    e.preventDefault();
    this.setState({ kode_unik: e.target.value });
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
  }

  doTransaksi = async e => {
    e.preventDefault();
    // console.log("doregister", this.state);
    const self = this;
    var date = Date(Date.now())
      .toString()
      .slice(4, 15);
    var config = {
      method: "post",
      url: "http://api.alfaruqi.xyz/transaksi",
      data: {
        item_id: parseInt(self.props.match.params.item_id),
        nama_item: self.state.data.nama,
        total_qty: parseInt(self.props.jumlah),
        total_harga: self.props.jumlah * self.state.data.harga,
        tanggal: date
      },
      headers: {
        Authorization: "Bearer " + self.props.token
      }
    };
    console.log(config);
    axios(config)
      .then(function(response) {
        self.props.history.push("/home");
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
    alert("Transaksi sudah berhasil!");
  };

  render() {
    var date = Date(Date.now())
      .toString()
      .slice(4, 15);
    const kodeunik = Math.floor(Math.random() * 1000);
    return (
      <div class="container">
        <div className="row justify-content-center">
          <div class="col-md-6 col-md-offset-3 main">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-8 text-right">
                  <h2 style={{ color: "black" }}>
                    <strong>Berbagi</strong>
                  </h2>
                  <p>Jalan Tidar, Malang</p>
                  <p>0896 2772 5242</p>
                  <p>berbagi.com</p>
                </div>
              </div>
              <br />
              <div class="row">
                <div class="col-md-12 text-center">
                  <h2>INVOICE</h2>
                  <h5>00000846382</h5>
                </div>
              </div>
              <br />
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        <h5>Description</h5>
                      </th>
                      <th>
                        <h5>Quantity</h5>
                      </th>
                      <th>
                        <h5>Amount</h5>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="col-md-8">{this.state.data.nama}</td>
                      <td class="col-md-4 text-center">
                        <i class="fa fa-usd " aria-hidden="true" />
                        {this.props.jumlah}
                      </td>
                      <td class="col-md-4 text-center">
                        <i class="fa fa-usd" aria-hidden="true" />
                        Rp {this.props.jumlah * this.state.data.harga}
                      </td>
                    </tr>

                    <tr>
                      <td class=" col-md-3 text-right" />
                      <td class=" col-md-3 text-right">
                        <p>
                          <strong>Total Amount: </strong>
                        </p>
                        <p>
                          <strong>Code Unique: </strong>
                        </p>
                      </td>
                      <td class=" col-md-3 text-center">
                        <p>
                          <strong />
                        </p>
                        <p>
                          <strong>
                            <i class="fa fa-usd" aria-hidden="true" />
                            {this.props.jumlah * this.state.data.harga}
                          </strong>
                        </p>
                        <p>
                          <strong />
                        </p>
                        <p>
                          <strong>
                            <i class="fa fa-usd" aria-hidden="true" />{" "}
                            {kodeunik}
                          </strong>
                        </p>
                      </td>
                    </tr>

                    <tr style={{ color: "#F81D2D" }}>
                      <td class="col-md-9" />
                      <td class="text-right">
                        <h4>
                          <strong>Total:</strong>
                        </h4>
                      </td>
                      <td class="text-left" valign="middle">
                        <h4>
                          <strong>
                            <i class="fa fa-usd" aria-hidden="true" />{" "}
                            {this.props.jumlah * this.state.data.harga +
                              kodeunik}{" "}
                          </strong>
                        </h4>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <div class="col-md-12">
                  <p>
                    <b>Date :</b> {date}
                  </p>
                  <br />
                  <h5>
                    <b>Informasi Pembayaran</b>
                  </h5>
                  <h6>Silahkan melakukan pembayaran via :</h6>
                  <div class="table-responsive text-nowrap">
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>Nama Bank</td>
                          <td>Bank BNI (kode bank 009)</td>
                        </tr>
                        <tr>
                          <td>No Rekening</td>
                          <td>0395254909 a/n Ammar Al Faruqi</td>
                        </tr>
                        <tr>
                          <td>Jumlah Transfer</td>
                          <td>
                            Rp{" "}
                            {this.props.jumlah * this.state.data.harga +
                              kodeunik}
                          </td>
                        </tr>
                        <tr>
                          <td>Batas Transfer</td>
                          <td>24 jam setelah invoice ini keluar</td>
                        </tr>
                      </tbody>
                      <MDBBtn
                        color="black"
                        onClick={e => {
                          this.doTransaksi(e);
                        }}
                      >
                        Konfirmasi
                      </MDBBtn>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login, jumlah, token",
  actions
)(Invoice);
