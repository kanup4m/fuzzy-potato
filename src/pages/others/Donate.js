import React, { useState } from "react";
import { Radio, Tabs, Button } from "antd";
import { Link } from "react-router-dom";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";

export default function Donate() {
  return (
    <LayoutOne title="Homepage 2">
      <SectionTitle title="Donate" className="-center" />
      <Container>
        <Tabs defaultActiveKey="1" centered type="card" size="large">
          <Tabs.TabPane tab="NEFT / RTGS" key="1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                fontFamily: "CeraPro Medium",
              }}
            >
              <div>
                <h1 style={{ fontFamily: "CeraPro Bold", lineHeight: 2 }}>
                  Account No. 1
                </h1>
                <h3>Account Number : 50200071079517 </h3>
                <h3>Account Name : GAYATRI PARIVAR TRUST NANPARA</h3>
                <h3>IFSC Code : HDFC0002159 </h3>
                <h3>Bank Name : HDFC BANK</h3>
                <h3>Branch Name : NANPARA</h3>
                <h3>PAN : AACTG2672G</h3>
              </div>

              <div>
                <h1 style={{ fontFamily: "CeraPro Bold", lineHeight: 2 }}>
                  Account No. 2
                </h1>
                <h3>Account Number : 47630100005584 </h3>
                <h3>Account Name : GAYATRI PARIVAR TRUST NANPARA</h3>
                <h3>IFSC Code : BARB0NANPAR </h3>
                <h3>Bank Name : BANK OF BARODA</h3>
                <h3>Branch Name : NANPARA</h3>
                <h3>PAN : AACTG2672G</h3>
              </div>
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="DONATE ONLINE" key="2">
            <br />
            <br />

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "CeraPro Medium",
              }}
            >
              <a
                href="https://rzp.io/l/yugsrijetaup"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  type="primary"
                  size="large"
                  style={{ backgroundColor: "black", borderColor: "black" }}
                >
                  Donate via razorpay
                </Button>
              </a>{" "}
            </div>
          </Tabs.TabPane>
        </Tabs>

        <br />
        <br />
        <br />

        <h3 style={{ fontFamily: "CeraPro Medium", textAlign: "center" }}>
          {" "}
          <b>Note :</b> After successful payment, kindly send Transaction Id or
          Screenshot of online payment to Whatsapp number - 9450751307 or
          9721798485
        </h3>
      </Container>

      <br />
      <br />
    </LayoutOne>
  );
}
