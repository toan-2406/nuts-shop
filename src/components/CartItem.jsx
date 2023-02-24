import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { updateItems, removeItem } from "../redux/shopping-cart/cartItemSlide";

import numberWithCommas from "../utils/numberWithCommas";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(props.item);

  const [quantity, setQuantity] = useState(props.item.quantity);

  const updateQuantity1 = (option) => {
    if (option === "+") {
      dispatch(updateItems({ ...item, quantity: quantity + 1 }));
    } else {
      dispatch(
        updateItems({
          ...item,
          quantity: quantity < 2 ? dispatch(removeItem(item)) : quantity - 1,
        })
      );
      console.log(quantity);
    }
  };
  useEffect(() => {
    setItem(props.item);
    setQuantity(props.item.quantity);
  }, [props.item]);

  const removeCartItem = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className="cart__item">
      <div className="cart__item__image">
        <img src={item.product.image01} alt={item.title} />
      </div>
      <div className="cart__item__info">
        <div className="cart__item__info__name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart__item__info__price">
          {numberWithCommas(Number(item.product.price))}
        </div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div className="product__info__item__quantity-btn">
              <i
                className="bx bx-minus"
                onClick={() => updateQuantity1("-")}
              ></i>
            </div>
            <div className="product__info__item__quantity-input">
              {quantity}
            </div>
            <div className="product__info__item__quantity-btn">
              <i
                className="bx bx-plus"
                onClick={() => updateQuantity1("+")}
              ></i>
            </div>
          </div>
        </div>
        <div className="cart__item__info__del">
          <i className="bx bx-trash" onClick={() => removeCartItem()}></i>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
