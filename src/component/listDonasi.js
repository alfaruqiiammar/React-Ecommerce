import React from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBIcon,
  MDBTooltip,
  MDBBadge,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn
} from "mdbreact";
import { Link } from "react-router-dom";

class Donasi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const self = this;
    axios
      .get("http://api.alfaruqi.xyz/item")
      .then(function(response) {
        self.setState({ data: response.data });
        // console.log(response.data.status)
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
      });
  }

  render() {
    return (
      <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Pilih Nominal Yang Ingin Anda Bagikan
        </h2>
        <p className="grey-text text-center w-responsive mx-auto mb-5">
          Berbagi adalah bentuk lain dari rasa bersyukur, berbagilah dengan
          sesama tanpa mengharapkan apapun. Kebahagiaan adalah kesetiaan. Setia
          atas Indahnya merasa cukup. Setia atas indahnya berbagi. Setia atas
          indahnya ketulusan berbuat baik.
        </p>
        <div className="container">
          <MDBRow className="justify-content-center pb-1 animated pulse">
            {this.state.data.map((data, index) => {
              if (index < 10) {
                return (
                  <MDBCol lg="3" md="6" sm="6" className="mb-lg-0 mb-4 pb-4">
                    <Link to={"/item/" + data.item_id}>
                      <MDBCard collection className="z-depth-1-half">
                        <div className="view zoom">
                          <img
                            src={data.url}
                            className="img-fluid"
                            style={{ height: "250px", width: "100%" }}
                          />
                          <div className="stripe dark">
                            <br />
                            <p style={{ color: "black" }}>
                              {data.nama} <MDBIcon icon="angle-right" />
                            </p>
                            {/* <p>Total pendonasi: {data.total}</p> */}
                          </div>
                        </div>
                      </MDBCard>
                    </Link>
                  </MDBCol>
                );
              }
            })}
          </MDBRow>
        </div>
      </section>
    );
  }
}

export default Donasi;
