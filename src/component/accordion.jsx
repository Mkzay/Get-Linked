export default function Accordion() {
  return (
    <div className="flex flex-col pt-16 pb-12 gap-[86px] border-b border-white">
      <div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="flex items-center flex-col text-xl font-bold text-white pb-[9px]">
            Frequently Asked
            <span className="text-first-3">Questions</span>
          </h2>
          <p className="text-center text-white text-[13px]/[27.5px] font-normal w-60">
            We got answers to the questions that you might want to ask about
            <span className="font-bold"> getlinked Hackathon 1.0</span>
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div>
            <div className="flex items-center border-b border-first-3 w-full pt-8">
              <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 pb-2">
                Can I work on a project I started before the hackathon?
              </div>
              <button className="relative -bottom-1">
                <img src="./images/plus.png" />
              </button>
            </div>
            <div className="text-white text-xs/[18px] font-normal w-[270px] hidden">
              No, you may not.
            </div>
          </div>

          <div>
            <div className="flex items-center border-b border-first-3 w-full pt-4">
              <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 pb-2">
                What happens if I need help during the hackathon?
              </div>
              <button className="relative -bottom-1">
                <img src="./images/plus.png" />
              </button>
            </div>
            <div className="text-white text-xs/[18px] font-normal w-[270px] hidden">
              Surpass your limits.
            </div>
          </div>

          <div>
            <div className="flex items-center border-b border-first-3 w-full pt-4">
              <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 pb-2">
                What happens if I don&apost have an idea for a project?
              </div>
              <button className="relative -bottom-1">
                <img src="./images/plus.png" />
              </button>
            </div>
            <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 hidden">
              Omo, go and make research o!
            </div>
          </div>

          <div>
            <div className="flex items-center border-b border-first-3 w-full pt-4">
              <div className="text-white text-xs/[18px] font-normal w-[270px] pr-12 h-10 pb-2">
                Can I join a team or do I have to come with one?
              </div>
              <button className="relative -bottom-1">
                <img src="./images/plus.png" />
              </button>
            </div>
            <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 hidden">
              You can join a team, or do it alone. The choice is yours.
            </div>
          </div>

          <div>
            <div className="flex items-center border-b border-first-3 w-full pt-4">
              <div className="text-white text-xs/[18px] font-normal w-[270px] pr-20 h-10 pb-2">
                What happens after the hackathon ends?
              </div>
              <button className="relative -bottom-1">
                <img src="./images/plus.png" />
              </button>
            </div>
            <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 hidden">
              The prizes are given to the winners, and the other participants go
              on to better themselves.
            </div>
          </div>

          <div>
            <div className="flex items-center border-b border-first-3 w-full pt-4">
              <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 pb-2">
                Can I work on a project I started before the hackathon?
              </div>
              <button className="relative -bottom-1">
                <img src="./images/plus.png" />
              </button>
            </div>
            <div className="text-white text-xs/[18px] font-normal w-[270px] h-10 hidden">
              I don&apost know mehn, I think so.
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="./images/cwok-casual-211.png" />
      </div>
    </div>
  );
}
