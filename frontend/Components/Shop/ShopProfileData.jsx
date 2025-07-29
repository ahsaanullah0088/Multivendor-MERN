import React, { useState } from 'react'
import ProductCard from '../../src/Components/Routes/ProductCard/ProductCard';
import { productData } from '../../src/static/data';
import styles from '../../src/styles/styles';
import { Link } from 'react-router-dom';

const ShopProfileData = ({isOwner}) => {
    const [active , setActive] = useState(1);
  return (
    <div className="w-full">
        <div className="flex w-full items-center justify-between">
<div className='w-full flex'>
                <div className="flex items-center">
                <h5 className={` ${active === 1 ? "text-red-500" : ""} font-[600] text-[20px] cursor-pointer pr-[20px]`} onClick={() => setActive(1)}>Shop Products</h5>
            </div>
            <div className="flex items-center">
                <h5 className={` ${active === 2 ? "text-red-500" : ""} font-[600] text-[20px] cursor-pointer pr-[20px]`} onClick={() => setActive(2)}>Running Events</h5>
            </div>
            <div className="flex items-center">
                <h5 className={` ${active === 3 ? "text-red-500" : ""} font-[600] text-[20px] cursor-pointer pr-[20px]`} onClick={() => setActive(3)}>Shop Reviews</h5>
            </div>
</div>
<div >
    {
        isOwner ? (
            <div>
                <Link to="/dashboard">
                <div className={`${styles.button} h-[42px] !rounded-[5px]`}>
                    <span className="text-white">Dashboard</span>
                </div>
                </Link>
            </div>
        ) : null}
</div>
        </div>
        <br />
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
            {
                productData && productData.map((i , index) => (
                    <ProductCard key={index} data={i} isShop={true} />
                ))
            }
        </div>
    </div>
  )
}

export default ShopProfileData
