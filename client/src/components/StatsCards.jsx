import { motion } from "framer-motion";
import { FaTasks } from "react-icons/fa";

const StatsCards = ({
  tasks,
  completedTasks,
  pendingTasks,
  overdueTasks,
}) => {

  return (

    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/10 border border-white/10 p-6 rounded-3xl"
      >

        <FaTasks className="text-4xl text-cyan-400 mb-4" />

        <h2 className="text-2xl font-bold">
          Total
        </h2>

        <p className="text-5xl font-bold mt-4">
          {tasks.length}
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/10 border border-white/10 p-6 rounded-3xl"
      >

        <h2 className="text-2xl font-bold">
          Completed
        </h2>

        <p className="text-5xl font-bold mt-4 text-green-400">
          {completedTasks}
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/10 border border-white/10 p-6 rounded-3xl"
      >

        <h2 className="text-2xl font-bold">
          Pending
        </h2>

        <p className="text-5xl font-bold mt-4 text-yellow-400">
          {pendingTasks}
        </p>

      </motion.div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="bg-white/10 border border-white/10 p-6 rounded-3xl"
      >

        <h2 className="text-2xl font-bold">
          Overdue
        </h2>

        <p className="text-5xl font-bold mt-4 text-red-400">
          {overdueTasks}
        </p>

      </motion.div>

    </div>

  );
};

export default StatsCards;