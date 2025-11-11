import { Suspense } from "react";
import ProjectsContent from "../../components/projects/ProjectsContent";
import ProjectsSkeleton from "../../components/projects/ProjectsSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "A showcase of my projects demonstrating my skills and expertise as a Full Stack developer.",
};

export const dynamic = "force-dynamic";

const Projects = () => {
      return (
        <section className="py-12 grow bg-slate-100/50">
            <div className="max-w-[800px] mx-auto px-4 md:px-8">
                <div className="flex justify-center h-24">
                    <h1 className="text-6xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
                        Projects
                    </h1>
                </div>
                <Suspense fallback={<ProjectsSkeleton />}>
                    <ProjectsContent />
                </Suspense>
            </div>
        </section>
    )
}


export default Projects;