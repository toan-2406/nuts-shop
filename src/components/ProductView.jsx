import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactMarkdown from 'react-markdown'
import { withRouter } from "react-router";

import { addItems } from "../redux/shopping-cart/cartItemSlide";
import { remove } from "../redux/product-modal/ProductModalSlice";
import { useDispatch } from "react-redux";

import Button from "../components/Button";
import numberWithCommas from "../utils/numberWithCommas";
const ProductView = (props) => {
  let product = props.product;

  const dispatch = useDispatch();

  if (product === undefined)
    product = {
      price: 0,
      title: "",
      colors: [],
      size: [],
    };

  const [previewImg, setPreviewImg] = useState("");

  const [descriptionExpand, setDescriptionExpand] = useState(false);

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "minus") {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  useEffect(() => {
   console.log(previewImg)
  }, [previewImg]);
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setPreviewImg(product.images[0]);
    }

    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const check = () => {
    if (color === undefined) {
      alert("Vui lòng chọn màu");
      return false;
    }
    if (size === undefined) {
      alert("Vui lòng chọn size");
      return false;
    }
    return true;
  };

  const handleAddtoCart = (e) => {
    if (check()) {
      dispatch(
        addItems({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      alert(`Đã thêm ${product.title} vào giỏ hàng thành công`);
      dispatch(remove());
    }
  };

  const gotoCart = () => {
    if (check()) {
      dispatch(
        addItems({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      props.history.push("/cart");
      dispatch(remove());
    }
  };

  return (
    <div className="product">
      <div className="product__img">
        <div className="product__img__list">
          <div className="product__img__list__item">
            {
              product && product.images && product.images.length > 0 ? product.images.map((item,index)=>{
                return(
                  <img
                  key={index}
                  src={item}
                  alt=""
                  onClick={() => setPreviewImg(item)}
                />
                )
              }):null
            }
           
          </div>
        </div>
        <div className="product__img__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product__description ${
            descriptionExpand ? "expand" : ""
          }`}
        >
          <div className="product__description__title">Chi Tiết Sản Phẩm</div>
          <div
            className="product__description__content"
            // dangerouslySetInnerHTML={{ __html: product.description }}
          ><ReactMarkdown children={product.description}  /></div>
          <div className="product__description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product__info">
        <h1 className="product__info__title">{product.title}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(product.price)} VND
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {product.colors.map((item, index) => (
              <div
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                key={index}
                onClick={() => setColor(item)}
              >
                <div >{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích Thước</div>
          <div className="product__info__item__list">
            {product.size.map((item, index) => (
              <div
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                key={index}
                onClick={() => setSize(item)}
              >
                <span className="product__info__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số Lượng</div>
          <div className="product__info__item__quantity">
            <div className="product__info__item__quantity-btn">
              <i
                className="bx bx-minus"
                onClick={() => updateQuantity("minus")}
              ></i>
            </div>
            <div className="product__info__item__quantity-input">
              {quantity}
            </div>
            <div className="product__info__item__quantity-btn">
              <i
                className="bx bx-plus"
                onClick={() => updateQuantity("plus")}
              ></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button size="sm" onClick={() => handleAddtoCart()}>
            Thêm vào giỏ hàng
          </Button>
          <Button size="sm" onClick={() => gotoCart()}>
            Mua Ngay
          </Button>
        </div>
      </div>
      <div
        className={`product__description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className="product__description__title">Chi Tiết Sản Phẩm</div>
        <div
          className="product__description__content"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
        <div className="product__description__toggle">
          <Button
            size="sm"
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default withRouter(ProductView);
