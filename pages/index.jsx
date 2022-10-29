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
    <div className="bg-base relative">
      <Header />
      <div className="h-full ">
        <div className="bg-mv h-screen w-full bg-cover text-white absolute top-0">
          <div className="flex justify-center items-center h-full animate-text-focus-in">
            <div>
              <h1 className="text-center md:text-7xl text-4xl font-bold">
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
    </div>
  );
}
