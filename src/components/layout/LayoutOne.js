import React from "react";
import { BackTop } from "antd";

import HeaderOne from "../header/headerOne";
import Footer from "../footer/Footer";
import withHeaderScroll from "../../utils/withHeaderScroll";
import FooterFluid from "../footer/FooterFluid";
import Container from "../other/Container";

const ScrolledHeader = withHeaderScroll(HeaderOne);

function LayoutOne({ title, children, headerClass, footerClass }) {
  return (
    <>
      <h1>
        <title>{title}</title>
      </h1>
      <ScrolledHeader className={headerClass} />
      <br />

      {children}
      <br />
      <br />
      <Container>
        <Footer className={footerClass} />
      </Container>
      <FooterFluid />

      <BackTop />
    </>
  );
}

export default React.memo(LayoutOne);
