import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo.png";

const FooterAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/ve-chung-toi",
  },
  {
    display: "Liên hệ",
    path: "/lien-he",
  },
  {
    display: "Tuyển dụng",
    path: "/lien-he",
  },
  {
    display: "Tin tức",
    path: "/lien-he",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/lien-he",
  },
];

const FooterCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/lien-he",
  },
  {
    display: "Chính sách bảo hành",
    path: "/lien-he",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/lien-he",
  },
  {
    display: "Chính sách cho khách hàng VIP",
    path: "/lien-he",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Grid col={4} mdCol={2} smCol={1} gap={15}>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="ttsneaker logo" />
              </Link>
            </p>
          </div>

          <div>
            <div className="footer__title">Về Chúng tôi</div>
            <div className="footer__content">
              {FooterAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {FooterCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <div className="footer__title">Tổng đài hổ trợ</div>
            <div className="footer__content">
              <p>
                Liên hệ đặt hàng <strong>0868326207</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0868326207</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0868326207</strong>
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
