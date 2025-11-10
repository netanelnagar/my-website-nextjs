import { FaGithub } from "react-icons/fa6";
import ImageP from "@/components/ImageP";
import { HomeData } from "@/app/api/data/route";



async function fetchProjects(): Promise<HomeData> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const res = await fetch(`${baseUrl}/api/data`);

  if (!res.ok) {
    throw new Error("Failed to load projects");
  }

  return res.json() as Promise<HomeData>;
}

const ProjectsContent = async () => {
  const { projects } = await fetchProjects();
  console.log(projects)
  return (
    <div className="space-y-8 mt-4">
      {projects.map((project, index) => (
        <div
          key={`${project.title}-${index}`}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col sm:flex-row-reverse"
        >
          <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
            <ImageP
              src={project.imgName}
              width={250}
              height={250}
              alt={project.imgName}
              
            />
          </div>
          <div className="w-full md:w-2/3 text-gray-600 leading-relaxed p-6 grid place-items-center overflow-y-auto space-y-6">
            <div
              className={`flex ${project.gitHubLink ? "justify-between" : "justify-center md:justify-start"
                } w-full text-primary font-bold`}
            >
              <span>{project.title}</span>
              {project.gitHubLink && (
                <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                  <FaGithub className="h-7 w-7" />
                </a>
              )}
            </div>
            {Array.isArray(project.tech) && (
              <div className="text-primary font-bold w-full max-h-32 overflow-auto bg-gray-100/70 p-2 rounded-lg">
                {project.tech.join(" | ")}
              </div>
            )}
            {project.description
              .replace(/\\n/g, "\n")
              .split("\n")
              .map((line, lineIndex) => (
                <span key={`${project.title}-line-${lineIndex}`}>
                  {line}
                  <br />
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContent;