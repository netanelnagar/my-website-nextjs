import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";


type Project = {
  title: string;
  imgName: string;
  tech: string[];
  description: string;
  gitHubLink?: string;
};

type Experience = {
  period: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export type HomeData = {
  projects: Project[];
  experiences: Experience[];
  professionalSkillsAndLanguages: {
    professionalSkills: string[];
    languages: string[];
  };
};

export const dynamic = "force-dynamic";

export async function GET(): Promise<NextResponse<HomeData | { error: string }>> {
  try {
    const snapshot = await getDocs(collection(db, "home"));
    const dataInOrder: HomeData = { projects: [], experiences: [], professionalSkillsAndLanguages: { professionalSkills: [], languages: [] } };

    snapshot.docs.forEach((doc) => {
      const id = doc.id.toLowerCase();
      if (id.startsWith("project")) {
        dataInOrder.projects.push(doc.data() as Project);
      } else if (id.startsWith("experience")) {
        dataInOrder.experiences.push(doc.data() as Experience);
      } else {
        // @ts-ignore
        dataInOrder[doc.id] = doc.data();
      }
    });

    console.log(dataInOrder)


    return NextResponse.json(dataInOrder);
  } catch (error) {
    console.error("Failed to load resume data", error);
    return NextResponse.json(
      { error: "Failed to load resume data" },
      { status: 500 }
    );
  }
}