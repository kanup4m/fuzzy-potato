import { Col, Row } from "antd";
import React from "react";

import Container from "../other/Container";
import SectionTitle from "../other/SectionTitle";

function Introduction() {
  return (
    <div className="introduction-two">
      <Container>
        <div className="introduction-two-wrapper">
          <Row>
            <Col md={12}>
              <div className="introduction-two-image">
                <img src="./../../assets/images/logo.png" alt="introduction" />
              </div>
            </Col>
            <Col md={12}>
              <div
                className="introduction-two-content"
                style={{ textAlign: "center", paddingTop: "5em" }}
              >
                <SectionTitle title="Welcome" hideDecoration />
                <p>
                  All World Gayatri Parivar Provincial Youth Cell Uttar Pradesh.
                  This is a special Website for the events of the youth cell of
                  Uttar Pradesh. Stay updated with all the latest updates on
                  youth activities happening in Uttar Pradesh - Visit us to stay
                  updated with videos related to many great contemplative
                  material like youth conferences, seminars, celebrations,
                  personality sophistication events of youth, eradication, tree
                  plantation, yagya with women awakening, rites, yoga,
                  meditation, scientific spiritualism etc.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(Introduction);
