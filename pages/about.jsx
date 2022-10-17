import Link from "next/link";
import React from "react";
import { Header } from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-about bg-cover md:h-96 h-56 text-white">
        <h1 className="h-full flex justify-center items-center md:text-5xl text-4xl">
          ABOUT
        </h1>
      </div>
      <div className="w-4/5 mx-auto my-0 px-5">
        <div className="">
          <h1 className="sm:text-3xl md:text-4xl text-3xl font-bold mt-14 border-b-4 pb-1 border-blue-900">
            ABOUT
          </h1>

          <div className="flex justify-center items-center mt-11">
            <img
              src="/images/profile.jpg"
              alt=""
              className="rounded-full block h-40"
            />
          </div>
          <div className="text-center w-60 my-0 mx-auto px-2 mb-36">
            <h1 className=" mt-3 text-2xl  text-center">Ryoga Sasaki</h1>
            <p className="pt-3 text-left text-sm">
              1999年生まれ。2022年8月頃から大阪でWebエンジニアとして活動しています。
              <br />
              趣味はプログラミングと作曲です。
            </p>
          </div>
        </div>
        <div className="">
          <h2 className="sm:text-2xl md:text-3xl text-3xl font-bold mt-14 border-l-4 mb-1 pl-1 border-blue-900">
            Skill
          </h2>
          <div className="flex">
            <div>a</div>
            <div>a</div>
            <div>a</div>
          </div>
        </div>
      </div>
    </>
  );
}
