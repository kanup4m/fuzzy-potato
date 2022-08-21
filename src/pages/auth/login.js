import { Breadcrumb, Form, Input, Button, message, Row, Col } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";

const Login = () => {

  const [loadings, setLoadings] = useState(false);

  const onFinish = (values) => {
    setLoadings(true)
    console.log("Success:", values);
    axios.post('http://3.93.234.190:3000/users/login', values)
      .then(function (response) {
        const result = 'token' in response.data;
        message.success(`Welcome`);
        if (result) {
          const { token } = response.data
          localStorage.setItem('token', token)
          console.log(token);
          setLoadings(false)
          window.location = '/';
        }
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        message.error(`${error.response.data.message}`);
        setLoadings(false)
      });

  };

  const onFinishFailed = (errorInfo) => {
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
                    label="Adhaar Number"
                    name="adhaarNumber"
                    rules={[
                      {
                        required: true,
                        message: "Adhaar Number is required!",
                      },
                    ]}
                  >
                    <Input />
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
                  {/* <Form.Item
                    className="form-functions"
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Button type="link">Forget your password</Button>
                  </Form.Item> */}
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit" loading={loadings}>
                      Signin
                    </Button>
                    <Button type="link">
                      <Link to={process.env.PUBLIC_URL + "/auth/register"}>
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
