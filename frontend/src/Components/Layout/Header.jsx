import React, { useState, useEffect } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../static/data";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import DropDown from "./DropDown.jsx";
import Navbar from "./Navbar.jsx";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  console.log( "isauthenticated", isAuthenticated);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 70);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  return (
    <>
      <div className={`${styles.section} relative z-[50]`}>
        {/* Top Bar */}
        <div className="flex items-center justify-between pl-8 pr-8 md:h-[50px] lg:my-[20px] relative z-[60]">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer"
            />

            {/* Search Results */}
            {searchTerm && searchData && searchData.length !== 0 && (
              <div className="absolute top-[42px] left-0 w-full bg-white border border-gray-300 max-h-[300px] overflow-y-auto rounded-md shadow-md z-[70]">
                {searchData.map((i, index) => {
                  const Product_name = i.name.replace(/\s+/g, "-");
                  return (
                    <Link to={`/product/${Product_name}`} key={index}>
                      <div className="w-full flex items-start py-3 px-2 hover:bg-gray-100">
                        <img
                          src={i.image_Url?.[0]?.url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
            {searchTerm && searchData && searchData.length === 0 && (
              <div className="absolute top-[42px] left-0 w-full bg-white border border-gray-300 rounded-md p-3 z-[70] text-gray-600 text-center shadow-md">
                No products found.
              </div>
            )}
          </div>

          {/* Seller Button */}
          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-white items-center text-[16px] flex">
                become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Categories + Navbar */}
        <div
          className={`hidden md:flex items-center bg-[#3321c8] h-[70px] px-8 mt-2 rounded-md shadow-sm z-10 relative ${
            active ? "fixed top-0 left-0 w-full" : ""
          }`}
        >
          {/* Categories Dropdown */}
          <div className="relative h-[60px] w-[270px] hidden lg:block">
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button
              className="h-full w-full flex justify-between items-center pl-10 pr-3 bg-white text-[16px] font-[500] rounded-md"
              onClick={() => setDropDown(!dropDown)}
            >
              All Categories
              <IoIosArrowDown
                size={20}
                className={`transition-transform duration-200 ${
                  dropDown ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {dropDown && (
              <DropDown
                categoriesData={categoriesData}
                setDropDown={setDropDown}
              />
            )}
          </div>

          {/* Navbar */}
          <div className="ml-8 flex-grow">
            <Navbar active={activeHeading} />
          </div>
          <div className={`${styles.noramlFlex}`}>
            <div className="flex">
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer mr-[15px]">
                <AiOutlineShoppingCart
                  size={30}
                  color="rgb(255 255 255 /83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                  0
                </span>
              </div>
              <div className="relative cursor-pointer mr-[15px] ">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      className="h-8 w-8 rounded-full" src={user?.avatar?.url
                      ? user.avatar.url
                      : "https://via.placeholder.com/96"} alt="" />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
