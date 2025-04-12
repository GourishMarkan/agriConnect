import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col gap-8 w-full min-h-96 p-6 bg-white rounded-md shadow-md">
      <h3 className="text-4xl font-bold text-neutral-800 border-b pb-4">
        My Profile
      </h3>

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
          disabled
          value={user?.name}
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="text-lg font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="text"
          className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
          disabled
          value={user?.email}
        />
      </div>

      {/* Extra Fields for Job Seeker */}
      {user?.role === "Job Seeker" && (
        <>
          {/* Niches */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              My Preferred Job Niches
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
                disabled
                value={user?.niches.firstNiche}
              />
              <input
                type="text"
                className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
                disabled
                value={user?.niches.secondNiche}
              />
              <input
                type="text"
                className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
                disabled
                value={user?.niches.thirdNiche}
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
              disabled
              value={user?.phoneNumber}
            />
          </div>

          {/* Address */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">Address</label>
            <input
              type="text"
              className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
              disabled
              value={user?.address}
            />
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">Role</label>
            <input
              type="text"
              className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
              disabled
              value={user?.role}
            />
          </div>

          {/* Joined On */}
          <div className="flex flex-col gap-2">
            <label className="text-lg font-medium text-gray-700">
              Joined On
            </label>
            <input
              type="text"
              className="py-2 px-3 bg-gray-100 border border-gray-300 rounded-md text-gray-700"
              disabled
              value={user?.createdAt.split("T")[0]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MyProfile;

