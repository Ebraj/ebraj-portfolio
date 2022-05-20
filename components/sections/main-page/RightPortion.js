import React from "react";
import Armors from "../../utils/Armors";
import Projects from "../../utils/Projects";

function RightPortion({ datas }) {
  return (
    <div>
      <Projects datas={datas} />
      <Armors datas={datas} />
    </div>
  );
}

export default RightPortion;
