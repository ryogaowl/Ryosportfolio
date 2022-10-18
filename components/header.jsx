import Link from "next/link";

export function Header() {
  return (
    <div className="sticky top-0 z-50">
      <header className=" w-full pt-5 block pb-5 shadow-xl bg-blue-900 box-border opacity-95">
        <div className="flex align-center justify-between w-4/5 mx-auto my-0 px-5 items-center ">
          <div className="text-white">
            <h1 className=" font-bold text-3xl translate">Ryo Portfolio</h1>
          </div>
          <ul className="flex pt-1 text-white text-xl ">
            <li className="mr-3 hover:opacity-60 ">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className="mr-3 hover:opacity-60">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className="mr-3 hover:opacity-60">
              <Link href="/blog">
                <a>BLOG</a>
              </Link>
            </li>
            <li className="hover:opacity-60">
              <Link href="/works">
                <a>WORKS</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
