import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert("Registration Successful");
      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-6 overflow-hidden">

      {/* Background Blur */}
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>

      <div className="absolute w-72 h-72 bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl w-full max-w-md"
      >

        <h1 className="text-4xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-300 text-center mt-3">
          Join TaskFlow AI
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
          />

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:scale-[1.02] transition"
          >
            Register
          </button>

        </form>

        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default Register;