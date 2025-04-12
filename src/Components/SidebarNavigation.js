import {
  FaHome,
  FaVideo,
  FaPlusCircle,
  FaBell,
  FaCommentDots,
  FaList,
  FaUsers,
  FaUser,
} from "react-icons/fa";

export const navigationMenu = [
  {
    title: "Home",
    icon: FaHome,
    path: "/",
  },
  {
    title: "Reels",
    icon: FaVideo,
    path: "/reels",
  },
  {
    title: "Create",
    icon: FaPlusCircle,
    path: "/create-reels",
  },
  {
    title: "Notifications",
    icon: FaBell,
    path: "/notifications",
  },
  {
    title: "Messages",
    icon: FaCommentDots,
    path: "/messages",
  },
  {
    title: "Lists",
    icon: FaList,
    path: "/lists",
  },
  {
    title: "Communities",
    icon: FaUsers,
    path: "/communities",
  },
  {
    title: "Profile",
    icon: FaUser,
    path: "/profile",
  },
];
