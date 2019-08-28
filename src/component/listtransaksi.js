import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import axios from "axios";
import { MDBMedia } from "mdbreact";

class Transaksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  changeHandle = e => {
    this.props.setJumlah(e.target.value);
  };

  componentDidMount() {
    const self = this;
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      }
    };
    axios
      .get("http://api.alfaruqi.xyz/transaksi", config)
      .then(function(response) {
        self.setState({ data: response.data });
      })
      .catch(function(error) {
        console.log("eror trans", error);
      });
  }

  render() {
    return (
      <div>
        <br />

        <h2>History Transaksi</h2>
        <br />

        {this.state.data.map((data, index) => {
          if (index < 10) {
            return (
              <MDBMedia>
                <MDBMedia left className="mr-3 pl-3" href="#">
                  <MDBMedia
                    object
                    src="https://image.flaticon.com/icons/svg/879/879890.svg"
                    style={{ width: "120px", height: "120px" }}
                    alt=""
                  />
                </MDBMedia>
                <MDBMedia body>
                  <MDBMedia heading>{index + 1}</MDBMedia>
                  <p> {data.nama_item}</p>
                  <p>Tanggal : {data.tanggal}</p>
                  <p> Total beli : {data.total_qty}</p>
                  <p> Total bayar : {data.total_harga}</p>
                </MDBMedia>
              </MDBMedia>
            );
          }
        })}
      </div>
    );
  }
}
// }

export default connect(
  "is_login, token",
  actions
)(Transaksi);
