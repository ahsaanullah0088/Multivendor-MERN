import React from 'react'
import DashboardHeader from "../Components/Shop/Layout/DashboardHeader.jsx"
import DashboardSidebar from "../Components/Shop/Layout/DashboardSidebar.jsx"

const ShopDashboardpage = () => {
  return (
    <div>
      <DashboardHeader/>
      <div className="flex items-center justify-between w-full">
        <DashboardSidebar active = {1}/>
      </div>
    </div>
  )
}

export default ShopDashboardpage;