import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../../component/typo";
import "./home1.css";
import { Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Donasi from "../../component/listDonasi";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer
} from "mdbreact";

function Home1(props) {
  console.log("props login", props.is_login);
  if (props.is_login === false) {
    return <Redirect to={{ pathname: "/" }} />;
  }
  return (
    <div>
      <Donasi />
      <br />
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contoh Kegiatan yang Telah Berbagi Lakukan
      </h2>
      <MDBContainer>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://i.ytimg.com/vi/lfmBC63dPMo/maxresdefault.jpg"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://awsimages.detik.net.id/community/media/visual/2018/11/25/81427d97-876c-4686-a106-058c1ee8ea46.jpeg?a=1"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://2.bp.blogspot.com/-PSgTHDNZ-YU/Ww1Y9-DSZ7I/AAAAAAAAABg/pVtHNSNnunEAiZlTmYOFyORvXt9FgdeeACEwYBhgL/s1600/IMG_5910.JPG"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

Home1.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  "is_login",
  actions
)(Home1);
