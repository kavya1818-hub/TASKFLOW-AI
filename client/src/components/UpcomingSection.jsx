const UpcomingSection = ({ tasks }) => {

  return (

    <div className="bg-white/10 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Upcoming Deadlines
      </h2>

      <div className="space-y-4">

        {tasks
          .filter((task) => task.dueDate)
          .slice(0, 5)
          .map((task) => (

            <div
              key={task._id}
              className="bg-[#0f172a] p-4 rounded-2xl"
            >

              <h3 className="font-semibold">
                {task.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                {new Date(task.dueDate).toLocaleDateString()}
              </p>

            </div>

          ))}

      </div>

    </div>

  );

};

export default UpcomingSection;