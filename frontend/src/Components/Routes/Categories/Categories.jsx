import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Branding Section */}
      <div className={`${styles.section} hidden sm:block`}>
        <div className="branding my-10 flex flex-wrap justify-between w-full shadow-sm bg-white p-5 rounded-md gap-6">
          {brandingData &&
            brandingData.map((item, index) => (
              <div
                className="flex items-start sm:w-[48%] md:w-auto"
                key={index}
              >
                {item.icon}
                <div className="pl-3">
                  <h3 className="font-bold text-sm md:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm">{item.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div
        className={`${styles.section} bg-white p-4 sm:p-6 rounded-lg mb-12`}
        id="categories"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Shop by Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categoriesData &&
            categoriesData.map((item) => {
              const handleClick = () => {
                navigate(`/products?category=${item.title}`);
              };
              return (
                <div
                  key={item.id}
                  onClick={handleClick}
                  className="flex flex-col sm:flex-row items-center justify-between sm:justify-start gap-2 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-md cursor-pointer hover:shadow-md transition"
                >
                  <h5 className="text-[14px] sm:text-[16px] font-medium text-gray-800 text-center sm:text-left">
                    {item.title}
                  </h5>
                  <img
                    src={item.image_Url}
                    className="w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] object-contain"
                    alt={item.title}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Categories;
