import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import {
  clearAllUserErrors,
  loginRequest,
  loginSuccess,
  loginFailure,
  clearAllErrors,
} from "../store/slices/userSlice";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Login = () => {
  const [userDetails, setUserDetails] = useState({
    role: "",
    email: "",
    password: "",
  });

  const { loading, error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", userDetails.role);
    formData.append("email", userDetails.email);
    formData.append("password", userDetails.password);

    dispatch(loginRequest());

    try {
      const response = await axios.post(`${BASE_URL}/user/login`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });

      dispatch(loginSuccess(response.data));
      dispatch(clearAllErrors());
      navigateTo("/");
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (message) {
      toast.success(message);
    }
  }, [dispatch, error, message]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#deffd6] px-4 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-700">Login</h2>
          <p className="text-sm text-gray-600 mt-1">
            Login to your account as Arthiya or Farmer
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          {/* Role Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login As
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <select
                name="role"
                value={userDetails.role}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, role: e.target.value })
                }
                className="w-full px-3 py-2 text-sm focus:outline-none bg-transparent"
              >
                <option value="">Select Role</option>
                <option value="Employer">Login as a Farmer</option>
                <option value="Job Seeker">Login as an Arthiya</option>
              </select>
              <div className="bg-green-600 p-2 text-white text-lg">
                <FaRegUser />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                className="w-full px-3 py-2 text-sm focus:outline-none bg-transparent"
              />
              <div className="bg-green-600 p-2 text-white text-xl">
                <MdOutlineMailOutline />
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
                className="w-full px-3 py-2 text-sm focus:outline-none bg-transparent"
              />
              <div className="bg-green-600 p-2 text-white text-xl">
                <RiLock2Fill />
              </div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-green-700 font-semibold hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-semibold text-lg ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 transition"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register Link */}
          <Link
            to="/register"
            className="block text-center mt-4 text-green-700 font-semibold underline"
          >
            Don't have an account? Register Now
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
