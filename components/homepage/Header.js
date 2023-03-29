import React from "react";
import LeftPortion from "./LeftPortion";
import RightPortion from "./RightPortion";

function Header() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[45%_45%] md:gap-[10%] relative">
        {/* Left Portion */}
        <div>
          <LeftPortion />
        </div>

        {/* Right Portion */}
        <div>
          <RightPortion />
        </div>
      </div>
    </>
  );
}

export default Header;
