const ProjectsSkeleton = () => {
  const placeholders = Array.from({ length: 2 });

  return (
    <div className="space-y-8 mt-4">
      {placeholders.map((_, index) => (
        <div
          key={`project-skeleton-${index}`}
          className="bg-white rounded-xl shadow-md flex flex-col sm:flex-row-reverse"
        >
          <div className="w-full md:w-1/3 p-4 flex justify-center items-center">
            <div className="w-full h-[250px] bg-gray-200 rounded-xl animate-pulse" />
          </div>
          <div className="w-full md:w-2/3 p-6 space-y-6">
            <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-20 w-full bg-gray-200 rounded animate-pulse" />
            <div className="space-y-2">
              {Array.from({ length: 3 }).map((__, lineIndex) => (
                <div
                  key={`project-skeleton-line-${index}-${lineIndex}`}
                  className="h-4 w-full bg-gray-200 rounded animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSkeleton;