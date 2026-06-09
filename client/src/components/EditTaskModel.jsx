const EditTaskModal = ({
  editingTask,
  editForm,
  setEditForm,
  handleUpdateTask,
  setEditingTask,
}) => {

  if (!editingTask) return null;

  return (

    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#1e2235] p-8 rounded-3xl w-[500px] border border-white/10">

        <h2 className="text-3xl font-bold mb-6">
          Edit Task
        </h2>

        <div className="space-y-4">

          <input
            type="text"
            placeholder="Task Title"
            value={editForm.title}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                title: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 outline-none"
          />

          <input
            type="text"
            placeholder="Task Description"
            value={editForm.description}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                description: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 outline-none"
          />

          <select
            value={editForm.priority}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                priority: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 outline-none"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            value={editForm.status}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                status: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 outline-none"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>

          <input
            type="date"
            value={editForm.dueDate}
            onChange={(e) =>
              setEditForm({
                ...editForm,
                dueDate: e.target.value,
              })
            }
            className="w-full p-4 rounded-xl bg-[#0f172a] border border-white/10 outline-none"
          />

        </div>

        <div className="flex gap-4 mt-8">

          <button
            onClick={handleUpdateTask}
            className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 py-3 rounded-xl font-semibold"
          >
            Save Changes
          </button>

          <button
            onClick={() => setEditingTask(null)}
            className="flex-1 bg-red-500 py-3 rounded-xl font-semibold"
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );
};

export default EditTaskModal;