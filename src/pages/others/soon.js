import React from "react";

import Container from "../../components/other/Container";
import SocialIcons from "../../components/other/SocialIcons";

export default function comingSoon() {
  return (
    <>
      <h1>
        <title>Coming soon</title>
      </h1>
      <div className="coming-soon">
        <div className="coming-soon-wrapper">
          <Container>
            <main>
              {/* <SectionTitle title="Coming Soon" hideDecoration /> */}
              <h3>OUR WEBSITE IS UNDER CORPORATE.</h3>
              <p>Follow Us For Updates</p>
              <SocialIcons type="primary" shape="round" />
            </main>
          </Container>
        </div>
      </div>
    </>
  );
}
