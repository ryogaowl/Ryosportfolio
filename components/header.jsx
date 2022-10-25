import Link from "next/link";
import React, { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="sticky top-0 z-30">
      <div
        className={
          openMenu
            ? `md:contents fixed top-0 h-screen  bg-blue-900 md:bg-inherit w-screen`
            : undefined
        }
      >
        <header
          className={
            openMenu
              ? `w-full pt-5 block pb-5 bg-blue-900 box-border `
              : `w-full pt-5 block pb-5 shadow-xl bg-blue-900 box-border opacity-95`
          }
        >
          <div className="flex items-center justify-between md:w-4/5 mx-auto my-0 px-5 items-center ">
            <div className="text-white">
              <h1
                className={
                  openMenu
                    ? `md:block md:font-bold md:text-3xl md:translate hidden`
                    : `font-bold text-3xl translate`
                }
              >
                Ryo Portfolio
              </h1>
            </div>
            <div className="flex">
              <ul className="pt-1 text-white text-xl md:flex  hidden">
                <li className="mr-3 hover:opacity-60 ">
                  <Link href="/">
                    <a>HOME</a>
                  </Link>
                </li>
                <li className="mr-3 hover:opacity-60">
                  <Link href="/about">
                    <a>ABOUT</a>
                  </Link>
                </li>
                <li className="mr-3 hover:opacity-60">
                  <Link href="/blog">
                    <a>BLOG</a>
                  </Link>
                </li>
                <li className="mr-3 hover:opacity-60">
                  <Link href="/works">
                    <a>WORKS</a>
                  </Link>
                </li>
                <li className="hover:opacity-60">
                  <Link href="/contact">
                    <a>CONTACT</a>
                  </Link>
                </li>
              </ul>
              <div className="self-center  md:hidden">
                <div
                  className={`w-8 cursor-pointer z-50`}
                  onClick={() => menuFunction()}
                >
                  <div
                    className={
                      openMenu
                        ? `border-white border-b-4 transform rotate-45  w-8 top-9 absolute transition duration-300`
                        : `border-b-4 border-white transition duration-300`
                    }
                  ></div>
                  <div
                    className={
                      openMenu
                        ? undefined
                        : `border-b-4 border-white py-1 transition duration-300`
                    }
                  ></div>
                  <div
                    className={
                      openMenu
                        ? `border-b-4 border-white transform -rotate-45 top-9 absolute w-8 transition duration-300`
                        : `border-b-4 border-white py-1 transition duration-300`
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <ul
          className={
            openMenu
              ? `md:hidden mt-6 pt-1 text-white text-xl md:w-4/5 mx-auto my-0 px-5`
              : `hidden`
          }
        >
          <li className="mr-3 hover:opacity-60 ">
            <Link href="/">
              <a>HOME</a>
            </Link>
          </li>
          <li className="mr-3 hover:opacity-60">
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
          <li className="mr-3 hover:opacity-60">
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
          <li className="mr-3 hover:opacity-60">
            <Link href="/works">
              <a>WORKS</a>
            </Link>
          </li>
          <li className="hover:opacity-60">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
