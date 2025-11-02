import BodyRecordChart from "@/components/BodyRecordChart";
import { useState } from "react";

const buttons = ["日", "週", "月", "年"];

const BodyRecord = () => {
  const [activeButton, setActiveButton] = useState("年");

  return (
    <div id="body-record" className="mb-14 bg-dark-500 px-6 py-4">
      <div className="flex">
        <h3 className="text-white text-15px max-w-24">BODY RECORD</h3>
        <h2 className="text-2xl-2 text-white">2021.05.21</h2>
      </div>

      <BodyRecordChart className="!bg-dark-500 h-[205px]" />

      {/* Time Period Buttons */}
      <div className="flex gap-4 sm:mt-0 mt-2">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => setActiveButton(button)}
            className={`w-14 h-6 rounded-xl text-sm transition-colors ${
              activeButton === button
                ? "bg-primary-300 text-white"
                : "bg-white text-primary-300"
            }`}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BodyRecord;
