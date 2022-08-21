import React from "react";
import { Row, Col } from "antd";

import Container from "../other/Container";

import footerLinks from "../../data/footer-links.json";
import FooterQuickLinks from "./elements/FooterQuickLinks";
import FooterInfomation from "./elements/FooterInfomation";

function FooterFluid() {
  return (
    <div className="footer -fluid -style-one">
      <div className="footer-top">

      </div>
      <div className="footer-bottom">
        <Container fluid>
          <div className="footer-bottom__wrapper">
            <p>Copyright © 2022 Yug Srijeta U.P. - All Rights Reserved.</p>

          </div>
        </Container>
      </div>
    </div>
  );
}
export default React.memo(FooterFluid);
