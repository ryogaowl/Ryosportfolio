export function Footer() {
  return (
    <>
      <div className="md:mt-24 mt-14 flex justify-center">
        <a
          href="https://github.com/ryogaowl/Ryosportfolio.git"
          target="blank"
          className="block w-10 h-10 mr-2"
        >
          <img src="/images/github.png" alt="" />
        </a>
        <a
          href="https://twitter.com/owl__goat"
          target="blank"
          className="block w-10 h-10 mr-2"
        >
          <img src="/images/twitter.png" alt="" />
        </a>
      </div>
      <div className="mt-3 bg-black w-full h-10 flex items-center bottom-0">
        <footer className="flex items-center justify-center text-sm text-white w-4/5 mx-auto my-0 px-5">
          <p>© 2022 Ryo Portfolio</p>
        </footer>
      </div>
    </>
  );
}
