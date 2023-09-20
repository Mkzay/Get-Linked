export default function Accordion() {
  return (
    <div className="flex flex-col pt-16">
      <div className="flex items-center justify-center flex-col">
        <h2 className="flex items-center flex-col text-xl font-bold text-white pb-[9px]">
          Frequently Ask
          <span className="text-first-3">Question</span>
        </h2>
        <p className="text-center text-white text-[13px]/[27.5px] font-normal w-[293px]">
          We got answers to the questions that you might want to ask about
          <span className="font-bold">getlinked Hackathon 1.0</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <div>
          <h3>Can I work on a project I started before the hackathon?</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
}
