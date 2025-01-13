import React from "react";
import Button from "./Button";

function ProjectsSidebar({ onStartProject, projects, onSelectProject,selecterProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        Youe Prohject
      </h2>
      <div>
        <Button onClick={onStartProject}>+ add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800  hover:text-stone-200"
          if(project.id===selecterProjectId){
            cssClass+=" bg-stone-800 text-stone-200"
          }else{
            cssClass += " text-stone-400"
          }
          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={()=>onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
