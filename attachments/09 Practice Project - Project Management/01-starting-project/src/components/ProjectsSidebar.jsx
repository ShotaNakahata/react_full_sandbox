import React from "react";
import Button from "./Button";

function ProjectsSidebar({onStartProject}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Youe Prohject
      </h2>
      <div>
        <Button onClick={onStartProject}>+ add Project</Button>
      </div>
      <ul>...some project</ul>
    </aside>
  );
}

export default ProjectsSidebar;
