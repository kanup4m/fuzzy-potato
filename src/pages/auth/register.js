import { Form, Input, Button, Upload, Row, Col, Select, message } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import axios from 'axios'
import state from '../../data/city.json'

import { Link } from "react-router-dom";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";

const Register = () => {

  const [loadings, setLoadings] = useState(false);

  const props = {
    beforeUpload(file) {
      return false
    },
    onChange(info) {
      console.log(info.file)
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {

    setLoadings(true)
    console.log("Success:", values);
    // axios.post('http://3.93.234.190:3000/users/signup', values)
    //   .then(function (response) {
    //     const result = 'token' in response.data;
    //     if (result) {
    //       const { token } = response.data
    //       localStorage.setItem('token', token)
    //       console.log(token);
    //       setLoadings(false)
    //       window.location = '/';
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     // message.error(`${error.response.data.message}`);
    //     setLoadings(false)
    //   });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <LayoutOne title="Register">
      <Container>
        <div className="auth">
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <h2>Register new account</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="register"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input addonBefore={"+91"} style={{ width: '100%' }} size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Age"
                    name="age"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Gender"
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Pincode"
                    name="pincode"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your full name",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item label="Adhaar Number" name="adhaar" rules={[
                    {
                      required: true,
                      message: "Please enter your Adhaar!",
                    },
                  ]}>
                    <Input maxLength="12" />
                  </Form.Item>
                  <Form.Item
                    label="District"
                    name="district"
                    rules={[
                      {
                        required: true,
                        message: "Please enter your district!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Select a person"
                      optionFilterProp="children"
                      filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                    >
                      {state.districts.map((item) => (
                        <Select.Option value={item}>{item}</Select.Option>
                      ))}

                    </Select>
                  </Form.Item>

                  <Form.Item label="Full Address" name="address" rules={[
                    {
                      required: true,
                      message: "Please enter Full Address!",
                    },
                  ]}>
                    <Input.TextArea autoSize allowClear="true" size="large" />
                  </Form.Item>
                  <Form.Item label="Upload" name="profileImage">
                    <Upload {...props} maxCount={1} accept="image/*">
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
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
                    <Input.Password size="small" />
                  </Form.Item>
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords that you entered do not match!"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password size="small" />
                  </Form.Item>

                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit" loading={loadings}>
                      Register
                    </Button>
                    <Button type="link">
                      <Link to={process.env.PUBLIC_URL + "/auth/login"}>
                        <a>OR Login</a>
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

export default Register;