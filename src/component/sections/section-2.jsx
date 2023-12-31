export default function Section2() {
  return (
    <section className="flex items-center justify-center flex-col pb-12 border-b border-white w-full md:flex-row-reverse">
      <div>
        <img className="md:hidden" src="./images/chair.png" />
        <img className="hidden md:block" src="./images/chair-desktop.png" />
      </div>
      <div className="flex items-center justify-center flex-col pt-2">
        <h2 className="flex items-center flex-col text-xl font-bold text-white pb-[9px] md:text-[32px]/0px">
          Rules and
          <span className="text-first-3">Guidelines</span>
        </h2>
        <p className="text-center text-white text-[13px]/[27.5px] font-normal w-80 md:text-sm/[27.5px] md:w-[535px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding
          genius, a design maverick, or a concept wizard, you&apos;ll have the
          chance to transform your ideas into reality. Solving real-world
          problems, pushing the boundaries of technology, and creating solutions
          that can change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
    </section>
  );
}
