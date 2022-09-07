import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { DownloadOutlined } from "@ant-design/icons";
import { Row, Col, Button, Image } from "antd";
import { jsPDF } from "jspdf";
import axios from "axios";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";
import Pending from "../../components/idCard/pending";
import Rejected from "../../components/idCard/rejected";

export default function IDCard() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);
  const [data, setData] = useState({});

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  const node = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    let phoneNumber = localStorage.getItem("phoneNumber");
    let token = localStorage.getItem("token");
    axios
      .get("https://yugsrijetaup.com/api/users/" + phoneNumber, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // handle success
        console.log(response);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  const Download = (e) => {
    html2canvas(node.current).then((canvas) => {
      // document.body.appendChild(canvas)
      var img = canvas.toDataURL("image/png");
      // if (isDesktop) {
      //   var pdf = new jsPDF({
      //     orientation: "landscape",
      //     unit: "in",
      //     format: [14, 14]
      //   });

      //   pdf.setFontSize(30)
      //   pdf.text("ID Card", 6, 1);
      //   pdf.addImage(img, 'JPEG', 0, 2);
      //   // pdf.output('dataurlnewwindow');
      //   pdf.save("IdCard.pdf");

      // }
      // else {
      //   var pdf = new jsPDF({
      //     orientation: "potrait",
      //     unit: "in",
      //     format: [8, 8]
      //   });

      //   pdf.setFontSize(30)
      //   pdf.text("ID Card", 3, 1);
      //   pdf.addImage(img, 'JPEG', 0.2, 2);
      //   pdf.save("IdCard.pdf");
      // }

      var doc = new jsPDF({
        orientation: "l", // landscape
        unit: "pt", // points, pixels won't work properly
        format: [canvas.width, canvas.height], // set needed dimensions for any element
      });

      doc.addImage(img, "JPEG", 0, 0, canvas.width, canvas.height);

      doc.save("IdCard.pdf");

      // document.write('<img src="'+img+'"/>');
      // var link = document.createElement("a");
      // link.download = "id_card.png";
      // link.href = canvas.toDataURL();
      // link.click();
    });
  };

  return (
    <LayoutOne title="ID Card">
      <SectionTitle title="ID Card" className="-center" />

      {localStorage.getItem("isApproved") === "pending" ? (
        <Pending />
      ) : localStorage.getItem("isApproved") === "rejected" ? (
        <Rejected />
      ) : (
        <>
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
                            Reg. No - {data.regNo}
                          </div>
                          <div style={{ fontWeight: "800", fontSize: "20px" }}>
                            {" "}
                            Name - {data.name}
                          </div>
                          <div style={{ fontWeight: "800", fontSize: "20px" }}>
                            {" "}
                            Father's Name - {data.fatherName}
                          </div>
                          <div style={{ fontWeight: "800", fontSize: "20px" }}>
                            DOB - {data.dob}
                          </div>
                          <div style={{ fontWeight: "800", fontSize: "20px" }}>
                            Mobile No. - {data.phoneNumber}
                          </div>
                          <div style={{ fontWeight: "800", fontSize: "20px" }}>
                            Address - {data.address}
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={10}>
                      <div className="dow-three-image">
                        <img
                          src={`https://yugsrijetaup.com${data.profileImage}`}
                          alt="Profile Image"
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
                <p>Reg. No. : {data.regNo}</p>
                <p>Name : {data.name}</p>
                <p>Father's Name : {data.fatherName}</p>
                <p>DOB : {data.dob}</p>
                <p>Mobile No. : {data.phoneNumber}</p>
                <p>Address. : {data.address}</p>
              </div>
              <img
                className="mobile-img"
                src={`https://yugsrijetaup.com${data.profileImage}`}
                alt="Profile Image "
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
        </>
      )}
      <br />
      <br />
    </LayoutOne>
  );
}
