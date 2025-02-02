import React from "react";
import BestSeller from "../common/BestSeller";
import SidebarCategory from "./SidebarCategory";

const SideBar = () => {
  return (
    <>
 
      <div class="sidebar has-scrollbar " data-mobile-menu>
 <SidebarCategory/>
 <BestSeller/>
      </div>
    </>
  );
};

export default SideBar;
