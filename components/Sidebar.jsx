import React from "react";

export default function Sidebar({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="drawer-side border-r-2 h-full lg:h-[calc(100vh-66px)]">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-100 text-base-content w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <h2 className="menu-title flex items-center gap-4 px-1.5">
              <span class="text-base-content">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                  class="h-5 w-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                  ></path>
                  <path
                    d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18"
                    stroke="currentColor"
                    stroke-width="4"
                    stroke-linecap="butt"
                    stroke-linejoin="bevel"
                  ></path>
                </svg>
              </span>
              Sidebar Items Group
            </h2>
            <ul>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
              <li>
                <a>item</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
