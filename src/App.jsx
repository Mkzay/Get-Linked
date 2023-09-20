import Nav from "./component/navigation";
import Main from "./component/main";
import Section1 from "./component/sections/section-1";
import Section2 from "./component/sections/section-2";
import Section3 from "./component/sections/section-3";
import Accordion from "./component/accordion";
export default function App() {
  return (
    <div className="flex items-center justify-center flex-col bg-first-1 text-white">
      <Nav />
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Accordion />
    </div>
  );
}
