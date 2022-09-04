import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import React from "react";

import LayoutOne from "../components/layout/LayoutOne";
import Container from "../components/other/Container";

export default function error() {
  return (
    <LayoutOne title="404 Error">
      <Container>
        <div className="error">
          <Row gutter={50}>
            <Col xs={24} md={12}>
              <div className="error-content">
                <h2>OPPS! THIS PAGE COULD NOT BE FOUND</h2>
                <p>
                  Sorry bit the page you are looking for does not exist, have
                  been removed or name changed
                </p>
                <Button type="primary" shape="round">
                  <Link to={"/"}>
                    <h3>Go to homepage</h3>
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
}
