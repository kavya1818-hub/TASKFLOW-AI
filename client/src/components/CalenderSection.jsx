import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarSection({
  date,
  setDate,
  selectedDateTasks,
}) {
  return (
    <div className="bg-white/10 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Calendar
      </h2>

      <Calendar
        onChange={setDate}
        value={date}
      />

      <div className="mt-6">

        <h3 className="text-xl font-semibold mb-4">
          Tasks On Selected Date
        </h3>

        {selectedDateTasks.length === 0 ? (

          <div className="bg-[#0f172a] p-4 rounded-2xl text-gray-400">
            No tasks for this date
          </div>

        ) : (

          <div className="space-y-3">

            {selectedDateTasks.map((task) => (

              <div
                key={task._id}
                className="bg-[#0f172a] p-4 rounded-2xl"
              >

                <h4 className="font-semibold">
                  {task.title}
                </h4>

                <p className="text-sm text-gray-400 mt-1">
                  {task.description}
                </p>

                <div className="flex gap-3 mt-3">

                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-xl text-sm">
                    {task.priority}
                  </span>

                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-xl text-sm">
                    {task.status}
                  </span>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
}

export default CalendarSection;