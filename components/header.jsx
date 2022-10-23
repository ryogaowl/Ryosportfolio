import Link from "next/link";
import React from "react";
import { useState } from "react";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <header className=" w-full pt-5 block pb-5 shadow-xl bg-blue-900 box-border opacity-95">
        <div className="flex align-center justify-between w-4/5 mx-auto my-0 px-5 items-center ">
          <div className="text-white">
            <h1 className=" font-bold text-3xl translate">Ryo Portfolio</h1>
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
            <div className="text-white">
              <button className={isNavOpen ? "hidden" : "block"}>
                <svg
                  className=" pt-1 h-10 w-6 fill-current flex  md:hidden"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
