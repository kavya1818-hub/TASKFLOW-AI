const OverdueSection = ({ tasks }) => {

  const overdueTasks = tasks.filter((task) => {

    return (
      task.dueDate &&
      new Date(task.dueDate) < new Date() &&
      task.status !== "Completed"
    );

  });

  if (overdueTasks.length === 0) return null;

  return (

    <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-red-400 mb-5">
        Overdue Alerts
      </h2>

      <div className="space-y-4">

        {overdueTasks.map((task) => (

          <div
            key={task._id}
            className="bg-[#0f172a] p-4 rounded-2xl border border-red-500/20"
          >

            <h3 className="font-semibold text-white">
              {task.title}
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              {task.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  );

};

export default OverdueSection;