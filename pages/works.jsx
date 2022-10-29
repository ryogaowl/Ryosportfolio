import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Contact() {
  return (
    <div className="bg-base">
      <Header />
      <div className="bg-works bg-cover md:h-96 h-56 text-white">
        <h1 className="h-full flex justify-center items-center md:text-5xl text-4xl">
          WORKS
        </h1>
      </div>
      <div className=" md:w-4/5 mx-auto my-0 px-5">
        <h1 className="md:text-xl text-lg mt-5 border-l-4 border-blue-900 pl-2 w-fit">
          制作物のご紹介
        </h1>
        <div className="mt-5 w-full  md:mt-8">
          <div className="md:flex justify-between">
            <div className="md:w-2/5 ">
              <a
                href="https://my-portfolio-mu-pied.vercel.app/"
                className="hover:opacity-80 transition hover:animate-pulsate-fwd"
              >
                <img src="/images/portfolio.png" alt="" />
              </a>
            </div>
            <div className="md:w-3/5 md:ml-11 md:pl-0 pl-1">
              <h2 className="lg:pt-1 pt-2 lg:text-2xl text-lg font-bold">
                Ryo Portfolio(当サイト)
              </h2>
              <h3 className="mt-1 lg:text-lg transition duration-150 ease-out">
                使用言語: React(Next.js)/ TailwindCSS/MicroCMS
              </h3>

              <h3 className="mt-1 lg:text-lg text-base">制作期間: 2〜3日</h3>

              <h3 className="mt-1 lg:text-lg text-base">説明</h3>
              <p className="lg:text-base text-sm ">
                MicroCMSとNext.jsで作ったポートフォリオサイトです。
              </p>
              <a
                className="text-blue-600 mt-2 pb-3 text-xs md:mt-2 block"
                href="https://my-portfolio-mu-pied.vercel.app/"
              >
                サイトへ移動
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 w-full  md:mt-8">
          <div className="md:flex justify-between">
            <div className="md:w-2/5 relative">
              <a
                href="https://ryoportfolio-eng.conohawing.com/ishii-kadan/"
                target="blank"
                className="hover:opacity-50 ease-out duration-300 transition hover:animate-pulsate-fwd  group"
              >
                <img src="/images/ishii-kadan.png" alt="" />
              </a>
            </div>
            <div className="md:w-3/5 md:ml-11 md:pl-0 pl-1">
              <h2 className="lg:pt-1 pt-2 lg:text-2xl text-lg font-bold">
                旅館ホームページ(仮想サイト)
              </h2>
              <h3 className="mt-1 lg:text-lg">
                使用言語: HTML/ CSS(Sass)/jquery
              </h3>

              <h3 className="mt-1 md:text-lg text-base">制作期間: 1週間</h3>

              <h3 className="mt-1 md:text-lg text-base">説明</h3>
              <p className="text-sm ">
                XDデザインカンプから作成しました。
                <br />
                indexを防ぐためBasic認証をかけております。
                <br />
                下記ID・パスワードを使用してください。
                <br />
                ユーザID : user / パスワード : pass-424
              </p>

              <a
                className="text-blue-600 mt-2 text-xs md:mt-2 block"
                href="https://ryoportfolio-eng.conohawing.com/ishii-kadan/"
              >
                サイトへ移動
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
