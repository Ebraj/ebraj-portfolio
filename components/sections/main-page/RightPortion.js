import React from "react";
import Armors from "../../utils/Armors";
import Projects from "../../utils/Projects";
import Footer from "../../utils/Footer";

function RightPortion({ datas }) {
  return (
    <div>
      <Projects datas={datas} />
      <Armors datas={datas} />
      <Footer />
    </div>
  );
}

export default RightPortion;
