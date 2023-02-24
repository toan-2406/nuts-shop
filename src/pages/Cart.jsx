import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import productData from "../assets/fake-data/products";

import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import Button from "../components/Button";
import numberWithCommas from "../utils/numberWithCommas";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProduct, setCartProduct] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItemDetails(cartItems));
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      )
    );
  }, [cartItems]);
  return (
    <Helmet title="Giỏ hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>
              Bạn hiện đang có <strong>{totalProducts}</strong> trong giỏ hàng
            </p>
            <div className="cart__info__txt__price">
              <span>Thành tiền</span>
              <span>{numberWithCommas(totalPrice)} đ</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="sm">Đặt hàng</Button>
            <Link to="/catalog">
              <Button size="sm">Tiếp tục mua hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProduct.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
