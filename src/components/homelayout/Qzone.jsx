import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img className="border-2 border-dashed border-[#E7E7E7] w-full " src={swimmingImage} alt="" />
        <img className="border-2 border-dashed border-[#E7E7E7] w-full" src={classImage} alt="" />
        <img className="border-2 border-dashed border-[#E7E7E7] w-full" src={playImage} alt="" />
      </div>
    </div>
  );
};

export default QZone;