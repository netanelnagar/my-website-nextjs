const ResumeSkeleton = () => {
  const experienceSkeletons = Array.from({ length: 2 });
  const skillSkeletons = Array.from({ length: 6 });

  return (
    <>
      <div className="flex justify-between items-center mt-16">
        <div className="h-8 w-48 rounded bg-gray-200 animate-pulse" />
        <div className="h-10 w-48 rounded bg-gray-200 animate-pulse" />
      </div>

      <div>
        <div className="space-y-8 mt-5">
          {experienceSkeletons.map((_, index) => (
            <div
              key={`experience-skeleton-${index}`}
              className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="flex flex-col items-center md:justify-evenly bg-gray-100/70 p-3 rounded-lg w-full gap-3">
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 w-40 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-44 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="md:col-span-2 space-y-3">
                {Array.from({ length: 3 }).map((__, lineIndex) => (
                  <div
                    key={`experience-line-${index}-${lineIndex}`}
                    className="h-4 w-full bg-gray-200 rounded animate-pulse"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 space-y-8 shadow-md p-10 rounded-lg bg-white">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-6 w-56 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skillSkeletons.map((_, index) => (
              <div
                key={`skill-skeleton-${index}`}
                className="h-12 bg-gray-100/70 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-8 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {skillSkeletons.map((_, index) => (
              <div
                key={`language-skeleton-${index}`}
                className="h-12 bg-gray-100/70 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSkeleton;