export default function Section3() {
  return (
    <section className="flex items-center justify-center flex-col mt-[74px] pb-12 border-b border-white w-full md:flex-row">
      <div>
        <img className="md:hidden" src="./images/peeps.png" />
        <img className="hidden md:block" src="./images/peeps-desktop.png" />
      </div>
      <div className="flex items-center justify-center flex-col pt-2 gap-4 md:items-start">
        <h2 className="flex items-center flex-col text-xl font-bold text-white md:text-[32px]/0px md:items-start">
          Judging Criteria
          <span className="text-first-3">Key attributes</span>
        </h2>
        <p className="text-center text-white text-[13px]/[22.555px] font-normal w-80 md:w-[533px] md:text-left md:text-base/[27.76px]">
          <span className="text-first-4 font-bold">
            Innovation and Creativity:{" "}
          </span>
          Evaluate the uniqueness and creativity of the solution. Consider
          whether it addresses a real-world problem in a novel way or introduces
          innovative features.
        </p>
        <p className="text-center text-white text-[13px]/[22.555px] font-normal w-80 md:w-[533px] md:text-left md:text-base/[27.76px]">
          <span className="text-first-4 font-bold">Functionality: </span>
          Determine the potential impact of the solution in the real world. Does
          it address a significant problem, and is it relevant to the target
          audience? Judges would assess the potential social, economic, or
          environmental benefits.
        </p>
        <p className="text-center text-white text-[13px]/[22.555px] font-normal w-80 md:w-[533px] md:text-left md:text-base/[27.76px]">
          <span className="text-first-4 font-bold">Technical Complexity: </span>
          Evaluate the technical sophistication of the solution. Judges would
          consider the complexity of the code, the use of advanced technologies
          or algorithms, and the scalability of the solution.
        </p>

        <p className="text-center text-white text-[13px]/[22.555px] font-normal w-80 md:w-[533px] md:text-left md:text-base/[27.76px]">
          <span className="text-first-4 font-bold">
            Adherence to Hackathon Rules:{" "}
          </span>
          Judges will ensure that the team adhered to the rules and guidelines
          of the hackathon, including deadlines, use of specific technologies or
          APIs, and any other competition-specific requirements.
        </p>
        <button className="w-[96.34965px] h-8 bg-gradient-to-r from-[#FE34B9] via-first-3  to-first-2 text-xs font-normal text-white rounded mt-6 pt-2 pb-[11.35px] pl-3.5 pr-[9.35px]">
          Read More
        </button>
      </div>
    </section>
  );
}
