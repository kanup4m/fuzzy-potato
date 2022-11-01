/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";
import { DownloadOutlined } from "@ant-design/icons";
import { Row, Col, Button, message } from "antd";
import { jsPDF } from "jspdf";
import axios from "axios";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";
import Pending from "../../components/idCard/pending";
import Rejected from "../../components/idCard/rejected";
import { image1 } from "../../data/pdfImage";

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
    let phoneNumber = sessionStorage.getItem("phoneNumber");
    let token = sessionStorage.getItem("token");
    axios
      .get("https://yugsrijetaup.com/api/users/" + phoneNumber, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        message.error("Something went wrong");
      });
  }, []);

  const Download = (e) => {
    html2canvas(node.current, { allowTaint: false, useCORS: true }).then(
      (canvas) => {
        var img = canvas.toDataURL("image/png");
        var img1 = image1;

        var imgWidth = 210;
        var imgHeight = (canvas.height * imgWidth) / canvas.width;

        var doc = new jsPDF("p", "mm");
        var position = 10;
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();

        if (isDesktop === true) {
          doc.addImage(img, "jpeg", 10, position, 65, 84);
        } else {
          doc.addImage(img, "jpeg", 10, position, 70, 79);
        }

        doc.addPage();
        doc.addImage(img1, "jpeg", 0, 0, width, height);

        doc.save("IdCard.pdf");
      }
    );
  };

  return (
    <LayoutOne title="ID Card">
      <SectionTitle title="ID Card" className="-center" />

      {sessionStorage.getItem("isApproved") === "pending" ? (
        <Pending />
      ) : sessionStorage.getItem("isApproved") === "rejected" ? (
        <Rejected />
      ) : (
        <>
          {isDesktop ? (
            <div className="dow-three">
              <Container>
                <div
                  ref={node}
                  className={`dow-three-${
                    data.userType === "ATITHI"
                      ? "wrapper"
                      : data.userType === "SHIVIRARTHI"
                      ? "new"
                      : "abc"
                  }`}
                >
                  <img
                    src={`https://yugsrijetaup.com/images/${data.profileImage}`}
                    alt="Profile Image"
                    style={{ width: "140px", height: "110px" }}
                    crossOrigin="true"
                  />
                  <div className="bg-text">
                    <p>Reg. No - {data.regNo}</p>
                    <p>Name - {data.name}</p>
                    <p>Father's Name - {data.fatherName}</p>
                    <p>DOB - {data.dob}</p>
                    <p>Mobile No. - {data.phoneNumber}</p>
                    <p>Address - {data.address}</p>
                  </div>
                </div>
              </Container>
            </div>
          ) : (
            <div
              className={`background-${
                data.userType === "ATITHI"
                  ? "old"
                  : data.userType === "SHIVIRARTHI"
                  ? "new"
                  : "abc"
              }`}
              ref={node}
            >
              <img
                className="mobile-img"
                src={`https://yugsrijetaup.com/images/${data.profileImage}`}
                alt="Profile Image"
                crossOrigin="true"
              />
              <div className="background-text">
                <p>Reg. No. : {data.regNo}</p>
                <p>Name : {data.name}</p>
                <p>Father's Name : {data.fatherName}</p>
                <p>DOB : {data.dob}</p>
                <p>Mobile No. : {data.phoneNumber}</p>
                <p>Address. : {data.address}</p>
              </div>
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
