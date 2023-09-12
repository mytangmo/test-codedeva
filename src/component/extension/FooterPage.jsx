import React from "react";
import WhiteLogo from "../../../src/img/swensens_white_logo.svg";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Button } from "antd";

export default function FooterPage() {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={WhiteLogo} className="footer-logo" />
        <div className="footer-list">
          <Button type="link" className="footer-list-item">
            ไอศกรีมของเรา
          </Button>
          <Button type="link" className="footer-list-item">
            สิทธิพิเศษ
          </Button>
          <Button type="link" className="footer-list-item">
            รีวอร์ด
          </Button>
          <Button type="link" className="footer-list-item">
            คูปองของฉัน
          </Button>
          <Button type="link" className="footer-list-item">
            บัตรของรางขวัญ
          </Button>
          <Button type="link" className="footer-list-item">
            บัตรสเวนเซ่นส์การ์ด
          </Button>
          <Button type="link" className="footer-list-item">
            ข้อมูลของฉัน
          </Button>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-icon">
          <Button
            shape="circle"
            className="footer-icon-list"
            icon={<BsFacebook />}
          />
          <Button
            shape="circle"
            className="footer-icon-list"
            icon={<BsInstagram />}
          />
          <Button
            shape="circle"
            className="footer-icon-list"
            icon={<BsYoutube />}
          />
        </div>
        <div className="">
          <Button type="link" className="footer-buttom-list-item">
            คำถามที่พบบ่อย
          </Button>
          <Button type="link" className="footer-buttom-list-item">
            ข้อกำหนดการใช้งาน
          </Button>
          <Button type="link" className="footer-buttom-list-item">
            นโยบายความเป็นส่วนตัว
          </Button>
        </div>
      </div>
    </div>
  );
}
