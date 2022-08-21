import React from "react";
import { BackTop } from "antd";

import HeaderOne from "../header/headerOne";
import Footer from "../footer/Footer";
import withHeaderScroll from "../../utils/withHeaderScroll"
import FooterFluid from "../footer/FooterFluid";

const ScrolledHeader = withHeaderScroll(HeaderOne);

function LayoutOne({ title, children, headerClass, footerClass }) {
  return (
    <>
      <h1>
        <title>{title}</title>
      </h1>
      <ScrolledHeader className={headerClass} />
      {children}
      <Footer className={footerClass} />
      <FooterFluid />
      <BackTop />
    </>
  );
}

export default React.memo(LayoutOne);
