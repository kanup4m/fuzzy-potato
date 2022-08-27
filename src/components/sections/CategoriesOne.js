import React from "react";
import Container from "../other/Container";
import { Col, Row, Empty } from "antd";
import { Link } from "react-router-dom";

function CategoriesOne({ data }) {
  return (
    <div className="categories-one">
      <Container>
        <Row gutter={[{ sm: 0, md: 15 }]}>
          {data && data.length > 0 ? (
            data.map((item, index) => (
              <Col key={index} xs={24} sm={12} md={6}>
                <Link to={process.env.PUBLIC_URL + "#"}>
                  <a
                    href={process.env.PUBLIC_URL + "#"}
                    className="categories-one-item"
                  >
                    <div className="categories-one-item__image up-down-anim-hover">
                      <span>{item.image.background}</span>
                      <img
                        src={process.env.PUBLIC_URL + item.image.main}
                        alt="Category image"
                      />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.download} Form</p>
                  </a>
                </Link>
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
