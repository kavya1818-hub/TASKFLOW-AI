const ReminderPane = ({ tasks }) => {

  return (

    <div className="bg-white/10 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Today's Reminders
      </h2>

      <div className="space-y-4">

        {tasks
          .filter((task) => {

            if (!task.dueDate) return false;

            return (
              new Date(task.dueDate).toDateString() ===
              new Date().toDateString()
            );

          })
          .map((task) => (

            <div
              key={task._id}
              className="bg-[#0f172a] p-4 rounded-2xl border-l-4 border-yellow-400"
            >

              <h3 className="font-semibold">
                {task.title}
              </h3>

              <p className="text-sm text-gray-400 mt-2">
                {task.description}
              </p>

            </div>

          ))}

      </div>

    </div>

  );
};

export default ReminderPane;