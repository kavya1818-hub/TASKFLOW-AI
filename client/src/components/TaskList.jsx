import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

const TaskList = ({
  filteredTasks,
  deleteTask,
  markCompleted,
  handleEditClick,
  filter,
  setFilter,
  search,
  setSearch,
}) => {

  return (

    <div className="bg-white/10 border border-white/10 rounded-3xl p-6">

      {/* TOP BAR */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <h2 className="text-3xl font-bold text-white">
          Your Tasks
        </h2>

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#0f172a] border border-white/10 px-4 py-3 rounded-2xl outline-none text-white w-full lg:w-[260px]"
        />

      </div>

      {/* FILTERS */}

      <div className="flex flex-wrap gap-3 mb-8">

        <button
          onClick={() => setFilter("All")}
          className={`px-5 py-2 rounded-xl transition ${
            filter === "All"
              ? "bg-cyan-500 text-white"
              : "bg-white/10 text-gray-300"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("Pending")}
          className={`px-5 py-2 rounded-xl transition ${
            filter === "Pending"
              ? "bg-yellow-500 text-white"
              : "bg-white/10 text-gray-300"
          }`}
        >
          Pending
        </button>

        <button
          onClick={() => setFilter("Completed")}
          className={`px-5 py-2 rounded-xl transition ${
            filter === "Completed"
              ? "bg-green-500 text-white"
              : "bg-white/10 text-gray-300"
          }`}
        >
          Completed
        </button>

        <button
          onClick={() => setFilter("High Priority")}
          className={`px-5 py-2 rounded-xl transition ${
            filter === "High Priority"
              ? "bg-red-500 text-white"
              : "bg-white/10 text-gray-300"
          }`}
        >
          High Priority
        </button>

      </div>

      {/* TASKS */}

      <div className="space-y-5">

        {filteredTasks.length === 0 ? (

          <EmptyState />

        ) : (

          filteredTasks.map((task) => (

            <TaskCard
              key={task._id}
              task={task}
              deleteTask={deleteTask}
              markCompleted={markCompleted}
              handleEditClick={handleEditClick}
            />

          ))

        )}

      </div>

    </div>

  );

};

export default TaskList;

