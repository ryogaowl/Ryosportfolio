import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Contact() {
  return (
    <div className="">
      <Header />
      <div className="bg-works bg-cover md:h-96 h-56 text-white">
        <h1 className="h-full flex justify-center items-center md:text-5xl text-4xl">
          WORKS
        </h1>
      </div>
      <div className=" md:w-4/5 mx-auto my-0 px-5">
        <p className="md:text-sm text-xs mt-9 ">制作物達のご紹介</p>
        <div className="mt-10 w-full ">
          <div className="md:flex justify-between">
            <div className="md:w-2/5">
              <a
                href="https://my-portfolio-mu-pied.vercel.app/"
                className="hover:opacity-80 transition hover:animate-pulsate-fwd"
              >
                <img src="/images/portfolio.png" alt="" />
              </a>
            </div>
            <div className="md:w-2/5">
              <h1 className="pt-3">今ご覧になられているサイトです</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
