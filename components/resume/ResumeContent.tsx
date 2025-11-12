import { CiSaveDown2 } from "react-icons/ci";
import { HiScissors } from "react-icons/hi2";
import { IoCodeSlashSharp } from "react-icons/io5";
import { getUrl } from "@/lib/firebase";
import { fetchData } from "@/lib/homeData";
import { cacheLife } from "next/cache";


const ResumeContent = async () => {
    'use cache'
    cacheLife('hours')
    const { experiences, professionalSkillsAndLanguages } = await fetchData();
    const url = await getUrl(process.env.RESUME_FILE_NAME || "netanelnagar-fullstack.pdf");
    return (
        <>
            <div className="flex justify-between items-center mt-16">
                <h2 className="text-3xl font-bold text-primary">Experience</h2>
                <a
                    className="h-10 px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary hover:bg-primary/90 text-white"
                    href={url}
                    target="_blank"
                >
                    <CiSaveDown2 className="mr-2" />
                    Open Resume
                </a>
            </div>

            <div>
                <div className="space-y-8 mt-5">
                    {experiences.map((experience, index) => (
                        <div
                            key={`${experience.company}-${experience.period}-${index}`}
                            className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            <div className="flex flex-col items-center md:justify-evenly bg-gray-100/70 p-3 rounded-lg text-center">
                                <span className="text-primary font-bold">{experience.period}</span>
                                <h3 className="text-xl font-bold mt-2">{experience.title}</h3>
                                <p className="text-gray-600">
                                    {experience.company} | {experience.location}
                                </p>
                            </div>
                            <div className="text-gray-600 leading-relaxed md:col-span-2 space-y-3">
                                {experience.description.split("\n").map((line, detailIndex) => (
                                    <p key={detailIndex}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 space-y-8 shadow-md p-10 rounded-lg bg-white">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <HiScissors className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
                            Professional Skills
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {professionalSkillsAndLanguages.professionalSkills.map((skill) => (
                            <div key={skill} className="p-4 bg-gray-50 rounded-lg">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <IoCodeSlashSharp className="w-8 h-8 text-primary" />
                        <h2 className="text-3xl font-bold bg-linear-to-r from-primary to-secondary text-transparent bg-clip-text">
                            Languages
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {professionalSkillsAndLanguages.languages.map((language) => (
                            <div key={language} className="p-4 bg-gray-50 rounded-lg">
                                {language}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResumeContent;