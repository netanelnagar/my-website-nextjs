import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

export type HomeData = {
  projects: Record<string, any>[];
  experiences: Record<string, any>[];
  [key: string]: unknown;
};

export async function fetchHomeData(): Promise<HomeData> {
  const snapshot = await getDocs(collection(db, "home"));
  const dataInOrder: HomeData = { projects: [], experiences: [] };

  snapshot.docs.forEach((doc) => {
    const id = doc.id.toLowerCase();
    if (id.startsWith("project")) {
      dataInOrder.projects.push(doc.data());
    } else if (id.startsWith("experience")) {
      dataInOrder.experiences.push(doc.data());
    } else {
      dataInOrder[doc.id] = doc.data();
    }
  });

  return dataInOrder;
}