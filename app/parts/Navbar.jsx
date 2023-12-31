"use client";
import { useState } from "react";
import { logo } from "@/public/index";
import { navLinks } from "@/public/data";
import Image from "next/image";
import { useStateContext } from "../context/contextProvider";
import {
  MdChatBubbleOutline,
  MdNotificationsNone,
  MdOutlineFormatLineSpacing,
} from "react-icons/md";
import { IoMdCloseCircle, IoMdMenu } from "react-icons/io";
import UserProfile from "./userProfile";
import Chat from "./Chat";
import Notification from "./Notification";
import dynamic from "next/dynamic";
import Apps from "./Apps";

const NavButton = dynamic(() => import("./NavButton"), { ssr: false });

const Navbar = ({ showComponent, setShowComponent }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const { setActiveMenu, activeMenu, handleClick, isClicked, currentColor } =
    useStateContext();

  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="w-full">
      <nav
        className={`w-[95%] h-[66px] mt-1 mx-auto flex py-6 px-16 max-sm:px-10 justify-between items-center fixed navbar inset-x-0 bg-white backdrop-filter backdrop-blur-xl bg-opacity-1 z-50 rounded-full shadow-md`}
      >
        <div className="bank__image">
          <Image src={logo} alt="kalsa" className=" h-[40px]" />
        </div>

        <ul className="list-none md:flex hidden items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              onClick={() => {
                nav.title === "Apps"
                  ? handleClick("apps")
                  : setShowComponent(nav.title);
              }}
              className={` font-normal cursor-pointer  ${
                nav.title === "crm" ? "uppercase" : "capitalize"
              } text-[14px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } ${
                (showComponent === nav.title && nav.title == "Apps") ||
                (isClicked.apps && nav.title === "Apps")
                  ? "text-white bg-black rounded-full px-6 py-2"
                  : "text-black"
              } mr-10`}
            >
              <div className="flex items-center gap-1">
                {nav.icons}
                <span>{nav.title}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="no-underline items-center gap-4 md:flex hidden font-larsseit">
          <NavButton
            title="Notifications"
            customFunc={() => handleClick("notification")}
            color={currentColor}
            icon={<MdNotificationsNone />}
          />
          <NavButton
            title="Chat"
            customFunc={() => handleClick("chat")}
            color={currentColor}
            icon={<MdChatBubbleOutline />}
          />
          <div className="flex bg-[#EFF1F6] rounded-full px-2 py-1 gap-1">
            <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
              AJ
            </div>
            <NavButton
              title="Profile"
              customFunc={() => handleClick("profile")}
              color={currentColor}
              icon={<MdOutlineFormatLineSpacing />}
            />
          </div>
        </div>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <span className="text-4xl" onClick={() => setToggle(!toggle)}>
            {toggle ? <IoMdCloseCircle /> : <IoMdMenu />}
          </span>
          <div
            className={`${
              !toggle ? "hidden" : "block"
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[260px] rounded-xl  sidebar shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-light cursor-pointer text-[15px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <div className="flex gap-1 capitalize">
                    <Image
                      src={nav.icons}
                      alt={nav.title}
                      className="w-[20px] h-[20px] object-contain mr-2"
                    />
                    {nav.title}
                  </div>
                </li>
              ))}
            </ul>
            <div className="no-underline items-center md:flex   flex bg-[#EFF1F6] rounded-full px-2 py-1 gap-1 mt-4">
              <div className="w-10 h-10 flex items-center justify-center cursor-pointer bg-[#2D3B43] text-white rounded-full font-bold text-xl">
                AJ
              </div>
              <NavButton
                title="Profile"
                customFunc={() => handleClick("profile")}
                color={currentColor}
                icon={<MdOutlineFormatLineSpacing />}
              />
              <NavButton
                title="Notifications"
                customFunc={() => handleClick("notification")}
                color={currentColor}
                icon={<MdNotificationsNone />}
              />
              <NavButton
                title="Chat"
                customFunc={() => handleClick("chat")}
                color={currentColor}
                icon={<MdChatBubbleOutline />}
              />
            </div>
          </div>
        </div>
      </nav>
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.profile && <UserProfile />}
      {isClicked.apps && <Apps />}
    </div>
  );
};

export default Navbar;
