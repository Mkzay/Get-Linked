export default function Prize() {
  return (
    <div className="bg-[url('../images/premum.png')] bg-no-repeat bg-cover bg-blend-color-burn pt-[72px] pb-24 w-full flex-col flex md:items-center md:justify-center">
      <div className="flex justify-center items-center flex-col mb-10 md:items-start md:justify-between">
        <h2 className="flex items-center flex-col text-xl/normal font-bold text-white pb-[9px] md:text-[32px]/0px md:items-start">
          Prizes and
          <span className="text-first-3">Rewards</span>
        </h2>
        <p className="text-center text-white text-xs/[20.508px] font-normal w-64 md:text-left md:w-[360px] md:text-sm">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-12 md:flex-row">
        <img className="md:hidden" src="./images/trophy.png" />
        <img className="hidden md:block" src="./images/trophy-desktop.png" />
        <div className="mt-[51px] flex gap-3">
          <div className="flex flex-col items-center justify-center border border-first-3 rounded-lg w-[90px] h-[127px] relative md:w-[212px] md:h-[296px]">
            <img
              className="absolute -top-10 md:w-44 md:-top-24"
              src="./images/silver-medal-1.png"
            />
            <h3 className="text-white text-xs font-bold mt-8 md:text-[40px]">
              2nd
            </h3>
            <h3 className="text-white text-xs/[25.968px] font-semibold md:text-2xl/[51.936px]">
              Runner
            </h3>
            <p className="text-first-3 text-sm font-bold md:text-[32px]/[69.248px]">
              N300,000
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border border-first-3 rounded-lg w-[90px] h-[147px] relative md:w-[212px]  md:h-[347px]">
            <img
              className="absolute -top-12 md:w-[296px] md:-top-28"
              src="./images/gold-medal-1.png"
            />
            <h3 className="text-white text-xs font-bold mt-8 md:text-[40px]">
              1st
            </h3>
            <h3 className="text-white text-xs/[25.968px] font-semibold md:text-2xl/[51.936px]">
              Runner
            </h3>
            <p className="text-first-2 text-sm font-bold md:text-[32px]/[69.248px]">
              N400,000
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border border-first-3 rounded-lg w-[90px] h-[127px] relative md:w-[212px]  md:h-[296px]">
            <img
              className="absolute -top-10 md:w-44 md:-top-24"
              src="./images/bronze-medal-1.png"
            />
            <h3 className="text-white text-xs font-bold mt-8 md:text-[40px]">
              3rd
            </h3>
            <h3 className="text-white text-xs/[25.968px] font-semibold md:text-2xl/[51.936px]">
              Runner
            </h3>
            <p className="text-first-2 text-sm font-bold md:text-[32px]/[69.248px]">
              N150,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
