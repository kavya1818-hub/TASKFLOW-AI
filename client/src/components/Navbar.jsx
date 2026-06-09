const Navbar = ({ logoutHandler }) => {

  return (

    <div className="flex items-center justify-between mb-10">

      <div>

        <h1 className="text-4xl font-bold">
          TaskFlow AI
        </h1>

        <p className="text-gray-400 mt-2">
          Intelligent Productivity Dashboard
        </p>

      </div>

      <button
        onClick={logoutHandler}
        className="px-5 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>

  );
};

export default Navbar;