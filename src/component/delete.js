import React from "react";
import { connect } from "unistore/react";
import { actions } from "../store";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";
import Jumlah from "./jumlah";
import Total from "./totalharga";
import axios from "axios";
import { Link } from "react-router-dom";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

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
      .catch(function(error) {});
  }
  doDelete = async e => {
    e.preventDefault();
    // console.log("doregister", this.state);
    const self = this;
    axios
      .delete("api.alfaruqi.xyz/item/" + self.props.match.params.item_id)
      .then(function(response) {
        console.log(response.data);
        this.props.history.push("/home");
      })
      .catch(function(error) {
        console.log("error delete", error);
      });
    alert("Anda sudah mendelete barang!");
  };

  render() {
    // if (this.props.is_login === false) {
    //   return <Redirect to={{ pathname: "/" }} />;
    // } else {
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
                    <button
                      variant="success"
                      style={{ width: "100px", height: "50px" }}
                    >
                      Beli
                    </button>
                  </Link>
                  <button
                    variant="success"
                    style={{ width: "100px", height: "50px" }}
                    onClick={e => {
                      this.doDelete(e);
                    }}
                  >
                    Delete
                  </button>
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
// }

export default connect(
  "is_login, jumlah",
  actions
)(Delete);
