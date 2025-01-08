import React from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";

// const tabNames = ["Components","JSX","Props","State"]

function TabButtons({ tabNames, selectedTopic, handleSelect }) {
  return (
    <>
      {tabNames.map((tabName) => {
        const key = tabName.toLowerCase()
        const exampleData = EXAMPLES[key]
        const exampleDataTitle = exampleData.title.toLowerCase()
        const index = tabNames.indexOf(tabName);
        return (
          <>
          {/* <p>{exampleDataTitle}</p> */}
            <TabButton
              selectedTopic={selectedTopic}
              onSelect={() => handleSelect(exampleDataTitle)}
              isSelected={selectedTopic ===exampleDataTitle}
            >
              {tabName}
            </TabButton>
          </>
        );
      })}
    </>
  );
}

export default TabButtons;
