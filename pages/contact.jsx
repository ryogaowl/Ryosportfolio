import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Contact() {
  return (
    <div className="bg-base">
      <Header />
      <div className="bg-mail md:bg-auto bg-cover md:h-96 h-56 text-white">
        <h1 className="h-full flex justify-center items-center md:text-5xl text-4xl">
          CONTACT
        </h1>
      </div>
      <div className=" md:w-4/5 mx-auto my-0 px-5">
        <p className="md:text-sm text-xs mt-9 ">
          興味を持っていただきありがとうございます。お仕事やその他のご相談について下記のフォームよりお問い合わせください。
        </p>
        <form
          action="https://ssgform.com/s/37JmfdwouLF4
"
          method="post"
          className="mt-12"
        >
          <div className=" ">
            <label htmlFor="">お名前</label>

            <div className="mt-1 border w-full">
              <input
                type="text"
                name="お名前"
                placeholder="お名前"
                required="required"
                className="w-full"
              />
            </div>
          </div>
          <div className=" mt-3">
            <label htmlFor="">メールアドレス</label>
            <div className="mt-1 border w-full">
              <input
                type="email"
                name="メールアドレス"
                placeholder="xxxx@xx.com"
                required="required"
                className="w-full"
              />
            </div>
          </div>
          <div className=" mt-3">
            <label htmlFor="">ご相談内容</label>
            <div className="mt-1 border w-full h-32">
              <textarea
                name="お問い合わせ内容"
                required="required"
                placeholder="ご相談内容をお書きください"
                className="h-full w-full resize-none"
              ></textarea>
            </div>
          </div>
          <div className="mt-16 text-center ">
            <button
              type="submit"
              className="w-48 h-12 bg-blue-900 text-white hover:opacity-60"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
