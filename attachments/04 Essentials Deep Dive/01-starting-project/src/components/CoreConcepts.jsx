import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
export const CoreConcepts = () => {
  return (
    <>
      <section id="core-concepts">
        <h2>Core Components</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </section>
    </>
  );
};
