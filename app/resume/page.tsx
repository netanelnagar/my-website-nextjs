import { Suspense } from "react";
import ResumeContent from "../../components/resume/ResumeContent";
import ResumeSkeleton from "../../components/resume/ResumeSkeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Explore my professional experience, skills, and accomplishments as a Full Stack developer through my comprehensive resume.",
};

export const dynamic = "force-dynamic";

const ResumePage = () => {
  return (
    <section className="py-12 bg-slate-100/50">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="flex justify-center">
          <h1 className="text-6xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text text-center">
            Resume
          </h1>
        </div>
        <Suspense fallback={<ResumeSkeleton />}>
          <ResumeContent />
        </Suspense>
      </div>
    </section>
  );
};

export default ResumePage;