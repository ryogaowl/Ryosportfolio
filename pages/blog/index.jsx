import Link from "next/link";
import React from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { client } from "../../libs/client";

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function blog({ blog }) {
  return (
    <>
      <Header />

      <div className="bg-blog bg-cover md:h-96 h-56 text-white">
        <h1 className="h-full flex justify-center items-center md:text-5xl text-4xl">
          BLOG
        </h1>
      </div>
      <div className="md:w-4/5 mx-auto my-0 px-5">
        <h1 className="sm:text-3xl md:text-4xl text-3xl font-bold mt-14 border-b-2 pb-1">
          BLOG一覧
        </h1>
        <ul className="mt-6">
          {blog.map((blog) => (
            <>
              <li key={blog.id} className="hover:opacity-60 mt-2 text-lg">
                <Link href={`blog/${blog.id}`}>
                  <a className="">{blog.title}</a>
                </Link>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="md:contents absolute  bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
}
