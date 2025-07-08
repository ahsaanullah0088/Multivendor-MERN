import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const ProductDetailsCard = ({ setOpenDetails, data }) => {
  const [count, setCount] = useState(1);
  const [click , setClick] = useState(false);

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    alert("Message feature coming soon!");
  };

  return (
    <div className="bg-[#fff]">
      {data ? (
        <div className="fixed w-full h-screen top-0 left-0 bg-[#00000030] z-40 flex items-center justify-center">
          <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll 800px:h-[75vh] bg-white rounded-md shadow-sm relative p-4">
            <RxCross1
              size={30}
              className="absolute right-3 top-3 z-50 cursor-pointer"
              onClick={() => setOpenDetails(false)}
            />

<div className="w-full lg:w-[50%] flex flex-col items-center">
              {/* Left Side */}
<div className="w-full lg:w-[50%] flex flex-col items-center">
  <img
    src={`${data.image_Url[0].url}`}
    alt="product"
    className="w-full max-h-[300px] object-contain"
  />

  <div className="flex items-center mt-4 w-full">
    <Link
      to={`/shop/preview/${data.shop._id}`}
      className="flex items-center"
    >
      <img
        src={`${data.shop.shop_avatar.url}`}
        alt="shop avatar"
        className="w-[50px] h-[50px] rounded-full mr-2"
      />
      <div>
        <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
        <h5 className="text-[15px] text-gray-500">
          {data.shop.ratings} Ratings
        </h5>
      </div>
    </Link>
  </div>

  <div
    className={`${styles.button} bg-black mt-4 rounded-[4px] h-11 cursor-pointer`}
    onClick={handleMessageSubmit}
  >
    <span className="text-white flex items-center justify-center">
      Send Message <AiOutlineMessage className="ml-1" />
    </span>
  </div>
  <h5 className="text-[16px] text-[red] mt-5">(50) Sold out</h5>
</div>


              {/* Right Side */}
<div className="w-full lg:w-[50%] pt-5 px-3 md:px-4">
  <h1 className={`${styles.productTitle} text-[20px]`}>
    {data.name}
  </h1>
  <p className="text-gray-700 mt-2 whitespace-pre-line">
    {data.description}
  </p>

  <div className="flex pt-3 items-center gap-3">
    <h4 className={`${styles.productDiscountPrice}`}>
      {data.discountPrice}$
    </h4>
    {data.originalPrice && (
      <h3 className={`${styles.price} line-through`}>
        {data.originalPrice}$
      </h3>
    )}
  </div>

  <div className="flex items-center mt-12 justify-between pr-3">
    <div className="flex items-center">
      <button
        className="bg-teal-500 text-white font-bold px-3 py-1 rounded-l hover:opacity-80 transition"
        onClick={decrementCount}
      >
        -
      </button>
      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[10px]">
        {count}
      </span>
      <button
        className="bg-teal-500 text-white font-bold px-3 py-1 rounded-r hover:opacity-80 transition"
        onClick={incrementCount}
      >
        +
      </button>
    </div>
    <div className="">
      {click ? (
                  <AiFillHeart
                    size={22}
                    className="cursor-pointer "
                    color="red"
                    title="Remove from wishlist"
                    onClick={() => setClick(false)}
                  />
                ) : (
                  <AiOutlineHeart
                    size={22}
                    className="cursor-pointer"
                    color="#333"
                    title="Add to wishlist"
                    onClick={() => setClick(true)}
                  />
                )}
      

    </div>
  </div>
  <div className= {` ${styles.button}mt-6 rounded h-11 flex items-center`}>
    <span className="text-white flex items-center justify-center">
      Add to Cart <AiOutlineShoppingCart className="ml-1" />
    </span>
  </div>

</div>

            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetailsCard;
