"use client";
import React from "react";

export default function SidebarToggle() {
  const handleSidebarExpansion = () => {
    const drawer = document.getElementById("my-drawer-2");
    if (drawer) {
      drawer.click();
    }
  };
  return (
    <div
      role="button"
      className="btn btn-ghost btn-circle"
      onClick={handleSidebarExpansion}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </div>
  );
}
