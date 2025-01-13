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
  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  } else if (projectState.selectedProjectId === undefined) {
    content =<NoProjectSelected onStartProject={handleStartProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
