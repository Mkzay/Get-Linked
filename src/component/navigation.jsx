export default function Nav() {
  return (
    <header className="flex items-center justify-between bg-first-1 pt-[34px] pb-7 px-12 border-[#FFF] border-b w-full">
      <div>
        <h2 className="text-white text-xl font-bold">
          get<span className="text-first-3">linked</span>
        </h2>
      </div>
      <div>
        <button className="md:hidden">
          <img src="./images/menu-icon.svg" />
        </button>
      </div>
      <aside className="hidden flex-auto flex-col justify-center fixed top-0 right-0 bg-first-1 text-white">
        <button className="md:hidden">
          <img src="./image/menu-icon.svg" />
        </button>
        <ul className="md:flex ">
          <li>
            <a>Timeline</a>
          </li>
          <li>
            <a>Overview</a>
          </li>
          <li>
            <a>FAQs</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <button>Register</button>
      </aside>
    </header>
  );
}
