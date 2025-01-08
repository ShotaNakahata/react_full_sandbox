import React, { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import  TabButtons  from "./TabButtons";

export const Example = () => {
  let tabContent = <p>Please select a topic.</p>;
  const tabNames = ["Components","JSX","Props","State"]
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <>
      <h2>Examples</h2>
      <menu>
        <TabButtons 
        tabNames={tabNames} 
        selectedTopic={selectedTopic} 
        handleSelect={handleSelect}
        />
      </menu>
      {tabContent}
    </>
  );
};
