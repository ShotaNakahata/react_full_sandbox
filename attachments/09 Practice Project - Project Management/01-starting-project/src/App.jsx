import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject(params) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  // id: Math.random(),

  function handleAddProject(projectData) {
    setProjectState((prev) => {
      const newProject = {
        projectData,
        id: Math.random(),
      };
      return {
        ...prev,
        projects: [...prev.projects, newProject],
      };
    });
  }
  console.log(projectState)
  
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject}/>;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartProject={handleStartProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
