import React from "react";
import CountUp from "react-countup";

export default function History() {
  return (
    <div className="grid self-center grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 lg:px-8 md:px-8 px-12">
      <div className="flex gap-2">
        <p className="text-accent text-2xl font-bold">
          <CountUp start={0} end={1} duration={3} />+
        </p>
        <p className="text-md text-white">
          Years of <br /> Experience
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-accent text-2xl font-bold">
          <CountUp start={0} end={8} duration={3} />+
        </p>
        <p className="text-md text-white">
          Technologies <br /> Know
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-accent text-2xl font-bold">
          <CountUp start={0} end={10} duration={3} />+
        </p>
        <p className="text-md text-white">
          Projects <br /> Completed
        </p>
      </div>
      <div className="flex gap-2">
        <p className="text-accent text-2xl font-bold">
          <CountUp start={0} end={400} duration={3} />+
        </p>
        <p className="text-md text-white">
          Code <br /> Contributions
        </p>
      </div>
    </div>
  );
}
