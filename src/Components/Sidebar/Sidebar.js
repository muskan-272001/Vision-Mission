import "./Sidebar.css";
import React from "react";
import { FaCircle } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { MdLightbulbOutline } from "react-icons/md";
import { BiVector } from "react-icons/bi";
import { CgNotes } from "react-icons/cg";
import { BsBarChartLine } from "react-icons/bs";
import { TfiLayoutGrid3 } from "react-icons/tfi";
import logo from "../../assets/avatar.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="sidebar-item"><FaCircle value={{ color: 'white', size: '90px' }} /></div>
      </div>

      <div className="icons">
        <div className="icons-style"><BsBarChartLine /></div>
        <div className="icons-style"><AiOutlineMessage /></div>
        <div className="icons-style"><MdLightbulbOutline /></div>
        <div className="icons-style"><BiVector /></div>
        <div className="icons-style"><CgNotes /></div>
        <div className="icons-style"><TfiLayoutGrid3 /></div>
      </div>

      <div className="circle">
        <div className="circleGreen"><FaCircle value={{ color: 'green', size: '90px' }} /></div>
        <div className="circleWhite"><FaCircle value={{ color: 'green', size: '90px' }} /></div>
      </div>

      <div className="bottomAvatar">
        <div className="bottom-icon-item">
          <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
