import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";

const mainNav = [
  {
    display: "Trang Chủ",
    path: "/",
  },
  {
    display: "Sản Phẩm",
    path: "/catalog",
  },
  {
    display: "Phụ Kiện",
    path: "/accessories",
  },
  {
    display: "Liên Hệ",
    path: "/contact",
  },
];

const Header = () => {
  //Highlight chữ khi active nav
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  //Thêm shrink khi cuộn
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
    return () => {
      window.removeEventListener("scroll",()=>{});
    };
  }, []);

  //toggle menu
  const menuleft = useRef(null);

  const menutoggle = () => menuleft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="ttsneaker logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div
            className="header__menu__mobile-toggle "
            onClick={menutoggle}
          ></div>
          <div className="header__menu__left " ref={menuleft}>
            <div className="header__menu__left-close" onClick={menutoggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__left__item header__menu__item 
                                 ${index === activeNav ? "active" : ""}`}
                onClick={menutoggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <Link to="/login">
                <i className="bx bx-user"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
