import {
  Form,
  Input,
  Button,
  Upload,
  Row,
  Col,
  Select,
  message,
  Modal,
  Space,
  DatePicker,
} from "antd";
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
  const [date, setDate] = useState("");
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const info = () => {
    Modal.success({
      okText: "OK",
      title: "Registration Successful",
      content: (
        <div>
          <p>Your details are under verification.</p>
          <p>Please login after 48 hours to download ID Card.</p>
        </div>
      ),
      onOk() {
        window.location = "/";
      },
    });
  };

  const error = () => {
    Modal.error({
      okText: "Close",
      title: "Something went wrong",
      onOk() {},
    });
  };

  // const props = {
  //   name: "profileImage",
  //   action: "http://3.93.234.190:3000/upload/profileImage",

  //   onChange(info) {
  //     if (info.file.status === "done") {
  //       message.success(`${info.file.name} file uploaded successfully`);
  //       console.log(info.file.response.path);
  //       setPath(info.file.response.path);
  //     } else if (info.file.status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  // };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      if (file.size < 211979) {
        setFileList([...fileList, file]);
      } else {
        message.error(`Profile Image should be less than 200 kb`);
      }
      return false;
    },
    fileList,
  };

  const dateChange = (date, dateString) => {
    console.log(dateString);
    setDate(dateString);
  };

  const onFinish = (values) => {
    setLoadings(true);

    const formData = new FormData();
    formData.append("profileImage", fileList[0]);
    setUploading(true);

    fetch("https://yugsrijetaup.com/api/upload/profileImage", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setFileList([]);
        console.log(res.path);
        var image = { profileImage: res.path, dob: date };
        values = { ...values, ...image };
        if (values.address === undefined || values.address.length === 0) {
          delete values.address;
        }
        if (values.email === undefined || values.email.length === 0) {
          delete values.email;
        }

        console.log("Success:", values);

        axios
          .post("https://yugsrijetaup.com/api/users/signup", values)
          .then((res) => {
            console.log(res);
            info();
          })
          .catch((err) => {
            console.log(err);
            if (
              err.response.data.error.message !== null ||
              err.response.data.error.message !== undefined
            ) {
              message.error(err.response.data.error.message);
            } else {
              error();
            }
          })
          .finally(() => {
            setLoadings(false);
          });
      })
      .catch(() => {
        message.error("Profile Image upload failed.");
      })
      .finally(() => {
        setUploading(false);
        setLoadings(false);
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
                            pattern: new RegExp(/^[6-9]\d{9}$/gm),
                            message: "Please enter correct phone number!",
                          },
                        ]}
                      >
                        <Input
                          addonBefore={"+91"}
                          style={{ width: "100%" }}
                          size="large"
                          maxLength="10"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24} sm={12}>
                      <Form.Item
                        name="dob"
                        label="Date of Birth"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your DOB",
                          },
                        ]}
                      >
                        <DatePicker
                          size="large"
                          onChange={dateChange}
                          required
                        />
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
                          size="large"
                          placeholder="Select Gender"
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
                            <Select.Option key={item} value={item}>
                              {item}
                            </Select.Option>
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
                            message: "Please enter your pincode",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </Col>

                    <Col span={24} sm={12}>
                      <Form.Item
                        label="Upload"
                        name="profileImage"
                        rules={[
                          {
                            required: true,
                            message: "Please upload an image",
                          },
                        ]}
                      >
                        <Upload
                          {...props}
                          maxCount={1}
                          accept="image/*"
                          required
                        >
                          <Button icon={<UploadOutlined />}>
                            Click to Upload
                          </Button>
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Full Address"
                        name="address"
                        requiredMark="optional"
                      >
                        <Input.TextArea
                          autoSize
                          allowClear="true"
                          size="large"
                          placeholder="Optional"
                        />
                      </Form.Item>
                    </Col>
                    <Col span={24}>
                      <Form.Item
                        label="Email"
                        name="email"
                        requiredMark="optional"
                      >
                        <Input size="large" placeholder="Optional" />
                      </Form.Item>
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
                          <Link to={"/auth/login"}>
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
