import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  Upload,
  Select,
  Tabs,
  message,
} from "antd";
import { Link } from "react-router-dom";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

import LayoutOne from "../../components/layout/LayoutOne";
import SectionTitle from "../../components/other/SectionTitle";
import Container from "../../components/other/Container";

const { Option } = Select;

export default function Update() {
  const [form] = Form.useForm();

  const [loadings, setLoadings] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [phone, setPhone] = useState("");
  const [profilePhone, setProfilePhone] = useState("");
  const [otherPhone, setOtherPhone] = useState("");

  const onChange = (e) => {
    setPhone(e.target.value);
  };

  const onChangeImageInput = (e) => {
    setProfilePhone(e.target.value);
  };

  const onChangeOtherInput = (e) => {
    setOtherPhone(e.target.value);
  };

  const updatePassword = (values) => {
    setLoadings(true);
    axios
      .patch(`https://yugsrijetaup.com/api/users/updatePwd/${phone}`, values)
      .then(function (response) {
        const result = response.data.message;
        if (result === "Password Updated Successfully") {
          message.success("Password Updated Successfully");
          setLoadings(false);
          form.resetFields();
        }
      })
      .catch(function (error) {
        setLoadings(false);
        message.error(`${error.response.data.message}`);
      });
  };

  const updateProfileImage = (values) => {
    setLoadings(true);
    const formData = new FormData();
    formData.append("profileImage", fileList[0]);

    axios
      .post("https://yugsrijetaup.com/api/upload/profileImage", formData)
      .then(function (response) {
        setFileList([]);
        var image = { profileImage: response.data.path };
        axios
          .patch(
            `https://yugsrijetaup.com/api/users/update/${profilePhone}`,
            image
          )
          .then(function (response) {
            const result = response.data.message;
            if (result === "Details Updated Successfully") {
              message.success("Profile picture Successfully");
              setLoadings(false);
              form.resetFields();
            }
          })
          .catch(function (error) {
            setLoadings(false);
            message.success("Something went wrong");
          });
      })
      .catch(function (error) {
        setLoadings(false);
        message.error(`${error.response.data.message}`);
      });
  };

  const updateOtherDetails = (values) => {
    setLoadings(true);
    const { key, value } = values;
    const data = { [key]: value };
    console.log(data);
    axios
      .patch(`https://yugsrijetaup.com/api/users/update/${otherPhone}`, data)
      .then(function (response) {
        console.log(response.data);
        const result = response.data.message;
        if (result === "Details Updated Successfully") {
          message.success("Details Updated Successfully");
          setLoadings(false);
          form.resetFields();
        }
      })
      .catch(function (error) {
        setLoadings(false);
        message.error(`${error.response.data.message}`);
      });
  };

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

  return (
    <LayoutOne title="Homepage 2">
      <SectionTitle title="Update Details" className="-center" />
      <Container>
        <Tabs defaultActiveKey="1" centered type="card" size="large">
          <Tabs.TabPane tab="Password" key="1">
            <br />
            <br />

            <div
              className="auth"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Row>
                <Col xs={24} md={{ span: 24 }}>
                  <h2>Update password</h2>
                  <div className="auth-form">
                    <Form
                      layout="vertical"
                      name="login"
                      form={form}
                      onFinish={updatePassword}
                    >
                      <Form.Item
                        label="Mobile No."
                        onChange={onChange}
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
                        <Input.Password />
                      </Form.Item>

                      <Form.Item className="form-submit">
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loadings}
                        >
                          Change Password
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Photo" key="2">
            <br />
            <br />

            <div
              className="auth"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Row>
                <Col xs={24} md={{ span: 24 }}>
                  <h2>Update Profile Image</h2>
                  <div className="auth-form">
                    <Form
                      layout="vertical"
                      name="login"
                      onFinish={updateProfileImage}
                    >
                      <Form.Item
                        label="Mobile No."
                        onChange={onChangeImageInput}
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

                      <Form.Item className="form-submit">
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loadings}
                        >
                          Change Profile Image
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Tabs.TabPane>

          <Tabs.TabPane tab="Other Details" key="3">
            <br />
            <br />

            <div
              className="auth"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Row>
                <Col xs={24} md={{ span: 24 }}>
                  <h2>Update Other Details</h2>
                  <div className="auth-form">
                    <Form
                      layout="vertical"
                      name="login"
                      onFinish={updateOtherDetails}
                    >
                      <Form.Item
                        label="Mobile No."
                        onChange={onChangeOtherInput}
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
                        label="Select key to update"
                        name="key"
                        rules={[
                          {
                            required: true,
                            message: "Please select a key to update",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          placeholder="Select a person"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .includes(input.toLowerCase())
                          }
                        >
                          <Option value="name">Name</Option>
                          <Option value="fatherName">Father's Name</Option>
                          <Option value="email">Email</Option>
                          <Option value="state">State</Option>
                          <Option value="dob">Date of Birth</Option>
                          <Option value="pinCode">Pincode</Option>
                          <Option value="district">District</Option>
                          <Option value="address">Full address</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item
                        label="New Data"
                        name="value"
                        rules={[
                          {
                            required: true,
                            message: "Please enter new data",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item className="form-submit">
                        <Button
                          type="primary"
                          htmlType="submit"
                          loading={loadings}
                        >
                          Update Details
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Tabs.TabPane>
        </Tabs>

        <br />
        <br />
      </Container>

      <br />
      <br />
    </LayoutOne>
  );
}
