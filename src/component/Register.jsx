import React, { useState } from "react";
import axios from "../sevice/axios";
import Api from "../sevice/Api";
import moment from "moment";
import responseHandleSrv from "../sevice/responseHandle";
import Header from "./extension/Header";
import FooterPage from "./extension/FooterPage";
import { Input, Form, Button, Radio, DatePicker, Checkbox } from "antd";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [disableBtn, seDisableBtn] = useState(true);

  const root = window.location.origin;
  const genderOptions = [
    {
      label: "ชาย",
      value: "male",
    },
    {
      label: "หญิง",
      value: "female",
    },
    {
      label: "ไม่ระบุ",
      value: "other",
    },
  ];

  const onFinish = (values) => {
    const selectedDate = values.birthday;
    const formattedDate = moment(selectedDate).format("YYYY-MM-DD");

    let params = {
      Password: values.password !== undefined ? values.password : null,
      FirstName: values.firstName !== undefined ? values.firstName : null,
      LastName: values.lastName !== undefined ? values.lastName : null,
      Telephone: values.phone !== undefined ? values.phone : null,
      Email: values.email !== undefined ? values.email : null,
      Gender: values.gender !== undefined ? values.gender : null,
      BirthDay: values.birthday !== undefined ? formattedDate : null,
      IsActive: 1,
    };
    console.log(params);

    (async () => {
      setIsLoading(true);
      await axios
        .post(`${Api.USER_REGISTER}`, params)
        .then((response) => {
          if (response.data.success === true) {
            if (typeof Storage !== "undefined") {
              localStorage.user = JSON.stringify(response.data.data);
            }
            window.location.href = `${root}/login`;
          }
        })
        .catch((err) => {
          setIsLoading(false);
          responseHandleSrv.handleError(err);
        });
    })();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeCheckbox = (check) => {
    let checkAccept = check.find((a) => a == "accept1");
    if (checkAccept) {
      seDisableBtn(false);
    } else {
      seDisableBtn(true);
    }
  };
  return (
    <div className="content">
      <Header />
      <div className="page-content">
        <div className="formCard">
          <div className="card-banner">
            <div style={{ fontSize: "32px", fontWeight: "800" }}>
              สร้างบัญชี
            </div>
            <div>สมัครสมาชิกและเริ่มต้นใช้งาน</div>
          </div>
          <Form
            layout="vertical"
            className="form-main"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{ gender: "other" }}
          >
            <div className="dfc">
              <div>
                <div className="form-pd-label">ชื่อ</div>
                <Form.Item
                  name="firstName"
                  style={{ paddingRight: "5px" }}
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกอย่างน้อย 2 ตัวอักษร",
                      len: "2",
                    },
                  ]}
                >
                  <Input placeholder="กรอกชื่อ" size="large" />
                </Form.Item>
              </div>
              <div>
                <div className="form-pd-label">นามสกุล</div>
                <Form.Item
                  name="lastName"
                  style={{ paddingLeft: "5px" }}
                  rules={[
                    {
                      required: true,
                      message: "กรุณากรอกอย่างน้อย 2 ตัวอักษร",
                      len: "2",
                    },
                  ]}
                >
                  <Input placeholder="กรอกนามสกุล" size="large" />
                </Form.Item>
              </div>
            </div>
            <div className="form-pd-label">เบอร์โทรศัพท์</div>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "กรุณากรอกเบอร์โทรศัพท์",
                },
                {
                  pattern: /^[0][0-9]{8,9}$\b/,
                  message: "กรุณากรอกเบอร์โทรศัพท์",
                },
              ]}
            >
              <Input placeholder="กรอกเบอร์โทรศัพท์" size="large" />
            </Form.Item>
            <div className="form-pd-label">อีเมล</div>
            <Form.Item name="email">
              <Input
                placeholder="อีเมล"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "กรุณากรอกอีเมล",
                  },
                  {
                    pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "อีเมลไม่ถูกต้อง",
                  },
                ]}
              />
            </Form.Item>
            <div className="sRed" style={{ paddingBottom: "10px" }}>
              กรุณาตรวจสอบอีเมลที่ระบุให้ถูกต้อง
            </div>
            <div className="form-pd-label">รหัสผ่าน</div>
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
              <Input.Password placeholder="รหัสผ่าน" size="large" />
            </Form.Item>
            <div className="form-pd-label">เพศ (ไม่ระบุได้)</div>
            <Form.Item name="gender" className="register-form-item">
              <Radio.Group
                options={genderOptions}
                optionType="button"
                size="large"
                className="register-radio-group"
              />
            </Form.Item>
            <div className="form-pd-label">ของขวัญวันเกิดรอคุณอยู่</div>
            <Form.Item name="birthday">
              <DatePicker
                placeholder="dd/mm/yyyy"
                size="large"
                className="register-form-item"
                format="DD-MM-YYYY"
              />
            </Form.Item>
            <Form.Item name="checkbox-group">
              <Checkbox.Group onChange={onChangeCheckbox}>
                <div className="chkBox-orgz">
                  <Checkbox value="accept1" className="chkbox-item" />
                  <div>
                    ฉันได้อ่านและยอมรับ&nbsp;
                    <span className="sRed">ข้อกำหนดการใช้งาน</span>
                    &nbsp;และ&nbsp;
                    <span className="sRed">นโยบายความเป็นส่วนตัว</span>
                    &nbsp;ของสเวนเซ่นส์
                  </div>
                </div>
                <div className="chkBox-orgz">
                  <Checkbox value="accept2" className="chkbox-item" />
                  <div>
                    ฉันยินยอมรับข้อมูลข่าวสาร&nbsp;กิจกรรมส่งเสริมการขายต่างๆ
                    จากสเวนเซ่นส์และ<span className="sRed">บริษัทในเครือ</span>
                    โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ
                    &nbsp;สามารถศึกษาเงื่อนไขหรือข้อตกลง&nbsp;
                    <span className="sRed">นโยบายความเป็นส่วนตัว</span>
                    เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ
                  </div>
                </div>
              </Checkbox.Group>
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              shape="round"
              className="btn sRed-primary onFinishBtn"
              disabled={disableBtn}
            >
              สมัครสมาชิก
            </Button>
          </Form>
        </div>
      </div>
      <div style={{ paddingTop: "40px", backgroundColor: "#f4f4f4" }}>
        <FooterPage />
      </div>
    </div>
  );
}
