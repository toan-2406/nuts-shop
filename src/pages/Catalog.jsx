import React, { useState, useEffect, useCallback, useRef } from "react";

import Helmet from "../components/Helmet";
import productData from "../assets/fake-data/products";


import InfinityList from "../components/InfinityList";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);
  //update sản phẩm sau lọc
  const updateProduct = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category?.includes(e.categorySlug));
    }
    if (filter.color.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.color?.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size?.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
          <InfinityList data={products} />
      </div>
    </Helmet>
  );
};

export default Catalog;
