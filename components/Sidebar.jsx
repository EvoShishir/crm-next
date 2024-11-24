"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiChartLineUp } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { SlWrench } from "react-icons/sl";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { VscSettingsGear } from "react-icons/vsc";

export default function Sidebar({ children }) {
  const pathName = usePathname();
  const isActive = (path) => path === pathName;

  const SidebarLinksTop = [
    { id: 1, path: "/homepage", name: "Dashboard", icon: <BiHomeAlt2 /> },
    { id: 2, path: "/sales", name: "Sales", icon: <PiChartLineUp /> },
    { id: 3, path: "/tickets", name: "Tickets", icon: <SlWrench /> },
    { id: 4, path: "/leads", name: "Leads", icon: <GrGroup /> },
    {
      id: 5,
      path: "/customers",
      name: "Customers",
      icon: <HiOutlineUserGroup />,
    },
  ];

  const SidebarLinksBottom = [
    { id: 6, path: "/profile", name: "Profile", icon: <CgProfile /> },
    { id: 7, path: "/settings", name: "Settings", icon: <VscSettingsGear /> },
  ];

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side border-r-2 h-full lg:h-[calc(100vh-66px)]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex flex-col justify-between h-full bg-base-100">
          {/* Sidebar content here */}
          <ul className="menu bg-base-100 text-base-content w-72 p-4 text-xl">
            {SidebarLinksTop.map((link) => (
              <li key={link.id} className="p-1">
                <Link
                  href={link.path}
                  className={
                    isActive(link.path)
                      ? // "bg-blue-200 text-blue-600 font-semibold"
                        "active"
                      : ""
                  }
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="menu bg-base-100 text-base-content w-72 p-4 text-xl pb-12">
            {SidebarLinksBottom.map((link) => (
              <li key={link.id} className="p-1">
                <Link
                  href={link.path}
                  className={isActive(link.path) ? "active" : ""}
                >
                  {link.icon} {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
