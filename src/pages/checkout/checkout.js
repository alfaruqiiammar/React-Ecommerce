import React, { Component } from "react";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdbreact";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

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

  render() {
    return (
      <div class="container">
        <table id="cart" class="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Product</th>
              <th style={{ width: "10%" }}>Price</th>
              <th style={{ width: "8%" }}>Quantity</th>
              <th style={{ width: "22%" }} class="text-center">
                Subtotal
              </th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="Product">
                <div class="row">
                  <div class="col-sm-2 hidden-xs">
                    <img
                      src={this.state.data.url}
                      style={{ width: "100%" }}
                      alt="..."
                      class="img-responsive"
                    />
                  </div>
                  <div class="col-sm-10">
                    <h4 class="nomargin">{this.state.data.nama}</h4>
                    <p>{this.state.data.detail}</p>
                  </div>
                </div>
              </td>
              <td data-th="Price">{this.state.data.harga}</td>
              <td data-th="Quantity">
                <h5 class="text-center">{this.props.jumlah}</h5>
              </td>
              <td data-th="Subtotal" class="text-center">
                Rp {this.props.jumlah * this.state.data.harga}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="visible-xs">
              <td class="text-center">
                <strong />
              </td>
            </tr>
            <tr>
              <td colspan="2" class="hidden-xs" />
              <td class="hidden-xs text-center">
                <strong>
                  Total: Rp {this.props.jumlah * this.state.data.harga}
                </strong>
              </td>
              <td>
                <Link to={"/invoice/" + this.state.data.item_id}>
                  <MDBBtn
                    color="dark"
                    style={{
                      width: "150px",
                      height: "50px",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 0
                    }}
                  >
                    Proses Pembayaran <i class="fa fa-angle-right" />
                  </MDBBtn>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default connect(
  "is_login, jumlah",
  actions
)(Checkout);
