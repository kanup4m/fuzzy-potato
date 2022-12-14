import React from "react";
import Container from "../other/Container";
import { Col, Row, Empty } from "antd";
import { Link } from "react-router-dom";
import Icon from "../../styles/images/pdf.png";

function CategoriesOne({ data }) {
  return (
    <div className="categories-one">
      <Container>
        <Row gutter={[{ sm: 15, md: 15 }]}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={6}>
                <a
                  href={item.link}
                  className="categories-one-item"
                  target="_blank"
                >
                  <div className="categories-one-item__image up-down-anim-hover">
                    <img src={Icon} alt="Category Pdf" />
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.download} Form</p>
                </a>
              </Col>
            ))
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </Row>
      </Container>
    </div>
  );
}

export default React.memo(CategoriesOne);
