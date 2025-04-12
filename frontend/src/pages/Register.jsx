import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, clearAllUserErrors } from "../store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";
import {
  FaAddressBook,
  FaPencilAlt,
  FaRegUser,
} from "react-icons/fa";
import {
  MdCategory,
  MdOutlineMailOutline,
} from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    phoneNumber: "",
    address: "",
    firstNiche: "",
    secondNiche: "",
    thirdNiche: "",
    resume: "",
    coverLetter: "",
  });

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { loading, isAuthenticated, error } = useSelector((state) => state.user);

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setUserDetails({ ...userDetails, resume: file });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(userDetails).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    dispatch(register(formData));
  };

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/login");
    }
  }, [error, isAuthenticated, dispatch, navigateTo]);

  return (
    <section className="flex justify-center bg-[#deffd6] min-h-screen px-4 py-10">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Create a New Account
        </h2>

        <form className="space-y-6" onSubmit={handleRegister}>
          {/* Role & Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              label="Register As"
              name="role"
              value={userDetails.role}
              type="select"
              options={[
                { value: "", label: "Select Role" },
                { value: "Employer", label: "Register as a Farmer" },
                { value: "Job Seeker", label: "Register as Arhiya" },
              ]}
              icon={<FaRegUser />}
              onChange={handleUserDetails}
            />
            <FormField
              label="Name"
              name="name"
              value={userDetails.name}
              type="text"
              placeholder="Your Name"
              icon={<FaPencilAlt />}
              onChange={handleUserDetails}
            />
          </div>

          {/* Email & Phone */}
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              label="Email Address"
              name="email"
              value={userDetails.email}
              type="email"
              placeholder="you@example.com"
              icon={<MdOutlineMailOutline />}
              onChange={handleUserDetails}
            />
            <FormField
              label="Phone Number"
              name="phoneNumber"
              value={userDetails.phoneNumber}
              type="text"
              placeholder="98764-12345"
              icon={<FaPhoneFlip />}
              onChange={handleUserDetails}
            />
          </div>

          {/* Address & Password */}
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              label="Address"
              name="address"
              value={userDetails.address}
              type="text"
              placeholder="Your Address"
              icon={<FaAddressBook />}
              onChange={handleUserDetails}
            />
            <FormField
              label="Password"
              name="password"
              value={userDetails.password}
              type="password"
              placeholder="********"
              icon={<RiLock2Fill />}
              onChange={handleUserDetails}
            />
          </div>

          {/* Niche Fields - Only if Job Seeker */}
          {userDetails.role === "Job Seeker" && (
            <>
              <div className="flex flex-col md:flex-row gap-4">
                <FormField
                  label="First Niche"
                  name="firstNiche"
                  value={userDetails.firstNiche}
                  type="select"
                  options={nichesArray.map((niche) => ({
                    value: niche,
                    label: niche,
                  }))}
                  icon={<MdCategory />}
                  onChange={handleUserDetails}
                />
                <FormField
                  label="Second Niche"
                  name="secondNiche"
                  value={userDetails.secondNiche}
                  type="select"
                  options={nichesArray.map((niche) => ({
                    value: niche,
                    label: niche,
                  }))}
                  icon={<MdCategory />}
                  onChange={handleUserDetails}
                />
                <FormField
                  label="Third Niche"
                  name="thirdNiche"
                  value={userDetails.thirdNiche}
                  type="select"
                  options={nichesArray.map((niche) => ({
                    value: niche,
                    label: niche,
                  }))}
                  icon={<MdCategory />}
                  onChange={handleUserDetails}
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Cover Letter
                </label>
                <textarea
                  name="coverLetter"
                  value={userDetails.coverLetter}
                  onChange={handleUserDetails}
                  rows={6}
                  className="w-full bg-gray-100 rounded-md p-3 border border-gray-300 focus:outline-green-600 resize-none"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-semibold mb-1">
                  Resume
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={resumeHandler}
                  className="w-full bg-gray-100 rounded-md p-3 border border-gray-300"
                />
              </div>
            </>
          )}

          {/* Buttons */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 font-semibold text-white rounded-md ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 transition"
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <Link
            to="/login"
            className="block text-center mt-4 text-green-700 font-semibold underline"
          >
            Already have an account? Login Now
          </Link>
        </form>
      </div>
    </section>
  );
};

const FormField = ({
  label,
  name,
  value,
  type,
  placeholder,
  options,
  icon,
  onChange,
}) => {
  return (
    <div className="flex flex-col flex-1">
      <label className="text-sm font-medium mb-1">{label}</label>
      <div className="flex items-center bg-gray-100 rounded-md overflow-hidden">
        {type === "select" ? (
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full px-3 py-2 bg-transparent text-sm focus:outline-none"
          >
            {(options || []).map((opt, idx) => (
              <option value={opt.value} key={idx}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full px-3 py-2 bg-transparent text-sm focus:outline-none"
          />
        )}
        <div className="bg-green-600 p-2 text-white text-lg h-full">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Register;
