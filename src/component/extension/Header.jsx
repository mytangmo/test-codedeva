import React, { useState } from "react";
import auth from "../../sevice/auth";
import { Button, Form, Dropdown, Drawer, Menu } from "antd";
import RedLogo from "../../../src/img/swensens_logo.svg";
import { MdLocationOn } from "react-icons/md";
import {
  AiFillCaretDown,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineStar,
  AiOutlineFile,
  AiOutlineUser,
  AiOutlineCreditCard,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { HiInbox } from "react-icons/hi2";
import { lineHeight } from "@mui/system";
import { Link } from "react-router-dom";

function getItem(key, icon, label, children, type) {
  return { key, icon, children, label, type };
}
const menuItems = [
  getItem("0", <HiInbox />, "ข้อความ"),
  getItem("1", <AiOutlineFile />, "ออเดอร์"),
  getItem("sub1", <AiOutlineStar />, "สิทธิพิเศษ", [
    getItem("2", "คะแนนของฉัน"),
    getItem("3", "คูปองของฉัน"),
    getItem("4", "รีวอร์ด"),
    getItem("5", "บัตรของรางวัล"),
  ]),
  getItem("6", <AiOutlineCreditCard />, "บัตรสเวนเซ่นส์การ์ด"),
  getItem("sub2", <AiOutlineUser />, "ข้อมูลของฉัน", [
    getItem("7", "ข้อมูลส่วนตัว"),
    getItem("8", "สมุดที่อยุ่"),
    getItem("9", "บัตรเครดิตของฉัน"),
    getItem("10", "เปลี่ยนรหัสผ่าน"),
    getItem("11", "ย้ายข้อมูลจากระบบเว็ปไซต์เดิม"),
  ]),
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const currUser = auth.getCurrentUser();

  const LogOut = () => {
    auth.logout();
  };

  const items = [
    {
      label: <a>TH</a>,
      key: "0",
    },
    {
      label: <a>EN</a>,
      key: "1",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="Header">
      <div className="redLogo">
        <Link to={{ pathname: "/" }}>
          <img src={RedLogo} style={{ height: "1.7em" }} />
        </Link>
        <div className="headerBtn-orgz">
          <div className="btn-addr-orgz">
            <MdLocationOn />
            <Button type="link" className="btn-addr">
              <div className="df-centerY">
                กรุณาเลือกที่อยู่จัดส่ง
                <AiFillCaretDown style={{ marginLeft: "2em" }} />
              </div>
            </Button>
          </div>

          {currUser ? (
            <div className="df-centerY">
              <Button
                shape="round"
                className="btn sRed-outline"
                style={{ margin: "0px 14px" }}
              >
                <div className="df-centerXY">
                  <BsQrCodeScan style={{ fontSize: "22px" }} />
                  &nbsp;&nbsp;&nbsp;แสกน
                </div>
              </Button>
              <AiOutlineShopping className="header-icons" />
              <AiOutlineHeart className="header-icons" />
              <HiInbox className="header-icons" />
              <AiOutlineMenu className="header-icons" onClick={showDrawer} />
              <div>
                <Drawer
                  placement="right"
                  onClose={onClose}
                  open={open}
                  closeIcon={null}
                  className="header-drawer"
                >
                  <div className="dfc-spaceBtw">
                    <div>
                      <div style={{ padding: " 24px" }}>
                        <h2
                          style={{
                            fontSize: "24px",
                            margin: "0",
                            lineHeight: "1.33",
                            color: "#000",
                          }}
                        >
                          ยินดีต้อนรับ
                          <span style={{ color: "#000" }}>☺</span> 🍨️
                        </h2>
                        <div
                          className="sRed"
                          style={{ fontSize: "22px", lineHeight: "1.2" }}
                        >
                          {currUser.FirstName}&nbsp;{currUser.LastName}
                        </div>
                      </div>
                      <Menu
                        onClick={onClick}
                        mode="inline"
                        items={menuItems}
                        className="header-menu"
                      />
                    </div>
                    <Button
                      type="link"
                      onClick={LogOut}
                      className="header-logout"
                    >
                      <AiOutlineLogout className="logout-icon" />
                      &nbsp;&nbsp;&nbsp;ออกจากระบบ
                    </Button>
                  </div>
                </Drawer>
              </div>
            </div>
          ) : (
            <div className="df-centerY">
              <div>
                <Link to={{ pathname: "/register" }}>
                  <Button
                    shape="round"
                    className="btn sRed-outline noCurrBtn"
                    style={{ margin: "0px 14px" }}
                  >
                    สมัครสมาชิก
                  </Button>
                </Link>
                <Link to={{ pathname: "/login" }}>
                  <Button
                    type="primay"
                    shape="round"
                    className="btn sRed-primary noCurrBtn"
                    style={{ margin: "0px 16px" }}
                  >
                    เข้าสู่ระบบ
                  </Button>
                </Link>
              </div>
              <div>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Button type="link" className="btn-addr">
                      TH&nbsp;&nbsp;&nbsp;
                      <AiFillCaretDown />
                    </Button>
                  </a>
                </Dropdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
