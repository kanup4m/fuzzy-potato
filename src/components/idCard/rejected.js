import { Col, Row } from "antd";
import React from "react";

import Container from "../other/Container";
import SectionTitle from "../other/SectionTitle";

function Introduction() {
    return (
        <div className="introduction-two">
            <Container>
                <div className="introduction-two-wrapper">
                    <Row>

                        <Col md={24}>
                            <div
                                className="introduction-two-content"
                                style={{ textAlign: "center", paddingTop: "5em" }}
                            >
                                <SectionTitle title="Status : Rejected" hideDecoration />
                                <h3>
                                    Your registration details couldn't be verified.
                                </h3>
                                <h3>Please register again using valid information.</h3>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default React.memo(Introduction);
