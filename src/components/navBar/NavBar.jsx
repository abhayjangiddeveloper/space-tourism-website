"use client";
import "./NavBar.css";
import appLogo from "../../assets/icons/appLogo.svg";
import menu from "../../assets/icons/menu.svg";
import Image from "next/image";
import { navBarData } from "@/utils/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import close from "../../assets/icons/close.svg";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const menuControl = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navBarContainer">
        <div className="logoContainer">
          <Image
            src={appLogo}
            className="logoContainerImage"
            alt="This is App logo"
            onClick={() => {
              router.push("/home");
            }}
          />
        </div>
        <div className="line"></div>
        <div className="menuContainer">
          <Image
            src={!open ? menu : close}
            alt="menu icon"
            className="menuIcon"
            onClick={menuControl}
          />
        </div>
        <nav className={`desktopNavBar ${open ? "mobileNavBar" : ""}`}>
          {navBarData.map((item, index) => {
            const isActive = pathname.startsWith(item.path);

            return (
              <Link
                href={item.path}
                key={index + item.id}
                className={`navText ${isActive ? "active" : ""}`}
                id="navLink"
                onClick={menuControl}
              >
                <span>0{index}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
