import React, { useEffect, useRef } from "react";
import {
  BellIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
  const location = useLocation();
  const asideRef = useRef<HTMLElement>(null);
  const asideMask = useRef<HTMLDivElement>(null);

  const toggleAside = (e: React.MouseEvent<HTMLElement | SVGSVGElement>) => {
    const asideClassList = asideRef.current?.classList;
    const asideMaskClassList = asideMask.current?.classList;

    asideClassList?.toggle("-translate-x-full");
    asideClassList?.toggle("lg:-ml-[250px]");

    if( asideMaskClassList?.contains("invisible") ) {
      asideMaskClassList?.remove("invisible", "opacity-0");
      asideMaskClassList?.add("visible", "opacity-50");
    } else {
      asideMaskClassList?.add("invisible", "opacity-0");
      asideMaskClassList?.remove("visible", "opacity-50");
    }
  };

  useEffect(() => {
    const asideClassList = asideRef.current?.classList;
    const asideMaskClassList = asideMask.current?.classList;
    if( asideMaskClassList?.contains("visible") ) {
      console.log(1);
      asideMaskClassList?.add("invisible", "opacity-0");
      asideMaskClassList?.remove("visible", "opacity-50");
      asideClassList?.toggle("-translate-x-full");
    }
  }, [location]);

  return (
    <div className="flex">
      <aside
        className={`z-20 fixed top-0 left-0 bg-indigo-600 w-[250px] min-h-screen -translate-x-full transition-all duration-500 ease-in-out lg:static lg:translate-x-0 lg:shrink-0 lg:shadow-2xl lg:shadow-indigo6-600`}
        ref={asideRef}
      >
        <div className="h-16 flex justify-center items-center shadow-md">
          <Link
            to="/"
            className='text-white text-2xl font-medium'
          >
            TURTLE
          </Link>
        </div>
          <Nav />
      </aside>
      <div className="w-full">
        <header className="h-16 flex justify-between items-center p-4 shadow">
          <Bars3Icon
            className="h-6 w-6 stroke-indigo-600 lg:cursor-pointer"
            onClick={toggleAside}
          />
          <form className="group relative ml-2 mr-auto">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-indigo-500" />
            <input
              className="focus:ring-2 focus:ring-indigo-600 focus:outline-none appearance-none text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 border-none w-36 md:w-96"
              type="text"
              aria-label="Search"
              placeholder="Search"
            />
          </form>
          <BellIcon className="w-5 h-5 stroke-slate-400 mr-3" />
          <div>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
              alt="avatar"
            />
          </div>
        </header>
        <Outlet />
      </div>
      <div
        className={`bg-black h-screen w-screen fixed top-0 left-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden`}
        onClick={toggleAside}
        ref={asideMask}
      ></div>
    </div>
  );
};

export default Home;