import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchInput from "./SearchInput";
import TestPanel from "./TestPanel";
function SearchPanel() {
  return (
    <div className="bg-[#ffffff] rounded-xl  my-5">
      <ContentWrapper>
        <SearchInput />
        {/* <TestPanel /> */}
      </ContentWrapper>
    </div>
  );
}
export default SearchPanel;
