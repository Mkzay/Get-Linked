export default function Partners() {
  return (
    <div className="flex flex-col gap-10 pb-[104px] border-b border-white w-full items-center">
      <div className="flex items-center justify-center flex-col pt-10 gap-1">
        <h2 className="text-white text-xl font-bold">Partners and Sponsors</h2>
        <p className="text-white text-center text-xs/5 font-normal w-72">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="w-[333px] h-[170px] border-first-3 border pt-10 rounded-md md:w-[1255px] md:h-[560px] md:flex md:items-center md:justify-center md:flex-col md:gap-10">
        <div className="flex items-center justify-center flex-row gap-10 pb-3 md:pr-20">
          <img className="md:hidden" src="./images/liberty.png" />
          <img className="hidden md:block" src="./images/libert-desktop.png" />
          <div className="w-[2px] h-[29.844px] bg-first-2 md:w-1 md:h-28"></div>
          <img className="md:hidden" src="./images/lpay.png" />
          <img className="hidden md:block" src="./images/lpay-desktop.png" />
          <div className="w-[2px] h-[29.844px] bg-first-2 md:w-1 md:h-28"></div>
          <img className="md:hidden" src="./images/winwise.png" />
          <img className="hidden md:block" src="./images/winwise-desktop.png" />
        </div>
        <div className="flex items-center justify-center gap-12 md:pr-20">
          <div className="w-[68.271px] h-[2px] bg-first-2 md:w-64 md:h-1"></div>
          <div className="w-[68.271px] h-[2px] bg-first-2 md:w-64 md:h-1"></div>
          <div className="w-[68.271px] h-[2px] bg-first-2 md:w-64 md:h-1"></div>
        </div>
        <div className="flex items-center justify-center flex-row gap-10 pt-5">
          <img className="md:hidden" src="./images/wisper.png" />
          <img className="hidden md:block" src="./images/wisper-desktop.png" />
          <div className="w-[2px] h-[29.844px] bg-first-2 md:w-1 md:h-28"></div>
          <img className="md:hidden" src="./images/paybox.png" />
          <img className="hidden md:block" src="./images/paybox-desktop.png" />
          <div className="w-[2px] h-[29.844px] bg-first-2 md:w-1 md:h-28"></div>
          <img className="md:hidden" src="./images/vuzual.png" />
          <img className="hidden md:block" src="./images/vuzual-desktop.png" />
        </div>
      </div>
    </div>
  );
}
