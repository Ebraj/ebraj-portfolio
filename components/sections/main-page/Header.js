import React from "react";
import LeftPortion from "./LeftPortion";
import RightPortion from "./RightPortion";

function Header({ datas }) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-32 relative">
        {/* Left Portion */}
        <div>
          <LeftPortion datas={datas} />
        </div>

        {/* Right Portion */}
        <div>
          <RightPortion datas={datas} />
        </div>
      </div>
    </>
  );
}

export default Header;
