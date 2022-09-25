import React, { useState, useEffect } from "react";
import { message, Image, Row, Col, Empty } from "antd";
import axios from "axios";
import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";
import { Link } from "react-router-dom";

export default function Admin() {
  const [data, setData] = useState();
  const [state, setState] = useState("");

  useEffect(() => {
    axios
      .get("https://yugsrijetaup.com/api/users/")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        message.error("Something went wrong");
      });
  }, [state]);

  const handleApprove = (data) => {
    axios
      .get(`https://yugsrijetaup.com/api/users/approve/${data}`)
      .then(function (response) {
        message.success({
          content: response.data.message,
          duration: 10,
          style: {
            fontSize: "20px",
            fontWeight: "bolder",
          },
        });
        setState("approve");
      })
      .catch(function (error) {
        console.log(error);
        message.error(error.data.error);
      });
  };

  const handleReject = (data) => {
    axios
      .get(`https://yugsrijetaup.com/api/users/reject/${data}`)
      .then(function (response) {
        message.success({
          content: response.data.message,
          style: {
            fontSize: "20px",
            fontWeight: "bolder",
          },
        });
        setState("reject");
      })
      .catch(function (error) {
        console.log(error);
        message.error(error.data.error);
      });
  };

  return (
    <LayoutOne title="Homepage 2">
      <SectionTitle title="Admin Panel" className="-center" />
      <div className="categories-one">
        <Container>
          <Row gutter={[{ sm: 15, md: 15 }]}>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <Col key={index} xs={24} sm={12} md={8}>
                  <Link to={"#"}>
                    <div className="categories-one-item">
                      <div className="categories-one-item__image">
                        <Image
                          // width={200}
                          src={`https://yugsrijetaup.com/images/${item.profileImage}`}
                          preview={false}
                        />
                      </div>
                      <h2>Name : {item.name}</h2>
                      <h2>DOB : {item.dob}</h2>
                      <h2>Gender : {item.gender}</h2>
                      <h2>Pincode : {item.pinCode} </h2>
                      <h2>District : {item.district} </h2>
                      <h2>State : {item.state} </h2>
                      <h2>Mobile No. : {item.phoneNumber} </h2>
                      <h2>User Type : {item.userType} </h2>
                      <br />
                      <Row
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        {/* {state === "approve" ? (
                          <button>Approved</button>
                        ) : state === "reject" ? (
                          <button>Rejected</button>
                        ) : (
                          <>
                            {" "}
                            <Col onClick={handleApprove(item.phoneNumber)}>
                              Approve
                            </Col>
                            <Col onClick={handleReject(item.phoneNumber)}>
                              Reject
                            </Col>
                          </>
                        )} */}
                        <Col onClick={() => handleApprove(item.phoneNumber)}>
                          Approve
                        </Col>
                        <Col onClick={() => handleReject(item.phoneNumber)}>
                          Reject
                        </Col>
                      </Row>
                    </div>
                  </Link>
                </Col>
              ))
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
}
