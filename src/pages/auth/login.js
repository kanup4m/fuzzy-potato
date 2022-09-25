import { Form, Input, Button, message, Row, Col, Modal, Space } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";

const Login = () => {
  const [loadings, setLoadings] = useState(false);

  const onFinish = (values) => {
    setLoadings(true);
    console.log("Success:", values);
    localStorage.setItem("phoneNumber", values.phoneNumber);
    axios
      .post("https://yugsrijetaup.com/api/users/login", values)
      .then(function (response) {
        const result = "token" in response.data;
        if (result) {
          const { token, isApproved, isAdmin } = response.data;
          localStorage.setItem("token", token);
          localStorage.setItem("isApproved", isApproved);
          localStorage.setItem("isAdmin", isAdmin);
          message.success("Welcome");
          setLoadings(false);
          window.location = "/";
        }
      })
      .catch(function (error) {
        setLoadings(false);
        console.log(error.response.data.message);
        message.error(`${error.response.data.message}`);
      });
  };

  const onFinishFailed = (errorInfo) => {
    setLoadings(false);
    console.log("Failed:", errorInfo);
  };

  return (
    <LayoutOne title="Login">
      <Container>
        <div className="auth">
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <h2>Login</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="login"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Mobile No."
                    name="phoneNumber"
                    rules={[
                      {
                        required: true,
                        pattern: new RegExp(/^[0-9]\d{9}$/gm),
                        message: "Please enter correct number",
                      },
                    ]}
                  >
                    <Input addonBefore={"+91"} maxLength="10" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>

                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit" loading={loadings}>
                      Signin
                    </Button>
                    <Button type="link">
                      <Link to={"/auth/register"}>
                        <a>OR CREATE AN ACCOUNT</a>
                      </Link>
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </LayoutOne>
  );
};

export default Login;
