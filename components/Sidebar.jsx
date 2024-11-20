"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Sidebar({ children }) {
  const pathName = usePathname();
  const isActive = (path) => path === pathName;

  const SidebarLinksTop = [
    { id: 1, path: "/", name: "Dashboard" },
    { id: 2, path: "/sales", name: "Sales" },
    { id: 3, path: "/tickets", name: "Tickets" },
    { id: 4, path: "/leads", name: "Leads" },
    { id: 5, path: "/customers", name: "Customers" },
  ];

  const SidebarLinksBottom = [
    { id: 6, path: "/profile", name: "Profile" },
    { id: 7, path: "/settings", name: "Settings" },
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
        <div className="flex flex-col justify-between h-full">
          {/* Sidebar content here */}
          <ul className="menu bg-base-100 text-base-content w-72 p-4 text-xl pt-12">
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
                  {link.name}
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
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
