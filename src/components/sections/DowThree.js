import React from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";

import html2canvas from "html2canvas";
import SectionTitle from "../other/SectionTitle";
import Container from "../other/Container";

function DowThree() {
  const downloadCharacterSheet = () => {
    const node = document.getElementById("id-card");

    html2canvas(node).then((canvas) => {
      // document.body.appendChild(canvas)
      // var img    = canvas.toDataURL("image/png");
      // document.write('<img src="'+img+'"/>');
      var link = document.createElement("a");
      link.download = "id_card.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="dow-three">
      <Container>
        <div className="dow-three-wrapper">
          <Row style={{ justifyContent: "center " }}>
            <Col md={12}>
              <div className="dow-three-content">
                <div>
                  <p style={{ fontWeight: "800", fontSize: "20px" }}>
                    {" "}
                    Reg. No: 234567890
                  </p>
                  <p style={{ fontWeight: "800", fontSize: "20px" }}>
                    {" "}
                    Name: Anupam Kushwaha
                  </p>
                  <p style={{ fontWeight: "800", fontSize: "20px" }}>
                    City : Nanpara
                  </p>
                  <p style={{ fontWeight: "800", fontSize: "20px" }}>
                    State : Uttar Pradesh
                  </p>
                  <p style={{ fontWeight: "800", fontSize: "20px" }}>
                    Mobile No. : 924456789
                  </p>
                </div>
              </div>
            </Col>
            <Col md={10}>
              <div className="dow-three-image">
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/image.png"}
                  alt="Dale of the week image"
                />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(DowThree);
