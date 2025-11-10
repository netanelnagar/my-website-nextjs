import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import { useEffect } from "react";
import { useAppContext } from "@/components/context/context";

const Home = () => {
  const { isLoading } = useAppContext();

  useEffect(() => {
    document.title = "Home | Netanel Nagar";
  }, []);

  if (isLoading) return <div className="loader m-auto h-6 w-6"></div>;
  return (
    <main className="min-h-dvh bg-white">
      <Hero />
      <AboutMe />
    </main>
  );
};

export default Home;