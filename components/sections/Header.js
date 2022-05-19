import React from "react";
import LeftPortion from "../utils/LeftPortion";

function Header({ datas }) {
  return (
    <>
      <div className="min-h-screen grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        {/* Left Portion */}
        <LeftPortion datas={datas} />

        {/* Right Portion */}
        <div></div>
      </div>
    </>
  );
}

export default Header;
