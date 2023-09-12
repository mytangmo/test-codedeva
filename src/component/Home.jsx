import React from "react";
import Slider from "react-slick";
import Header from "./extension/Header";
import FooterPage from "./extension/FooterPage";
import Banner from "../img/banner-image.svg";
import { Grid } from "@mui/material";
import BannerBT from "../img/app-screen-webp.webp";
import Google from "../img/google-play.png";
import Appstore from "../img/app-store.png";
import Promotion1 from "../img/promotion-one.jpg";
import Promotion2 from "../img/promotion-two.jpg";
import Promotion3 from "../img/coupon1.png";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Header />
      <div className="page-banner ">
        <div className="home-banner">
          <div className="home-banner-orgz">
            <Grid container className="page-container">
              <Grid item xs="12" sm="12" md="12" lg="6" className="header-orgz">
                <div className="banner-header">
                  <div>สมัครเป็นสมาชิก</div>
                  <div>
                    สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
                  </div>
                </div>
                <div className="banner-description">
                  พิเศษสุดๆ! สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้ ยิ่งคุ้ม
                  ใครๆ ก็สมัครได้
                  ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ
                  รอไม่ได้แล้ว สมัครเลย
                </div>
                <div className="banner-delivery" />
              </Grid>
              <Grid item xs="12" sm="12" md="12" lg="6" className="img-orgz">
                <img src={Banner} className="banner-img" />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="honme-main-orgz">
          <div className="main-header">ดีลสุดคุ้ม</div>
          <div>
            <Slider {...settings}>
              <div className="main-silde">
                <img src={Promotion1} className="slide-list" />
              </div>
              <div className="main-silde">
                <img src={Promotion2} className="slide-list" />
              </div>
              <div className="main-silde">
                <img src={Promotion3} className="slide-list" />
              </div>
            </Slider>
          </div>
          <div className="main-header">ข่าว</div>
          <div></div>
        </div>
      </div>
      <div className="banner-bottom">
        <div className="banner-bottom-orgz">
          <Grid container className="banner-inner-orgz">
            <Grid item xs="12" sm="12" md="12" lg="6" className="df-centerX">
              <img src={BannerBT} className="phone"/>
            </Grid>
            <Grid item xs="12" sm="12" md="16" lg="6">
              <div className="download-header">ดาวน์โหลดที่</div>
              <div className="df">
                <img src={Google} className="download" />
                <img src={Appstore} className="download" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <FooterPage />
    </div>
  );
}
