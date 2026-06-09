const ProgressSection = ({
  progress,
  completedTasks,
  totalTasks,
}) => {

  return (

    <div className="bg-white/10 border border-white/10 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-4">

        <h2 className="text-2xl font-bold">
          Productivity Progress
        </h2>

        <span className="text-cyan-400 font-bold text-xl">
          {progress}%
        </span>

      </div>

      <div className="w-full bg-[#0f172a] rounded-full h-5 overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="text-gray-400 mt-4">
        Completed {completedTasks} out of {totalTasks} tasks
      </p>

    </div>

  );

};

export default ProgressSection;