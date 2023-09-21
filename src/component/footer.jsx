export default function Footer() {
  return (
    <footer className="flex flex-col gap-[60px]">
      <div className="flex flex-col">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl/normal font-bold pb-3">
            get <span className="text-first-3">linked</span>
          </h2>
          <p className="text-xs/5 font-normal w-[271px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex gap-1 mt-8 pb-8">
            <p className="text-xs/5 font-normal">Terms of Use</p>
            <span className="w-[2px] h-[17px] bg-first-3"></span>
            <p className="text-xs/5 font-normal">Privacy Policy</p>
          </div>
          <div className="pb-5">
            <h2 className="text-sm/6 font-semibold text-first-3">
              Useful Links
            </h2>
            <ul>
              <li className="text-white text-xs/5 font-normal">Overview</li>
              <li className="text-white text-xs/5 font-normal">Timeline</li>
              <li className="text-white text-xs/5 font-normal">FAQs</li>
              <li className="text-white text-xs/5 font-normal">Register</li>
            </ul>
          </div>
          <div className="flex flex-row gap-4 pb-6">
            <h2 className="text-first-3 text-xs/normal font-normal">
              Follow us
            </h2>
            <img src="./images/instagram.svg" />
            <img src="./images/facebook.svg" />
            <img src="./images/x.svg" />
            <img src="./images/linkedin.svg" />
          </div>
          <div>
            <h2 className="text-first-3 text-sm/6 font-semibold pb-2">
              Contact us
            </h2>
            <ul>
              <li className="text-white text-xs/[18.948x] font-normal pb-5">
                +234 679 81819
              </li>
              <li className="flex flex-col gap-1 text-white text-xs/[18.948x] font-normal">
                27, Alara Street<span>Yaba 100012</span>
                <span>Lagos State</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p className="text-white text-xs/normal font-normal pb-14">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </footer>
  );
}
