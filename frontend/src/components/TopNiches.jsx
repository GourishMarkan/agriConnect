import { Link } from "react-router-dom";

const TopNiches = () => {
  const jobData = [
    { id: 1, title: "WHEAT" },
    { id: 2, title: "RICE (Kharif)" },
    { id: 3, title: "MUSTARD" },
    { id: 4, title: "MAIZE (Corn)" },
  ];

  return (
    <section className="py-16 px-4 max-w-[1700px] mx-auto text-center">
      <h3 className="text-3xl sm:text-4xl font-bold uppercase text-[#333] mb-10 tracking-wider">
        Top Crops
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {jobData.map((crop) => (
          <div
            key={crop.id}
            className="bg-white border border-gray-300 shadow-md rounded-xl p-6 flex flex-col justify-between transition duration-300 hover:shadow-xl hover:border-[#50a83d]"
          >
            <h4 className="font-semibold text-2xl text-left text-[#222] mb-2">{crop.title}</h4>
            
            {/* Optional placeholder details (if needed later) */}
            {/* <p className="text-gray-500">Company: {crop.company || 'N/A'}</p> */}

            <div className="mt-auto pt-4 flex justify-end">
              <Link
                to="#"
                className="bg-[#50a83d] hover:bg-[#3b8731] text-white text-sm font-semibold px-4 py-2 rounded-md transition duration-200"
              >
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopNiches;
