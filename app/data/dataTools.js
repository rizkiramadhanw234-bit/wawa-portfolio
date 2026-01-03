import { FaTrello } from "react-icons/fa";
import { DiGoogleAnalytics } from "react-icons/di";
import { FaFileExcel } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { SiAdobepremierepro, SiCanva } from "react-icons/si";
import { FaVideo } from "react-icons/fa";

export const dataTools = [
  {
    icon: <FaTrello className="text-blue-400" />,
    title: "Trello",
  },
  {
    icon: <DiGoogleAnalytics className="text-[#FBBC04]" />,
    title: "Google Analytics",
  },
  {
    icon: <FaFileExcel className="text-green-400"/>,
    title: "Excel Modeling",
  },
  {
    icon: <FaMeta className="text-blue-500"/>,
    title: "Meta Suite",
  },
];

export const dataCreative = [
  {
    icon: <FaFigma className="text-orange-500"/>,
    title: "Figma",
  },
  {
    icon: <SiAdobepremierepro className="text-purple-400"/>,
    title: "Adobe Premiere Pro",
  },
  {
    icon: <SiCanva className="text-cyan-400"/>,
    title: "Canva",
  },
  {
    icon: <FaVideo />,
    title: "Capcut",
  },
];
