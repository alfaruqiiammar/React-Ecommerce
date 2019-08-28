import React from "react";
import { MDBBadge, MDBContainer, MDBIcon } from "mdbreact";

const Media = props => {
  return (
    <MDBContainer>
      <MDBBadge style={{ width: "30px", height: "30px" }} color="default">
        <a url="facebook.com">
          <MDBIcon fab icon="facebook-f" size="2x" />{" "}
        </a>
      </MDBBadge>
      <MDBBadge style={{ width: "30px", height: "30px" }} color="primary">
        <MDBIcon fab icon="instagram" size="2x" />
      </MDBBadge>
      <MDBBadge style={{ width: "30px", height: "30px" }} color="primary">
        <MDBIcon fab icon="twitter" size="2x" />
      </MDBBadge>
    </MDBContainer>
  );
};

export default Media;
