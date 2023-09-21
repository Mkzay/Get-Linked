export default function Partners() {
  return (
    <div className="flex flex-col gap-10 pb-[104px] border-b border-white">
      <div className="flex items-center justify-center flex-col pt-10 gap-1">
        <h2 className="text-white text-xl font-bold">Partners and Sponsors</h2>
        <p className="text-white text-center text-xs/5 font-normal w-72">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      <div className="w-[333px] h-[148.59px] border-first-3 border pt-10 rounded-md">
        <div className="flex items-center justify-center flex-row gap-10 pb-3">
          <img src="./images/liberty.png" />
          <img src="./images/lpay.png" />
          <img src="./images/winwise.png" />
        </div>
        <div className="flex items-center justify-center flex-row gap-10">
          <img src="./images/wisper.png" />
          <img src="./images/paybox.png" />
          <img src="./images/vuzual.png" />
        </div>
      </div>
    </div>
  );
}
