import React from "react";
import { MDBInput } from "mdbreact";
import { connect } from "unistore/react";
import { actions } from "../store";

class Jumlah extends React.Component {
  constructor(props) {
    super(props);
  }

  changeHandle = e => {
    this.props.setJumlah(e.target.value);
    this.props.setPic("");
  };

  render() {
    return (
      <MDBInput
        onChange={this.changeHandle}
        type="number"
        style={{ width: "100px" }}
      />
    );
  }
}

export default connect(
  "is_login, jumlah",
  actions
)(Jumlah);
