import React from "react";
import { Row, Col } from "antd";
import classNames from "classnames";

import Container from "../other/Container";
import FooterQuickLinks from "./elements/FooterQuickLinks";
import FooterInfomation from "./elements/FooterInfomation";

function Footer({ containerFluid, className }) {
  return (
    <div className={`footer -style-one ${classNames(className)}`}>
      <div className="footer-bottom_wrapper">
        <Container fluid={containerFluid}>
          <Row gutter={15}>
            <Col xs={24} md={9} lg={8}>
              <FooterInfomation />
            </Col>
            <Col xs={24} md={15} lg={16}>
              <FooterQuickLinks colSize={{ span: 8 }} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(Footer);
