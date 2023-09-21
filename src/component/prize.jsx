export default function Prize() {
  return (
    <div className="bg-[url('./images/premum.png')] bg-no-repeat bg-cover bg-blend-color-burn pt-[72px] pb-24 w-full">
      <div className="flex justify-center items-center flex-col mb-10">
        <h2 className="flex items-center flex-col text-xl/normal font-bold text-white pb-[9px]">
          Prizes and
          <span className="text-first-3">Rewards</span>
        </h2>
        <p className="text-center text-white text-xs/[20.508px] font-normal w-64">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="flex justify-center items-center flex-col gap-12">
        <img src="./images/trophy.png" />
        <div className="mt-[51px] flex gap-3">
          <div className="flex flex-col items-center justify-center border border-first-3 rounded-lg w-[90px] h-[127px] relative">
            <img
              className="absolute -top-10"
              src="./images/silver-medal-1.png"
            />
            <h3 className="text-white text-xs font-bold mt-8">2nd</h3>
            <h3 className="text-white text-xs/[25.968px] font-semibold">
              Runner
            </h3>
            <p className="text-first-3 text-sm font-bold">N300,000</p>
          </div>

          <div className="flex flex-col items-center justify-center border border-first-3 rounded-lg w-[90px] h-[147px] relative">
            <img className="absolute -top-12" src="./images/gold-medal-1.png" />
            <h3 className="text-white text-xs font-bold mt-8">1st</h3>
            <h3 className="text-white text-xs/[25.968px] font-semibold">
              Runner
            </h3>
            <p className="text-first-2 text-sm font-bold">N400,000</p>
          </div>

          <div className="flex flex-col items-center justify-center border border-first-3 rounded-lg w-[90px] h-[127px] relative">
            <img
              className="absolute -top-10"
              src="./images/bronze-medal-1.png"
            />
            <h3 className="text-white text-xs font-bold mt-8">3rd</h3>
            <h3 className="text-white text-xs/[25.968px] font-semibold">
              Runner
            </h3>
            <p className="text-first-2 text-sm font-bold">N150,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
