import React from "react";

function MaxWLayout({ children }) {
  return (
    <div className="relative">
      <div className="max-w-screen-xl p-5 mx-auto">{children}</div>
    </div>
  );
}

export default MaxWLayout;
