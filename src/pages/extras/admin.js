import React, { useState, useEffect } from "react";
import { Avatar, Image, Row, Col, Empty } from "antd";
import axios from "axios";
import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";
import { Link } from "react-router-dom";

export default function Admin() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://yugsrijetaup.com/api/users/")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <LayoutOne title="Homepage 2">
      <SectionTitle title="Admin Panel" className="-center" />

      {/* <CategoriesTwo data={data} /> */}

      <div className="categories-one">
        <Container>
          <Row gutter={[{ sm: 15, md: 15 }]}>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <Col key={index} xs={24} sm={12} md={8}>
                  <Link to={"#"}>
                    <div className="categories-one-item">
                      <div className="categories-one-item__image">
                        {/* <img src={item.profileImage} alt="Profile photo" /> */}
                        <Image
                          // width={200}
                          src={`https://yugsrijetaup.com/images/${item.profileImage}`}
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
                        <Col>Approve</Col>
                        <Col>Reject</Col>
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
