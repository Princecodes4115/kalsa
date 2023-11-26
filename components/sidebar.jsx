import React from "react";
import { vector1, vector2, vector3, vector4 } from "@/public/index";
import { GrayToColorImage } from "@/lib/utils";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col items-center  gap-2 fixed left-10 top-[50%] bottom-3rem rounded-full bg-white shadow-xl">
      <GrayToColorImage img={vector1} className="h-[40px] w-[40px]" />
      <GrayToColorImage img={vector2} className="h-[40px] w-[40px]" />
      <GrayToColorImage img={vector3} className="h-[20px] w-[20px]" />
      <GrayToColorImage img={vector4} className="h-[40px] w-[40px]" />
    </div>
  );
};

export default Sidebar;
