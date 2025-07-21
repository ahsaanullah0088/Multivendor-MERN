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
import Cart from "../cart/Cart.jsx";
import Wishlist from "../wishlist/Wishlist.jsx";
import getImageUrl from "../../utils/getImageUrl.js";
import { RxCross1 } from "react-icons/rx";
const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [opencart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);

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
      <div className={`${styles.section} relative `}>
        {/* Top Bar */}
        <div className="hidden md:flex items-center justify-between pl-8 pr-8 md:h-[50px] lg:my-[20px] relative z-[20]">
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
          <div className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer z-10">
            <Link to="/seller">
              <h1 className="text-white items-center text-[16px] flex z-[10]">
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
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiOutlineHeart size={30} color="rgb(255 255 255 /83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                  0
                </span>
              </div>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
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
                      className="h-8 w-8 rounded-full"
                      src={
                        user?.avatar?.url
                          ? user.avatar.url
                          : "https://via.placeholder.com/96"
                      }
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 /83%)" />
                  </Link>
                )}
              </div>
              {/* cart popup */}
              {opencart ? <Cart setOpenCart={setOpenCart} /> : null}
              {/* wishlist popup */}
              {openWishlist ? (
                <Wishlist setOpenWishlist={setOpenWishlist} />
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm md:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                1
              </span>
            </div>
          </div>
          {/* cart popup */}

          {/* wishlist popup */}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div className="relative mr-[15px]">
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {" "}
                      0{" "}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchTerm && searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;
                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`} key={i._id}>
                          <div className="flex items-center mb-2">
                            <img
                              src={i.image_Url[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={getImageUrl(user.avatar)}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
