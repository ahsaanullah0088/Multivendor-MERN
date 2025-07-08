import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineStar,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
// import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import { Link } from "react-router-dom";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
function ProductCard({ data }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      <div className="w-full sm:w-[300px] h-[400px] bg-white rounded-lg shadow hover:shadow-md transition-all p-4 relative">
        <Link to={`/product/${data.product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt={data.name}
            className="w-full h-[180px] object-contain mb-3"
          />
        </Link>

        <h5 className="text-sm text-gray-500 mb-1">{data.shop.name}</h5>
        <Link to={`/product/${data.product_name}`}>
          <h4 className="text-md font-semibold mb-2">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>
        </Link>

        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, i) => (
            <AiFillStar key={i} size={18} color="#F6BA00" className="mr-1" />
          ))}
          <AiOutlineStar size={18} color="#F6BA00" />
        </div>

        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2 items-center">
            <h5 className="text-lg font-bold text-[#f63b60]">
              {data.price === 0 ? "Free" : `${data.discount_price}$`}
            </h5>
            {data.price > 0 && (
              <h4 className="text-sm text-gray-500 line-through">
                {data.price}$
              </h4>
            )}
          </div>
          <span className="text-sm text-green-500 font-medium">
            {data.total_sell} sold
          </span>
        </div>

        {/* Icons */}
        <div>
          {wishlisted ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer absolute right-3 top-3"
              color="red"
              title="Remove from wishlist"
              onClick={() => setWishlisted(false)}
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer absolute right-3 top-3"
              color="#333"
              title="Add to wishlist"
              onClick={() => setWishlisted(true)}
            />
          )}

          <AiOutlineEye
            size={22}
            className="cursor-pointer absolute right-3 top-10"
            title="Quick view"
            onClick={() => setOpenDetails(true)}
          />

          <AiOutlineShoppingCart
            size={24}
            className="cursor-pointer absolute right-3 top-[85px]"
            color="#444"
            title="Add to cart"
            onClick={() => alert("Added to cart!")} // You can replace with handler
          />
          {openDetails ? <ProductDetailsCard  setOpenDetails = {setOpenDetails} data={data} /> : null}
        </div>
      </div>
    </>
  );
}

export default ProductCard;
