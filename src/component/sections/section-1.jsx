export default function Section1() {
  return (
    <section className="flex items-center justify-center flex-col mt-7 pb-16 border-b border-white w-full md:flex-row md:gap-20">
      <div>
        <img className="md:hidden" src="./images/the-big-idea-1.png" />
        <img className="hidden md:block" src="./images/lightbul-desktop.png" />
      </div>
      <div className="flex items-center justify-center flex-col pt-[58px]">
        <h2 className="flex items-center flex-col text-xl font-bold text-white pb-[9px] md:text-[32px]/0px">
          Introduction to getlinked
          <span className="text-first-3">tech Hackathon 1.0</span>
        </h2>
        <p className="text-center text-white text-xs/[27.5px] font-normal w-80 md:text-sm/[27.5px] md:w-[535px]">
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
