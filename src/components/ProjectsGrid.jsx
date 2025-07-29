
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../../data/projectsData";
const ProjectsGrid = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="h-auto grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3, mb-10">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} onOpen={setSelected} />
        ))}
      </div>

      <ProjectModal
        project={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
};

export default ProjectsGrid;
