import React from "react";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";
export const CoreConcepts = () => {
  return (
    <>
      <Section id="core-concepts" title="Core Components">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept key={conceptItem.title} {...conceptItem} />
          ))}
        </ul>
      </Section>
    </>
  );
};

