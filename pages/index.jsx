import Link from "next/link";
import { client } from "../libs/client";
import { Header } from "../components/Header";
//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <div className="h-screen w-screen ">
        <div className="bg-mv h-full w-full bg-cover text-white absolute top-0 ">
          <h1 className="h-full flex justify-center items-center md:text-7xl text-4xl animate-text-focus-in">
            Welcome to my portfolio
          </h1>
        </div>
      </div>
    </div>
  );
}
