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
            प्रांतीय युग सृजेता समारोह श्रावस्ती 6, 7, 8, 9 नवम्बर में आप सभी का
            हार्दिक स्वागत है | केंद्रीय संपर्क - 9258360652, 9258360785,
            9258360962 | प्रांतीय संपर्क - 7652064005, 9450751307, 9451025957,
            9410404919, 94151 56122
          </p>
        </marquee>
      </Container>
      <Introductions />
    </LayoutOne>
  );
}
