import {
  FaTasks,
  FaCog,
  FaChartBar,
} from "react-icons/fa";

const Sidebar = ({
  currentView,
  setCurrentView,
}) => {

  return (

    <div className="w-[220px] min-h-screen bg-[#081028] border-r border-white/10 p-5 flex flex-col justify-between">

      <div>

        <h1 className="text-5xl font-bold text-white leading-tight mb-10">
          TaskFlow AI
        </h1>

        <div className="space-y-4">

          {/* DASHBOARD */}

          <button
            onClick={() =>
              setCurrentView("Dashboard")
            }
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition ${
              currentView === "Dashboard"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <FaChartBar />
            Dashboard
          </button>

          {/* TASKS */}

          <button
            onClick={() =>
              setCurrentView("Your Tasks")
            }
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition ${
              currentView === "Your Tasks"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <FaTasks />
            Your Tasks
          </button>

          {/* SETTINGS */}

          <button
            onClick={() =>
              setCurrentView("Settings")
            }
            className={`w-full flex items-center gap-3 px-5 py-4 rounded-2xl transition ${
              currentView === "Settings"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            <FaCog />
            Settings
          </button>

        </div>

      </div>

    </div>

  );

};

export default Sidebar;

