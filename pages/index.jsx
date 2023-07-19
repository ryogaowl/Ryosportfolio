import { client } from "../libs/client";
import { Header } from "../components/header";
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
    <div className="bg-base relative overflow-hidden">
      <Header />

      <div className="relative">
        <video
          src="mov/AdobeStock_131248296.mp4"
          className="hidden md:block top-0 left-0 right-0 bottom-0 fixed object-cover z-0 h-screen w-screen"
          autoplay
          loop
          muted
          playsinline
        ></video>
        <video
          src="mov/AdobeStock_521078998.mp4"
          className="block md:hidden min-h-screen min-w-screen top-0 left-0 right-0 bottom-0 fixed object-cover z-0"
          autoplay
          loop
          muted
          playsinline
        ></video>

        <div className="text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-text-focus-in md:mt-0 mt-10 z-10">
          <div className="">
            <h1 className="text-center w-screen md:text-7xl text-4xl font-bold">
              Welcome to my portfolio
            </h1>
            <p className="text-center text-sm md:text-base mt-5">
              こちらのサイトにブログや作品を載せています。
              <br />
              お仕事はContactページよりお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
