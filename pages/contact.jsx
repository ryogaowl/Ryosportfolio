import { Footer } from "../components/footer";
import { Header } from "../components/header";

export default function Contact() {
  return (
    <div className="bg-base">
      <Header />
      <div className="relative bg-contact bg-cover md:h-44 h-48 text-white">
        <div className="md:w-4/5 mx-auto px-5 md:pt-16 pt-20">
          <div className="w-fit">
            <h1 className="mx-auto bottom-16   md:text-5xl text-4xl">
              CONTACT
            </h1>
            <p className="pt-1 text-sm text-center md:text-base">
              お問い合わせ
            </p>
          </div>
        </div>
      </div>
      <div className=" md:w-4/5 mx-auto my-0 px-5">
        <p className="md:text-base text-sm mt-9 ">
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
              className="w-48 h-12 bg-black text-white hover:opacity-60"
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
