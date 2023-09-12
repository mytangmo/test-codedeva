import React, { useState } from "react";
import axios from "../sevice/axios";
import Api from "../sevice/Api";
import responseHandleSrv from "../sevice/responseHandle";
import Header from "./extension/Header";
import FooterPage from "./extension/FooterPage";
import { Input, Form, Button } from "antd";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [eLenght, setELenght] = useState(false);
  const [pLenght, setPLenght] = useState(false);

  const root = window.location.origin;

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsLoading(true);
    if (values.email && values.password) {
      (async () => {
        await axios
          .post(`${Api.USER_LOGIN}`, {
            Email: values.email,
            Password: values.password,
          })
          .then((response) => {
            if (response.data.success === true) {
              if (typeof Storage !== "undefined") {
                localStorage.user = JSON.stringify(response.data.data);
              }
              window.location.href = `${root}/`;
            }
          })
          .catch((error) => {
            setIsLoading(false);
            responseHandleSrv.handleError(error);
          });
      })();
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeEmail = (e) => {
    if (e.target.value) {
      setELenght(true);
    }
  };

  const onChangePass = (e) => {
    if (e.target.value) {
      setPLenght(true);
    } else {
      setPLenght(false);
    }
  };
  return (
    <div className="content">
      <Header />
      <div className="page-content">
        <div className="formCard">
          <div className="card-banner">
            <div style={{ fontSize: "32px", fontWeight: "800" }}>
              ยินดีต้อนรับ
            </div>
            <div>เข้าสู่ระบบเพื่อใช้งาน</div>
          </div>
          <Form
            layout="vertical"
            className="form-main"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item label="อีเมล" name="email">
              <Input
                placeholder="อีเมล"
                size="large"
                onChange={onChangeEmail}
              />
            </Form.Item>
            <div style={{ paddingBottom: "8px" }}>รหัสผ่าน</div>
            <Form.Item
              name="password"
              className="hide-required"
              rules={[
                {
                  required: true,
                  message: "ตั้งรหัสผ่านอย่างน้อย 8 ตัว",
                  len: "8",
                },
              ]}
            >
              <Input.Password
                placeholder="รหัสผ่าน"
                size="large"
                onChange={onChangePass}
              />
            </Form.Item>
            <Button
              type="link"
              danger
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin: "0px 0px 20px 0px",
              }}
            >
              ลืมรหัสผ่าน
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              shape="round"
              className="btn sRed-primary onFinishBtn"
              disabled={eLenght == true && pLenght == true ? false : true}
            >
              เข้าสู่ระบบ
            </Button>
          </Form>
        </div>
      </div>
      <div style={{ paddingTop: "40px" }}>
        <FooterPage />
      </div>
    </div>
  );
}
