import Image from "next/image";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";

import Link from "next/link";
import { client } from "../../libs/client";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "works" });

  return {
    props: {
      works: data.contents,
    },
  };
};
export default function works({ works }) {
  return (
    <div className="bg-base">
      <Header />
      <div className="relative bg-works bg-cover md:h-44 h-48 text-white">
        <div className="md:w-4/5 mx-auto px-5 md:pt-16 pt-16">
          <div className="w-fit">
            <h1 className="mx-auto bottom-16   md:text-5xl text-4xl">WORKS</h1>
            <p className="pt-1 text-sm text-center md:text-base">制作物紹介</p>
          </div>
        </div>
      </div>
      <div className=" md:w-4/5 mx-auto my-0 px-5">
        <h1 className="text-2xl w-full md:text-3xl  mt-14 border-l-4 border-b  border-b-gray-600 border-black pl-2 ">
          制作物のご紹介
        </h1>
        <div className="md:flex flex-wrap block w-full mt-10 justify-between mx-auto md:px-10 px-1">
          {works.map((works) => (
            <div key={works.id} className="mt-10  md:mt-8 md:w-works w-full">
              <div className="">
                <div className=" mx-0">
                  <Link href={`works/${works.id}`}>
                    <a className="hover:opacity-80 transition hover:animate-pulsate-fwd">
                      <img src={works.thumbnail.url} alt="" />
                    </a>
                  </Link>
                </div>
                <div className=" md:pl-0 pl-1">
                  <Link href={`works/${works.id}`}>
                    <a className="block lg:mt-3 mt-2 lg:text-2xl text-lg font-bold">
                      {works.title}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
