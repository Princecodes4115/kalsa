import { home, analytics, revenue, user, apps } from "./index";
import {
  MdOutlineSettings,
  MdOutlineHistory,
  MdOutlineAttachMoney,
  MdOutlineAddAlarm,
  MdCameraswitch,
  MdWorkspacesOutline,
} from "react-icons/md";
import { FiLogOut } from "react-icons/fi";

export const navLinks = [
  {
    id: 1,
    title: "home",
    icons: home,
  },
  {
    id: 2,
    title: "analytics",
    icons: analytics,
  },
  {
    id: 3,
    title: "revenue",
    icons: revenue,
  },
  {
    id: 4,
    title: "crm",
    icons: user,
  },
  {
    id: 5,
    title: "Apps",
    icons: apps,
  },
];

export const navButtons = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
];

export const userProfileData = [
  {
    icon: <MdOutlineSettings />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <MdOutlineHistory />,
    title: "Purchase History",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <MdOutlineAttachMoney />,
    title: "Refer & Earn",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <MdWorkspacesOutline />,
    title: "Integration",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <MdOutlineAddAlarm />,
    title: "Report Bug",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <MdCameraswitch />,
    title: "Switch Account",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
  {
    icon: <FiLogOut />,
    title: "Sign Out",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];
