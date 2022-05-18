import React from "react";

function MaxWLayout({ children }) {
  return (
    <div className="relative px-5">
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </div>
  );
}

export default MaxWLayout;
