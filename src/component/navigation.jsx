import React, { useState } from "react";

export default function Nav() {
  // Define a state variable to track whether the sidebar is open or closed
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle the sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center justify-between bg-first-1 pt-[34px] pb-7 px-12 border-[#FFF] border-b w-full">
      <div>
        <h2 className="text-white text-xl font-bold md:text-4xl/normal">
          get<span className="text-first-3">linked</span>
        </h2>
      </div>
      <div>
        {/* Add an event handler to the menu button to toggle the sidebar */}
        <button className="md:hidden" onClick={toggleSidebar}>
          <img src="./images/menu-icon.svg" />
        </button>
      </div>
      <aside
        className={`${
          isSidebarOpen ? "fixed" : "hidden"
        } flex flex-col justify-center top-0 right-0 h-full w-8/12 bg-first-1 text-white z-50 md:block md:relative md:items-center md:w-auto`}
      >
        <button
          className="md:hidden rounded-full border border-first-2 w-8 h-8 flex items-center justify-center relative -top-12 left-48"
          onClick={toggleSidebar}
        >
          <img src="./images/closing.svg" />
        </button>
        <div className="flex flex-col items-start pl-10 gap-[121px] md:items-center md:justify-center md:pl-0 md:flex-row">
          <ul className="flex items-start justify-center flex-col gap-8 md:gap-[56px] md:flex-row">
            <li className="text-lg/normal tracking[-1px] font-inter font-medium md:text-lg/normal md:font-normal">
              <a>Timeline</a>
            </li>
            <li className="text-lg/normal tracking[-1px] font-inter font-medium md:text-lg/normal md:font-normal">
              <a>Overview</a>
            </li>
            <li className="text-lg/normal tracking[-1px] font-inter font-medium md:text-lg/normal md:font-normal">
              <a>FAQs</a>
            </li>
            <li className="text-lg/normal tracking[-1px] font-inter font-medium md:text-lg/normal md:font-normal">
              <a>Contact</a>
            </li>
          </ul>
          <button className="text-base/normal font-normal bg-gradient-to-r from-[#FE34B9] via-first-3 to-first-2 w-[172px] h-[53px] rounded-[4px]">
            Register
          </button>
        </div>
      </aside>
    </header>
  );
}
