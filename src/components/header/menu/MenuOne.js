import React from "react";
import { Link } from "react-router-dom";

import Container from "../../other/Container";
import Navigator from "../elements/Navigator";
import MobileMenuOpener from "../elements/MobileMenuOpener";

export default function MenuOne() {
  return (
    <div className="menu -style-one">
      <Container>
        <div className="menu-wrapper">
          <MobileMenuOpener />
          <Link to={"/"}>
            <p style={{ fontWeight: "800" }}>Yug Srijeta</p>
          </Link>
          <Navigator />
        </div>
      </Container>
    </div>
  );
}
