import React, { useState, useEffect } from "react";

export default function Main() {
  // Define the initial time values
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Function to update the time values
    const updateTime = () => {
      // Calculate the remaining time in seconds
      const currentTime = new Date();
      const eventTime = new Date("2023-12-31T12:59:59"); // Replace with your event time
      const timeDiff = Math.max(eventTime - currentTime, 0) / 1000;

      // Calculate hours, minutes, and seconds
      const newHours = Math.floor(timeDiff / 3600);
      const newMinutes = Math.floor((timeDiff % 3600) / 60);
      const newSeconds = Math.floor(timeDiff % 60);

      // Update the state with new values
      setHours(newHours.toString().padStart(2, "0"));
      setMinutes(newMinutes.toString().padStart(2, "0"));
      setSeconds(newSeconds.toString().padStart(2, "0"));
    };

    // Update the time initially
    updateTime();

    // Update the time every second
    const interval = setInterval(updateTime, 100);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex flex-col items-center justify-center border-b border-white w-full mb-4">
      <div className="flex justify-center md:justify-end w-full">
        <h2 className="text-white text-base/normal font-bold italic pt-10 pb-14 w-[324px] md:text-3xl/normal md:w-[742px]">
          Igniting a Revolution in HR Innovation
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row px-12">
        <div className="flex flex-col items-center justify-center md:items-start pb-20">
          <h1 className="text-white text-[32px] font-bold pb-[3px] md:text-[70px]/normal">
            getlinked Tech
          </h1>
          <h1 className="flex items-center text-white text-[32px] font-bold pb-[9px] md:text-[80px]/normal">
            Hackathon <span className="text-first-3">1.0</span>
            <img className="md:hidden" src="./images/chain.png" />
            <img className="hidden md:block" src="./images/chain-desktop.png" />
            <img className="md:hidden" src="./images/boom.png" />
            <img
              className="hidden md:block md:w-20 md:h-20"
              src="./images/boom.png"
            />
          </h1>
          <p className="text-[13px]/[21.58px] font-normal w-[264px] pb-6 md:text-xl/[33.3px] md:w-[522px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <button className="w-[152px] h-[46.837] bg-gradient-to-r from-[#FE34B9] via-first-3  to-first-2 text-sm font-normal text-white py-[15px] px-[46px] mb-[14px] rounded md:mb-12">
            Register
          </button>
          <h1 className="text-white text-5xl font-normal font-unica pt-5 md:pt-0">
            {hours}
            <sub className="text-sm">H</sub> {minutes}
            <sub className="text-sm">M</sub> {seconds}
            <sub className="text-sm">S</sub>
          </h1>
        </div>
        <div className="bg-[url('../images/man.png')] bg-no-repeat bg-cover md:bg-cover pb-4 h-full w-full">
          <img className="md:hidden animate-spin" src="./images/orb.png" />
          <img
            className="hidden md:block animate-spin"
            src="./images/orb-desktop.png"
          />
        </div>
      </div>
    </main>
  );
}
