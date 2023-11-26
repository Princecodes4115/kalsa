"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <div className="relative">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="text-xl rounded-full p-3 hover:bg-light-gray"
          >
            <span
              style={{ background: dotColor, height: "5rem" }}
              className="absolute inline-flex rounded-full h-10 w-6 right-2 top-2"
            />
            {icon}
          </button>
          <TooltipContent>{title}</TooltipContent>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  </div>
);

export default NavButton;
