import React, { Component } from "react";
import { MDBBtn, MDBCollapse } from "mdbreact";

class Tentang extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));
  };

  render() {
    return (
      <>
        <MDBBtn
          color="dark"
          onClick={this.toggleCollapse("basicCollapse")}
          style={{ marginBottom: "1rem" }}
        >
          About Us
        </MDBBtn>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
          <p>
            Sharing Kind merupakan sebuah e-commerce yang bertujuan untuk
            membantu orang-orang yang ingin berbagi kebahagiaan pada orang-orang
            yang kurang beruntung di sekitar kita. Banyak dari kita yang
            terkadang bingung ingin menyalurkan kemana atau tak ada waktu ingin
            menyalurkannya, dan terkadang lupa bahwa apa yang semua kita miliki
            sekarang ini, hanyalah titipan dari-Nya, oleh karena itu, berbagi
            lah kebahagiaan, karena sedikit darimu mampu membuat mereka bahagia
            sepenuhnya.
          </p>
        </MDBCollapse>
      </>
    );
  }
}

export default Tentang;
