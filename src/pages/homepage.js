import React, { useEffect } from "react";

import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";
import Introductions from "../components/sections/Introductions";

export default function Homepage() {
  // useEffect(() => {
  //     // Clear all local storage item
  //     localStorage.clear();
  // });

  return (
    <LayoutOne title="Homepage 2">
      <Container>
        <marquee>
          <p style={{ color: "red", fontWeight: "bolder" }}>
            What are the three things needed to start a fire? Students find out
            that a fire needs three things to start and continue burning:
            oxygen, fuel and heat.To control the fire, at least one of these
            components must be removed.
          </p>
        </marquee>
      </Container>
      <Introductions />
    </LayoutOne>
  );
}
