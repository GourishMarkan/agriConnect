import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import {
  clearAllJobErrors,
  fetchJobs,
  resetJobSlice,
} from "../store/slices/jobSlice";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../components/Pagination";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [niche, setNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const { crops, loading, error, totalPages, limit, message } = useSelector(
    (state) => state.jobs
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigateTo = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
    if (!isAuthenticated) {
      navigateTo("/");
      toast.error("You need to login first.");
    }
    dispatch(fetchJobs(city, niche, searchKeyword, currentPage, limit));
  }, [dispatch, city, niche, error, currentPage, limit]);

  const handleSearch = () => {
    dispatch(fetchJobs(city, niche, searchKeyword));
  };

  const cities = [
    "Bangalore", "Noida", "Gurugram", "Chandigarh", "Mumbai", "Pune",
    "Chennai", "Hyderabad", "Kolkata", "Jaipur", "Indore",
    "Ahmedabad", "Mohali", "Ludhiana", "Surat"
  ];

  const nichesArray = [
    "wheat", "rice", "corn", "sugarcane", "cotton",
    "soybean", "barley", "oats", "sorghum", "millet",
    "peanuts", "sunflower", "canola", "coffee",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="py-10 px-4 bg-gray-50 min-h-screen">
          {/* Search Input */}
          <div className="flex flex-wrap justify-center w-full max-w-2xl mx-auto mb-10">
            <div className="relative w-full">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search for crops..."
                className="w-full text-sm rounded-lg py-3 pr-32 pl-4 border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
              <button
                className="absolute right-1.5 top-1.5 bg-[#50a83d] hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                onClick={handleSearch}
              >
                Find Crop
              </button>
            </div>
          </div>

          {/* Filters & Jobs */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters */}
            <aside className="hidden md:flex flex-col w-64 p-4 bg-white rounded-lg shadow-md">
              <h2 className="text-lg font-semibold border-b pb-2 mb-4">Filter by City</h2>
              {cities.map((city, idx) => (
                <label key={idx} className="flex items-center mb-2 text-sm">
                  <input
                    type="radio"
                    name="city"
                    value={city}
                    onChange={() => setCity(city)}
                    className="mr-2"
                  />
                  {city}
                </label>
              ))}
              <h2 className="text-lg font-semibold mt-6 border-b pb-2 mb-4">Filter by Crops</h2>
              {nichesArray.map((niche, idx) => (
                <label key={idx} className="flex items-center mb-2 text-sm">
                  <input
                    type="radio"
                    name="niche"
                    value={niche}
                    onChange={() => setNiche(niche)}
                    className="mr-2"
                  />
                  {niche}
                </label>
              ))}
            </aside>

            {/* Jobs Grid */}
            <main className="flex-1 grid gap-6 grid-cols-1 sm:grid-cols-2">
              {crops && crops.map((job) => (
                <div
                  key={job._id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <p className={`text-sm font-medium px-2 py-1 rounded w-fit mb-2 ${job.hiringMultipleCandidates === "Yes" ? "text-green-700 bg-green-100" : "text-blue-700 bg-blue-100"}`}>
                    {job.hiringMultipleCandidates === "Yes" ? "Hiring Multiple Candidates" : "Hiring"}
                  </p>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{job.cropName}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                  <p className="text-sm text-gray-600">{job.location}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Rs. {job.salary}</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Posted On:</span> {job.jobPostedOn.substring(0, 10)}
                  </p>
                  <div className="mt-4 text-right">
                    <Link
                      to={`/post/application/${job._id}`}
                      className="inline-block bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              ))}
              <div className="col-span-full mt-6">
                <Pagination
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  currentPage={currentPage}
                />
              </div>
            </main>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;
