import React from "react";
function ContentWrapper({ children, className }) {
  return (
    <div className={`w-full max-w-[1280px] mx-auto  py-0 ` + className}>
      {children}
    </div>
  );
}
export default ContentWrapper;
