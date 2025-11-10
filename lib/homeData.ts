import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type Project = {
  title: string;
  imgName: string;
  tech: string[];
  description: string;
  gitHubLink?: string;
};

export type Experience = {
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
  [key: string]: unknown;
};

export async function fetchData(): Promise<HomeData> {
  try {
    const snapshot = await getDocs(collection(db, "home"));
    const data: HomeData = {
      projects: [],
      experiences: [],
      professionalSkillsAndLanguages: {
        professionalSkills: [],
        languages: [],
      },
    };

    snapshot.docs.forEach((doc) => {
      const id = doc.id.toLowerCase();

      if (id.startsWith("project")) {
        data.projects.push(doc.data() as Project);
      } else if (id.startsWith("experience")) {
        data.experiences.push(doc.data() as Experience);
      } else {
        data[doc.id] = doc.data();
      }
    });

    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw error;
  }
}