import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import profileImg from "../public/images/profile.jpg";

export default function About() {
  return (
    <>
      <Header />
      <div className="relative bg-about bg-cover md:h-44 h-48 text-white">
        <div className="md:w-4/5 mx-auto px-5 md:pt-16 pt-20">
          <div className="w-fit">
            <h1 className="mx-auto bottom-16   md:text-5xl text-4xl">ABOUT</h1>
            <p className="pt-1 text-sm text-center md:text-base">
              私達についてaaa
            </p>
          </div>
        </div>
      </div>

      <div className="md:w-4/5 mx-auto my-0 px-5 text-main">
        <div className="">
          <div className="flex flex-col justify-center items-center mt-14">
            <Image
              src="/images/profile.jpg"
              alt=""
              className="rounded-full block h-40"
              width={150}
              height={150}
            />
          </div>
          <div className="text-center w-60 my-0 mx-auto px-2 mb-32">
            <h1 className=" mt-3 text-2xl  text-center ">Ryoga Sasaki</h1>
            <p className="pt-3 text-left text-sm">
              1999年生まれ。2022年8月頃から大阪でWebエンジニアとして活動中
              <br />
              趣味はプログラミングと作曲です。
            </p>
          </div>
        </div>
        <div>
          <h2 className="sm:text-2xl md:text-2xl  text-xl mt-14 border-l-4 mb-1 pl-1 border-b  border-b-gray-600 font-bold  border-black">
            お受けできる仕事
          </h2>

          <div className="mt-7">
            <h3 className="pb-1 before:content-['ー'] "> Webサイト制作</h3>
            <ul className="md:flex mt-2">
              <li className="before:content-['ー'] md:before:content-none pr-1">
                {" "}
                ホームページ
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                LPサイト
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                ECサイト(Shopify)
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                ブログ(Wordpress,MicroCMS)
              </li>
              <li className="md:before:content-['/'] md:mt-0 mt-2"> etc..</li>
            </ul>
            <div className="text-sm mt-12">
              <p>
                上記以外にもなにかお悩みごと等ありましたら
                <br />
                <p>
                  <Link href="/contact">
                    <a className="text-blue-600">こちら</a>
                  </Link>
                  までご連絡ください。
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="sm:text-2xl md:text-2xl text-xl mt-14 border-l-4 mb-1 pl-1 border-b  border-b-gray-600 font-bold  border-black">
            開発スキル
          </h2>
          <ul className=" mt-7">
            <li className="pb-1 ">ー 言語</li>
            <ul className="md:flex mt-2">
              <li className="before:content-['ー'] md:before:content-none pr-1">
                {" "}
                HTML
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                CSS(SCSS)
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                Javascript(ES2015)
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                PHP
              </li>
              <li className="md:before:content-['/'] before:content-['ー'] pr-1">
                {" "}
                Typescript(学習中)
              </li>
            </ul>
            <br />
            <li className="pb-1">ー CMS</li>
            <ul className="md:flex mt-2">
              <li className="before:content-['ー'] md:before:content-none pr-1">
                Wordpress
              </li>
              <li className="before:content-['ー'] md:before:content-['/'] pr-1">
                {" "}
                MicroCMS
              </li>
            </ul>
            <br />
            <li className="pb-1">ー フレームワーク</li>
            <ul className="md:flex mt-2">
              <li className="before:content-['ー'] md:before:content-none pr-1">
                {" "}
                Jquery
              </li>
              <li className="before:content-['ー'] md:before:content-['/'] pr-1">
                {" "}
                TailwindCSS
              </li>
              <li className="before:content-['ー'] md:before:content-['/'] pr-1 ">
                {" "}
                React
              </li>
              <li className="before:content-['ー'] md:before:content-['/'] pr-1 ">
                {" "}
                Next.js
              </li>
            </ul>
            <br />

            <li className="pb-1">ー テンプレート言語</li>
            <li className="md:before:content-none before:content-['ー']">
              {" "}
              Liquid
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}
