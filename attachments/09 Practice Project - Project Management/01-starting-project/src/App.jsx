import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar />
      <NewProject />
      <NoProjectSelected/>
    </main>
  );
}

export default App;
