import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const aboutMe = {
  header: process.env.NEXT_PUBLIC_ABOUT_HEADER ?? "",
  body: process.env.NEXT_PUBLIC_ABOUT_BODY ?? "",
  linkedIn: process.env.NEXT_PUBLIC_ABOUT_LINKEDIN ?? "",
  gitHub: process.env.NEXT_PUBLIC_ABOUT_GITHUB ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_LINK ?? "",
};

const AboutMe = () => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
            About Me
          </span>
        </h2>

        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mb-8">
          {aboutMe.header}
        </h3>

        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          {aboutMe.body}
        </p>

        <div className="flex justify-center gap-8">
          <a
            href={aboutMe.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-primary hover:text-secondary transition-colors"
          >
            <FaLinkedinIn size={32} />
          </a>
          <a
            href={aboutMe.gitHub}
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
            aria-label="GitHub"
          >
            <IoLogoGithub size={32} />
          </a>
          <a
            href={aboutMe.whatsapp}
            target="_blank"
            className="text-primary hover:text-secondary transition-colors"
            aria-label="Twitter"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;