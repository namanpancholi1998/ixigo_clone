import React from "react";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SearchInput from "./SearchInput";
function SearchPanel() {
  return (
    <div className="rounded-xl border border-slate-300 my-5">
      <ContentWrapper>
        <SearchInput />
      </ContentWrapper>
    </div>
  );
}
export default SearchPanel;
