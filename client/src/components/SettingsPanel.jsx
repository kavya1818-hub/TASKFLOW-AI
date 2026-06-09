const SettingsPanel = () => {

  const email =
    localStorage.getItem("email");

  const profileName =
    email?.split("@")[0] || "User";

  const currentTheme =
    localStorage.getItem("theme") || "dark";

  const toggleTheme = () => {

    const newTheme =
      currentTheme === "dark"
        ? "light"
        : "dark";

    localStorage.setItem(
      "theme",
      newTheme
    );

    if (newTheme === "light") {

      document.documentElement.classList.add(
        "light"
      );

    } else {

      document.documentElement.classList.remove(
        "light"
      );

    }

    window.location.reload();

  };

  return (

    <div className="bg-white/10 border border-white/10 rounded-3xl p-8">

      <div className="flex justify-center mb-8">

        <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold">

          {profileName.charAt(0).toUpperCase()}

        </div>

      </div>

      <h2 className="text-4xl font-bold mb-8 text-center">
        Settings
      </h2>

      <div className="space-y-6">

        <div className="bg-[#0f172a] p-6 rounded-2xl">

          <p className="text-gray-400 text-sm mb-2">
            Profile Name
          </p>

          <h3 className="text-3xl font-bold">
            {profileName}
          </h3>

        </div>

        <div className="bg-[#0f172a] p-6 rounded-2xl">

          <p className="text-gray-400 text-sm mb-2">
            Email
          </p>

          <h3 className="text-2xl font-semibold break-all">
            {email}
          </h3>

        </div>

        <div className="bg-[#0f172a] p-6 rounded-2xl flex items-center justify-between">

          <div>

            <p className="text-gray-400 text-sm mb-2">
              Theme
            </p>

            <h3 className="text-2xl font-bold">

              {currentTheme === "dark"
                ? "Dark Mode"
                : "Light Mode"}

            </h3>

          </div>

          <button
            onClick={toggleTheme}
            className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
          >

            Change

          </button>

        </div>

        <div className="bg-[#0f172a] p-6 rounded-2xl">

          <p className="text-gray-400 text-sm mb-2">
            App Version
          </p>

          <h3 className="text-2xl font-bold">
            TaskFlow AI v1.0
          </h3>

        </div>

        <div className="bg-[#0f172a] p-6 rounded-2xl">

          <p className="text-gray-400 text-sm mb-4">
            Productivity Tips
          </p>

          <ul className="space-y-3 text-lg">

            <li>
              • Complete high priority tasks first
            </li>

            <li>
              • Avoid overdue deadlines
            </li>

            <li>
              • Track daily progress consistently
            </li>

          </ul>

        </div>

      </div>

    </div>

  );

};

export default SettingsPanel;

