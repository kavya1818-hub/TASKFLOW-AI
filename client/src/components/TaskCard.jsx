import { motion } from "framer-motion";
import {
  FaTrash,
  FaCheck,
  FaEdit,
  FaClock,
} from "react-icons/fa";

function TaskCard({
  task,
  deleteTask,
  markCompleted,
  handleEditClick,
}) {

  const overdue =
    task.dueDate &&
    new Date(task.dueDate) < new Date() &&
    task.status !== "Completed";

  const today =
    task.dueDate &&
    new Date(task.dueDate).toDateString() ===
    new Date().toDateString();

  const priorityColor =
    task.priority === "High"
      ? "bg-red-500/20 text-red-300"
      : task.priority === "Medium"
      ? "bg-cyan-500/20 text-cyan-300"
      : "bg-green-500/20 text-green-300";

  return (

    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`bg-[#0f172a] border rounded-3xl p-6 flex justify-between items-start transition-all duration-300 ${
        overdue
          ? "border-red-500"
          : today
          ? "border-yellow-400"
          : "border-white/10"
      }`}
    >

      <div className="flex-1">

        <div className="flex items-center gap-3 mb-3 flex-wrap">

          <h2 className="text-2xl font-bold text-white">
            {task.title}
          </h2>

          {overdue && (

            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-xl text-xs flex items-center gap-2">
              <FaClock />
              Overdue
            </span>

          )}

          {today &&
            task.status !== "Completed" && (

            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-xl text-xs">
              Due Today
            </span>

          )}

        </div>

        <p className="text-gray-400 mb-5">
          {task.description}
        </p>

        <div className="flex flex-wrap gap-3">

          <span
            className={`${priorityColor} px-4 py-2 rounded-xl text-sm`}
          >
            {task.priority}
          </span>

          <span
            className={`px-4 py-2 rounded-xl text-sm ${
              task.status === "Completed"
                ? "bg-green-500/20 text-green-300"
                : "bg-yellow-500/20 text-yellow-300"
            }`}
          >
            {task.status}
          </span>

          {task.dueDate && (

            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-xl text-sm">

              Due:{" "}
              {new Date(
                task.dueDate
              ).toLocaleDateString()}

            </span>

          )}

        </div>

      </div>

      <div className="flex gap-3 ml-5">

        {task.status !== "Completed" && (

          <button
            onClick={() => markCompleted(task)}
            className="bg-green-500 hover:bg-green-600 p-3 rounded-xl transition"
          >
            <FaCheck />
          </button>

        )}

        <button
          onClick={() => handleEditClick(task)}
          className="bg-cyan-500 hover:bg-cyan-600 p-3 rounded-xl transition"
        >
          <FaEdit />
        </button>

        <button
          onClick={() => deleteTask(task._id)}
          className="bg-red-500 hover:bg-red-600 p-3 rounded-xl transition"
        >
          <FaTrash />
        </button>

      </div>

    </motion.div>

  );

}

export default TaskCard;
