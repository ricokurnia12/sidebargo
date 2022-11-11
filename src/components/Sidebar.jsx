import React, { useState } from "react";
import {
    HiUserAdd,
    HiUser,
    HiDocumentText,
    HiX,
} from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { GrDocumentText } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "List Peserta",
            icon: <HiUserAdd />,
        },
        {
            path: "/about",
            name: "List Karyawan",
            icon: <HiUser />,
        },
        {
            path: "/analytics",
            name: "Soal MBTI",
            icon: <HiDocumentText />,
        },
        {
            path: "/comment",
            name: "Soal DISC",
            icon: <HiDocumentText />,
        },
    ];
    return (
        <div className="container">
            <div
                style={{ width: isOpen ? "250px" : "50px" }}
                className="sidebar"
            >
                <div className="top_section">
                    <div
                        style={{
                            marginLeft: isOpen ? "110px" : "0px",
                        }}
                        className="bars"
                    >
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItem.map((item, index) => (
                    <NavLink
                        to={item.path}
                        key={index}
                        className="link"
                        activeclassName="active"
                    >
                        <div className="icon">{item.icon}</div>
                        <div
                            style={{
                                display: isOpen ? "block" : "none",
                            }}
                            className="link_text"
                        >
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
