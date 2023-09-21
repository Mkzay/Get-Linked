export default function Main() {
  return (
    <main className="flex flex-col items-center justify-center border-b border-white w-full mb-4">
      <h2 className="text-white text-base/normal font-bold italic pt-10 pb-14 w-[324px] md:text-4xl/normal md:w-[742px]">
        Igniting a Revolution in HR Innovation
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center md:items-start">
          <h1 className="text-white text-[32px] font-bold pb-[3px] md:text-[80px]/normal">
            getlinked Tech
          </h1>
          <h1 className="flex items-center text-white text-[32px] font-bold pb-[9px] md:text-[80px]/normal">
            Hackathon <span className="text-first-3">1.0</span>
            <img src="./images/chain.png" />
            <img src="./images/boom.png" />
          </h1>
          <p className="text-[13px]/[21.58px] font-normal w-[264px] pb-6 md:text-xl/[33.3px] md:w-[522px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="w-[152px] h-[46.837] bg-gradient-to-r from-[#FE34B9] via-first-3  to-first-2 text-sm font-normal text-white py-[15px] px-[46px] mb-[14px] rounded">
            Register
          </button>
          <h1 className="text-white text-5xl font-normal font-unica">
            00<sub className="text-sm">H</sub> 00
            <sub className="text-sm">M</sub> 00<sub className="text-sm">S</sub>
          </h1>
        </div>
        <div className="bg-[url('../images/man.png')] bg-no-repeat bg-cover md:bg-contain pb-4 h-full w-full">
          <img className="md:hidden" src="./images/orb.png" />
          <img className="hidden md:block" src="./images/orb-desktop.png" />
        </div>
      </div>
    </main>
  );
}
