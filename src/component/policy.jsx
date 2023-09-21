export default function Privacy() {
  return (
    <div className="flex items-center justify-center flex-col pt-[71px] pb-40 bg-[url('../images/lock.png')] bg-no-repeat bg-[200%_82%] bg-contain w-full md:flex-row">
      <div>
        <div className="pb-7">
          <h2 className="flex items-center flex-col text-xl/normal font-bold text-white pb-[9px] md:text-[32px] md:items-start">
            Privacy Policy and
            <span className="text-first-3">Terms</span>
            <span className="text-xs text-[rgba(255, 255, 255, 0.75)] font-normal">
              Last updated on September 12, 2023
            </span>
          </h2>
          <p className="text-white text-center text-xs/[22.608px] font-normal w-72 md:text-sm/[26.376px] md:w-[438px] md:text-left">
            Below are our privacy & policy, which outline a lot of goodies.
            it&apos;s our aim to always take of our participant
          </p>
        </div>
        <div className="flex flex-col w-[295px] border border-first-3 gap-5 pb-14 md:w-[569px] md:justify-stretch">
          <div className="flex items-center justify-center">
            <p className="text-white text-center text-xs/[25.968px] font-normal w-[268px] pt-[45px] md:w-[425px] md:text-sm/[30.296px] md:text-left">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
          </div>
          <div className="flex flex-col gap-5 pl-5 md:items-center">
            <h2 className="flex flex-col text-first-3 text-[13px]/7 font-bold md:text-base/[34.624px] md:items-start">
              Licensing Policy
              <span className="text-xs text-white md:text-sm/[30.296px]">
                Here are terms of our Standard License:
              </span>
            </h2>
            <ul>
              <li className="text-white text-xs/5 font-normal w-[218px] pb-6 md:w-[401px] md:text-sm/[30.296px]">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li className="text-white text-xs/5 font-normal w-[218px] md:w-[401px] md:text-sm/[30.296px]">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <button className="w-[96.34965px] h-8 bg-gradient-to-r from-[#FE34B9] via-first-3  to-first-2 text-xs font-normal text-white rounded mt-6 pt-2 pb-[11.35px] pl-3.5 pr-[9.35px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <img className="md:hidden" src="./images/padlock.png" />
        <img className="hidden md:block" src="./images/padlock-desktop.png" />
      </div>
    </div>
  );
}
