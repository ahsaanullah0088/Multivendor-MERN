import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown"; // You can replace or remove this if needed
import { Link } from "react-router-dom";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"}  shadow-md mb-18 lg:flex p-4`}>
      {/* Left: Image */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src="https://m.media-amazon.com/images/I/81CgtwSII3L._AC_UF894,1000_QL80_.jpg"
          alt="iPhone"
          className="max-h-[300px] w-full object-contain"
        />
      </div>

      {/* Right: Info */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 mt-6 lg:mt-0">
        <h2 className={`${styles.productTitle} text-[24px] mb-2`}>
          iPhone 18 Pro Max
          <br />
          8/256
        </h2>

        <p className="text-gray-700 text-[15px] leading-6 mb-4">
          The latest iPhone with ultra-fast performance, stunning display, and incredible camera. Limited time offer!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut, voluptatum odio explicabo distinctio id amet dolor facere, molestiae culpa consequuntur odit, maiores nihil nam corporis in est cum officia!
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <span className="text-[#d55b45] line-through text-[18px] pr-2">
              1099$
            </span>
            <span className="text-[#333] font-bold text-[20px]">999$</span>
          </div>
          <span className="text-[#44a55e] text-[16px]">22 sold</span>
        </div>

        {/* Optional Countdown (can be commented out if not used) */}
        <CountDown />

        <div className="flex items-center mt-5">
          <Link to="/product/1?isEvent=true">
            <div className={`${styles.button} text-white`}>
              See Details
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
