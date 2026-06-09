import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import "react-calendar/dist/Calendar.css";

import StatsCards from "../components/StatsCards";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import RemainderPane from "../components/RemainderPane";
import CalendarSection from "../components/CalenderSection";
import EditTaskModel from "../components/EditTaskModel";

import ProgressSection from "../components/ProgressSection";
import OverdueSection from "../components/OverdueSection";
import UpcomingSection from "../components/UpcomingSection";
import Sidebar from "../components/Sidebar";
import SettingsPanel from "../components/SettingsPanel";

const Dashboard = () => {

  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(true);

  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const [date, setDate] = useState(new Date());

  const [editingTask, setEditingTask] =
    useState(null);

  const [currentView, setCurrentView] =
    useState(
      localStorage.getItem("currentView") ||
      "Dashboard"
    );

  useEffect(() => {

    localStorage.setItem(
      "currentView",
      currentView
    );

  }, [currentView]);

  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Pending",
    dueDate: "",
  });

  useEffect(() => {

    if (!token) {

      window.location.href = "/";

    }

  }, [token]);

  const fetchTasks = async () => {

    try {

      setLoading(true);

      const res = await axios.get(
        "https://taskflow-ai-76x5.onrender.com/api/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    fetchTasks();

  }, []);

  const createTask = async (taskData) => {

    try {

      await axios.post(
        "https://taskflow-ai-76x5.onrender.com/api/tasks",
        taskData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task Added");

      fetchTasks();

    } catch (error) {

      console.log(error);

      toast.error("Failed to add task");

    }

  };

  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `https://taskflow-ai-76x5.onrender.com/api/tasks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task Deleted");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const markCompleted = async (task) => {

    try {

      await axios.put(
        `https://taskflow-ai-76x5.onrender.com/api/tasks/${task._id}`,
        {
          ...task,
          status: "Completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task Completed");

      fetchTasks();

    } catch (error) {

      console.log(error);

    }

  };

  const logoutHandler = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  const handleEditClick = (task) => {

    setEditingTask(task);

    setEditForm({
      title: task.title,
      description: task.description,
      priority: task.priority,
      status: task.status,
      dueDate: task.dueDate
        ? task.dueDate.split("T")[0]
        : "",
    });

  };

  const handleUpdateTask = async () => {

    try {

      await axios.put(
        `https://taskflow-ai-76x5.onrender.com/api/tasks/${editingTask._id}`,
        editForm,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Task Updated");

      fetchTasks();

      setEditingTask(null);

    } catch (error) {

      console.log(error);

      toast.error("Failed to update task");

    }

  };

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const overdueTasks = tasks.filter(
    (task) => {

      return (
        task.dueDate &&
        new Date(task.dueDate) < new Date() &&
        task.status !== "Completed"
      );

    }
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks / tasks.length) * 100
        );

  const selectedDateTasks = tasks.filter(
    (task) => {

      if (!task.dueDate) return false;

      return (
        new Date(task.dueDate).toDateString() ===
        new Date(date).toDateString()
      );

    }
  );

  const filteredTasks = tasks.filter(
    (task) => {

      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase());

      if (filter === "Completed") {

        return (
          matchesSearch &&
          task.status === "Completed"
        );

      }

      if (filter === "Pending") {

        return (
          matchesSearch &&
          task.status === "Pending"
        );

      }

      if (filter === "High Priority") {

        return (
          matchesSearch &&
          task.priority === "High"
        );

      }

      return matchesSearch;

    }
  );

  if (loading) {

    return (

      <div className="min-h-screen bg-[#020617] flex items-center justify-center">

        <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      </div>

    );

  }

  return (

    <div className="min-h-screen bg-[#020617] text-white flex">

      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      <div className="flex-1 p-6 overflow-y-auto">

        <div className="flex justify-end mb-6">

          <button
            onClick={logoutHandler}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-2xl font-semibold transition"
          >
            Logout
          </button>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-6">

            {currentView === "Dashboard" && (

              <>
                <StatsCards
                  tasks={tasks}
                  completedTasks={completedTasks}
                  pendingTasks={pendingTasks}
                  overdueTasks={overdueTasks}
                />

                <ProgressSection
                  progress={progress}
                  completedTasks={completedTasks}
                  totalTasks={tasks.length}
                />

                <OverdueSection tasks={tasks} />

                <TaskForm addTask={createTask} />
              </>

            )}

            {currentView === "Your Tasks" && (

              <TaskList
                filteredTasks={filteredTasks}
                deleteTask={deleteTask}
                markCompleted={markCompleted}
                handleEditClick={handleEditClick}
                filter={filter}
                setFilter={setFilter}
                search={search}
                setSearch={setSearch}
              />

            )}

            {currentView === "Settings" && (

              <div className="flex justify-center">

                <div className="w-full max-w-4xl">

                  <SettingsPanel />

                </div>

              </div>

            )}

          </div>

          {currentView !== "Settings" && (

            <div className="space-y-6">

              <CalendarSection
                date={date}
                setDate={setDate}
                tasks={tasks}
                selectedDateTasks={
                  selectedDateTasks
                }
              />

              <RemainderPane tasks={tasks} />

              <UpcomingSection tasks={tasks} />

            </div>

          )}

        </div>

      </div>

      <EditTaskModel
        editingTask={editingTask}
        editForm={editForm}
        setEditForm={setEditForm}
        handleUpdateTask={handleUpdateTask}
        setEditingTask={setEditingTask}
      />

    </div>

  );

};

export default Dashboard;
