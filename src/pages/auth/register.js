import { Form, Input, Button, Upload, Row, Col, Select, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import axios from "axios";
import state from "../../data/city.json";

import { Link } from "react-router-dom";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";

const Register = () => {
  const [loadings, setLoadings] = useState(false);
  const [path, setPath] = useState("");

  const props = {
    name: "profileImage",
    action: "http://3.93.234.190:3000/upload/profileImage",

    onChange(info) {
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        console.log(info.file.response.path);
        setPath(info.file.response.path);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const onFinish = (values) => {
    var image = { profileImage: path };
    values = { ...values, ...image };
    setLoadings(true);
    console.log("Success:", values);

    axios
      .post("http://3.93.234.190:3000/users/signup", values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const loginData = ["adhaarNumber", "password"];
          const filteredData = Object.keys(values)
            .filter((key) => loginData.includes(key))
            .reduce((obj, key) => {
              obj[key] = values[key];
              return obj;
            }, {});

          axios
            .post("http://3.93.234.190:3000/users/login", filteredData)
            .then(function (response) {
              const result = "token" in response.data;
              message.success(`Welcome`);
              if (result) {
                const { token } = response.data;
                localStorage.setItem("token", token);
                console.log(token);
                setLoadings(false);
                window.location = "/downloads/card";
              }
            });
        }
        setLoadings(false);
      })
      .catch((err) => {
        setLoadings(false);
        console.log(err);
      });
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
                  <Row gutter={15}>
                    <Col span={24}>
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
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Father's Name"
                        name="fatherName"
                        rules={[
                          {
                            required: true,
                            message: "Father's name is required",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        name="phoneNumber"
                        label="Phone Number"
                        rules={[
                          {
                            required: true,
                            message: "Please input your phone number!",
                          },
                        ]}
                      >
                        <Input
                          addonBefore={"+91"}
                          style={{ width: "100%" }}
                          size="large"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Adhaar Number"
                        name="adhaarNumber"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Adhaar!",
                          },
                        ]}
                      >
                        <Input maxLength="12" />
                      </Form.Item>
                    </Col>
                    <Col span={24} sm={12}>
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
                    </Col>
                    <Col span={24} sm={12}>
                      <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[
                          {
                            required: true,
                            message: "Please select your gender!",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          placeholder="Select"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        >
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} sm={12}>
                      <Form.Item
                        label="State"
                        name="state"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your State!",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          placeholder="Select state"
                          optionFilterProp="children"
                          size="large"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        >
                          {state.state.map((item) => (
                            <Select.Option value={item}>{item}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>
                    <Col span={24} sm={12}>
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
                          placeholder="Select district"
                          optionFilterProp="children"
                          size="large"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        >
                          {state.districts.map((item) => (
                            <Select.Option value={item}>{item}</Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </Col>

                    <Col span={24} sm={12}>
                      <Form.Item
                        label="Pincode"
                        name="pinCode"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your full name",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={24} sm={12}>
                      <Form.Item label="Upload">
                        <Upload {...props} maxCount={1} accept="image/*">
                          <Button icon={<UploadOutlined />}>
                            Click to Upload
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item label="Full Address" name="address">
                        <Input.TextArea
                          autoSize
                          allowClear="true"
                          size="large"
                        />
                      </Form.Item>
                      <Col span={24}>
                        <Form.Item label="Email" name="email">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Col>
                    <Col span={24}>
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
                    </Col>
                    <Col span={24}>
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
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
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
                    </Col>
                    <Col span={24}>
                      <Form.Item className="form-submit">
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loadings}
                        >
                          Register
                        </Button>
                        <Button type="link">
                          <Link to={process.env.PUBLIC_URL + "/auth/login"}>
                            <a>OR Login</a>
                          </Link>
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
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
