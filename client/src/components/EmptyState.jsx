import { FaClipboardList } from "react-icons/fa";

const EmptyState = () => {

  return (

    <div className="bg-[#0f172a] border border-white/10 rounded-3xl p-16 text-center">

      <div className="flex justify-center mb-5">

        <FaClipboardList className="text-6xl text-cyan-400" />

      </div>

      <h2 className="text-3xl font-bold text-white mb-3">
        No Tasks Yet
      </h2>

      <p className="text-gray-400">
        Create a task to start tracking productivity.
      </p>

    </div>

  );

};

export default EmptyState;
