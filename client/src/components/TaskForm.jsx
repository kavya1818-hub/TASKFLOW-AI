import { useState } from "react";
import { motion } from "framer-motion";

function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.title || !task.description || !task.dueDate) {
      alert("Please fill all fields");
      return;
    }

    addTask(task);

    setTask({
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "#1c1f35",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "30px",
      }}
    >
      <h2
        style={{
          color: "white",
          marginBottom: "20px",
          fontSize: "32px",
        }}
      >
        Create Task
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={task.title}
          onChange={(e) =>
            setTask({ ...task, title: e.target.value })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Task Description"
          value={task.description}
          onChange={(e) =>
            setTask({
              ...task,
              description: e.target.value,
            })
          }
          style={inputStyle}
        />

        <select
          value={task.priority}
          onChange={(e) =>
            setTask({
              ...task,
              priority: e.target.value,
            })
          }
          style={inputStyle}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          value={task.status}
          onChange={(e) =>
            setTask({
              ...task,
              status: e.target.value,
            })
          }
          style={inputStyle}
        >
          <option>Pending</option>
          <option>Completed</option>
        </select>

        <input
          type="date"
          value={task.dueDate}
          onChange={(e) =>
            setTask({
              ...task,
              dueDate: e.target.value,
            })
          }
          style={inputStyle}
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          style={{
            border: "none",
            borderRadius: "12px",
            background:
              "linear-gradient(90deg,#9333ea,#06b6d4)",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Task
        </motion.button>
      </div>
    </motion.form>
  );
}

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #2f365f",
  background: "#0f172a",
  color: "white",
  outline: "none",
};

export default TaskForm;