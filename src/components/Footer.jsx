import React from "react";

import { Link } from "react-router-dom";

import Grid from "./Grid";

import logo from "../assets/images/logo.png";

const FooterAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about",
  },
  {
    display: "Liên hệ",
    path: "/about",
  },
  {
    display: "Tuyển dụng",
    path: "/about",
  },
  {
    display: "Tin tức",
    path: "/about",
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about",
  },
];

const FooterCustomerLinks = [
  {
    display: "Chính sách đổi trả",
    path: "/about",
  },
  {
    display: "Chính sách bảo hành",
    path: "/about",
  },
  {
    display: "Chính sách hoàn tiền",
    path: "/about",
  },
  {
    display: "Chính sách cho khách hàng VIP",
    path: "/about",
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto,
              ipsam libero. Vel hic iusto eius odit voluptatibus quisquam culpa
              distinctio reiciendis ad inventore et, vero
            </p>
          </div>

          <div>
            <div className="footer__title">Về TTsneaker</div>
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
                Liên hệ đặt hàng <strong>0345889755</strong>
              </p>
              <p>
                Thắc mắc đơn hàng <strong>0345889755</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>0345889755</strong>
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
