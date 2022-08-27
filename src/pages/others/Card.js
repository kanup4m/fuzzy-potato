import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { DownloadOutlined } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import axios from "axios";
import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";

export default function IDCard() {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 650);
    };

    const node = useRef(null);

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const Download = (e) => {
        html2canvas(node.current).then((canvas) => {
            // document.body.appendChild(canvas)
            // var img    = canvas.toDataURL("image/png");
            // document.write('<img src="'+img+'"/>');
            var link = document.createElement("a");
            link.download = "id_card.png";
            link.href = canvas.toDataURL();
            link.click();
        });
    };

    return (
        <LayoutOne title="ID Card">
            <SectionTitle title="ID Card" className="-center" />

            {isDesktop ? (
                <div className="dow-three" ref={node}>
                    <Container>
                        <div className="dow-three-wrapper">
                            <Row style={{ justifyContent: "center " }}>
                                <Col md={12}>
                                    <div className="dow-three-content">
                                        <div>
                                            <div style={{ fontWeight: "800", fontSize: "20px" }}>
                                                {" "}
                                                Reg. No: 234567890
                                            </div>
                                            <div style={{ fontWeight: "800", fontSize: "20px" }}>
                                                {" "}
                                                Name: Anupam Kushwaha
                                            </div>
                                            <div style={{ fontWeight: "800", fontSize: "20px" }}>
                                                {" "}
                                                Father's Name: Anupam Kushwaha
                                            </div>
                                            <div style={{ fontWeight: "800", fontSize: "20px" }}>
                                                City : Nanpara
                                            </div>
                                            <div style={{ fontWeight: "800", fontSize: "20px" }}>
                                                State : Uttar Pradesh
                                            </div>
                                            <div style={{ fontWeight: "800", fontSize: "20px" }}>
                                                Mobile No. : 924456789
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={10}>
                                    <div className="dow-three-image">
                                        <img
                                            src={process.env.PUBLIC_URL + "/assets/images/image.png"}
                                            alt="Dale of the week "
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            ) : (
                <div className="background" ref={node}>
                    <div className="background-text">
                        <p>Reg. No. - Anupam Kushwaha</p>
                        <p>Name - Anupam Kushwaha</p>
                        <p>Father's Name - Anupam Kushwaha</p>
                        <p>City - Bahraich</p>
                        <p>
                            State <spa>-</spa> Nanpara
                        </p>
                        <p>Phone - 5546789</p>
                    </div>
                    <img
                        className="mobile-img"
                        src={process.env.PUBLIC_URL + "/assets/images/image.png"}
                        alt="Dale of the week "
                    />
                </div>
            )}

            <br />

            {isDesktop ? (
                <Button
                    className="downloadBtn"
                    type="primary"
                    onClick={Download}
                    style={{ left: "45vw" }}
                    size="large"
                    icon={<DownloadOutlined />}
                >
                    Download ID Card
                </Button>
            ) : (
                <Button
                    className="downloadBtn"
                    type="primary"
                    onClick={Download}
                    style={{ left: "25vw" }}
                    size="large"
                    icon={<DownloadOutlined />}
                >
                    Download ID Card
                </Button>
            )}

            <br />
            <br />
        </LayoutOne>
    );
}
