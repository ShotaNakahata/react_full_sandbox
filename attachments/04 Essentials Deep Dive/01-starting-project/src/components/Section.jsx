import React from "react";

function Section({ children, title, ...props }) {
  return (
    <>
      <section {...props}>
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}

export default Section;
