import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/actions/product";
import Header from "../Components/Layout/Header.jsx";
import Footer from "../Components/Layout/Footer.jsx";
import ProductDetails from "../Components/ProductDetails/ProductDetails.jsx";
import SuggestedProduct from "../Components/Products/SuggestedProducts.jsx";

const ProductDetailsPage = () => {
  const { allProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { name } = useParams();
  const [data, setData] = useState(null);

  // Safely handle name parameter
  const productName = name ? name.replace(/-/g, " ") : "";

  useEffect(() => {
    // Fetch products if not already loaded
    if (!allProducts || allProducts.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, allProducts]);

  useEffect(() => {
    if (allProducts && allProducts.length > 0 && productName) {
      const found = allProducts.find(
        (item) => item.name.toLowerCase() === productName.toLowerCase()
      );
      setData(found || null);
    }
  }, [allProducts, productName]);

  return (
    <div>
      <Header />
      {data ? (
        <>
          <ProductDetails data={data} />
          <SuggestedProduct data={data} />
        </>
      ) : (
        <div className="py-16 text-center text-gray-500">
          {productName ? "Loading product..." : "Invalid product name."}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
