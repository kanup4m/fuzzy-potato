import { Col, Row, Image, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";

import Container from "../other/Container";
import SectionTitle from "../other/SectionTitle";
import Logo from "../../styles/images/logo.png";
import Banner from "../../styles/images/pages/Banner.jpeg";

const contentStyle = {
  //   height: "160px",
  //   color: "#fff",
  //   lineHeight: "160px",
  //   textAlign: "center",
  background: "#364d79",
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
        right: "5px",
      }}
      onClick={onClick}
    >
      <RightOutlined />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        color: "black",
        fontSize: "15px",
        lineHeight: "1.5715",
        left: "5px",
        zIndex: 99,
      }}
      onClick={onClick}
    >
      <LeftOutlined />
    </div>
  );
};

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function Introduction() {
  return (
    <>
      {" "}
      <div className="introduction-two">
        <Container>
          <div className="introduction-two-wrapper">
            <Row>
              <Col md={12}>
                <div className="introduction-two-image">
                  <img src={Logo} alt="introduction" />
                </div>
              </Col>
              <Col md={12}>
                <div
                  className="introduction-two-content"
                  style={{ textAlign: "center", paddingTop: "5em" }}
                >
                  <SectionTitle title="Welcome" hideDecoration />
                  <p>
                    All World Gayatri Parivar Provincial Youth Cell Uttar
                    Pradesh. This is a special Website for the events of the
                    youth cell of Uttar Pradesh. Stay updated with all the
                    latest updates on youth activities happening in Uttar
                    Pradesh - Visit us to stay updated with videos related to
                    many great contemplative material like youth conferences,
                    seminars, celebrations, personality sophistication events of
                    youth, eradication, tree plantation, yagya with women
                    awakening, rites, yoga, meditation, scientific spiritualism
                    etc.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container>
        {/* <img src={Banner} /> */}
        {/* <Image src={Banner} /> */}
        <Carousel autoplay arrows {...settings}>
          <div>
            <h3 style={contentStyle}>
              <Image src={Banner} />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image src={Banner} />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image src={Banner} />
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <Image src={Banner} />
            </h3>
          </div>
        </Carousel>
      </Container>
    </>
  );
}

export default React.memo(Introduction);
