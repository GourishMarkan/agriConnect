import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchAllBlogs,
  clearAllBlogErrors,
  resetBlogSlice,
} from "../store/slices/blogSlice";
import { useNavigate, Link } from "react-router-dom";
// import Blogs from "../components/Blogs";
import Spinner from "../components/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Pagination from "../components/Pagination";
const AllBlogs = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const { blogs, loading, error, message, limit, totalPages } = useSelector(
    (state) => state.blogs
  );
  const [currentPage, setCurrentPage] = useState(1);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBlogs(currentPage, limit));
  }, [currentPage]);
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/");
      toast.error("You need to login first.");
    }
    if (error) {
      toast.error(error);
      dispatch(clearAllBlogErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetBlogSlice());
    }
    // console.log(blogs);
  }, [isAuthenticated, error, message, dispatch]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    // <>
    //   {loading ? (
    //     <Spinner />
    //   ) : (
    //     <div className="container h-screen mx-auto p-4 overflow-y-auto">
    //       <h3 className="text-3xl text-center text-yellow-300">
    //         Daily updated blogs on various technologies and topics
    //       </h3>
    //       {blogs.length === 0 ? (
    //         <p className="text-center text-gray-500">No updates found</p>
    //       ) : (
    //         <div className=" h-screen flex  flex-wrap mx-2 mt-5">
    //           {blogs.map((blog) => {
    //             return (
    //               <div key={blog._id} className="w-full px-2 mb-4">
    //                 <BlogCard blog={blog} />
    //                 {/* <h1>working</h1> */}
    //               </div>
    //             );
    //           })}
    //           <Pagination
    //             currentPage={currentPage}
    //             totalPages={totalPages}
    //             onPageChange={handlePageChange}
    //           />
    //         </div>
    //       )}
    //     </div>
    //   )}
    // </>
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
        backgroundColor: "#f9f9f9",
        margin: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "#006426",
          fontWeight: "bold",
        }}
      >
        Types of Crops in India
      </h2>
      <h3
        style={{ marginBottom: "15px", color: "#006426", fontWeight: "bold" }}
      >
        Table of Contents
      </h3>
      <ul
        style={{
          listStyleType: "bullets",
          paddingLeft: "20px",
          backgroundColor: "#b1ee61",
        }}
      >
        <li>A Step-by-step Guide to Types of Farming in India</li>
        <li>Growing Crops in India</li>
        <li>Different Farming Practices</li>
        <ul>
          <li>Subsistence Farming</li>
          <li>Shifting Agriculture</li>
          <li>Commercial Farming</li>
          <li>Intensive and Extensive Farming</li>
          <li>Irrigation Farming</li>
          <li>Grain Farming</li>
        </ul>
      </ul>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Types of Farming in India
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        India is an agriculturally important country. Two-thirds of the
        population in India is engaged in agricultural activities. Agriculture
        is the main activity in India, which produces most of the food that we
        consume. Besides food grains, it also produces raw materials for several
        industries. Agriculture is a livelihood for a majority of the population
        in India. While its contribution to the gross domestic product (GDP) has
        reduced to less than 20% and the contribution of other sectors increased
        at a faster rate, agricultural production has grown. Different types of
        agriculture in India depend on rainfall, irrigational facilities,
        production purpose, size of holding, and technology used. Based on these
        factors, types of farming can be identified.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        A Step-by-step Guide to Types of Farming in India
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        The cultivating practice of commercially important crops is called
        farming. Almost 58% of India's population is involved in agriculture,
        but this sector contributes to only 15.5% of the Gross Domestic Product
        (GDP). The cropping system in India is based on the winter and rainy
        seasons and is mainly classified as Kharif, Rabi, and Zaid.
      </p>
      <ul style={{ marginBottom: "15px", color: "#000000" }}>
        <li>
          <strong>Kharif:</strong> Crops cultivated around June-October. Kharif
          crops need an ample amount of water for irrigation, for example, Rice,
          Maize, Groundnut, Millets, Cotton, etc.
        </li>
        <li>
          <strong>Rabi:</strong> Crops cultivated during October-March. The
          major Rabi crops of India are Wheat, Mustard, Peas, etc.
        </li>
        <li>
          <strong>Zaid:</strong> Crops cultivated within a relatively short
          period, from April to June. These include seasonal fruits and
          vegetables.
        </li>
      </ul>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Different Farming Practices
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        Agriculture is an age-old economic activity in India. Over these years,
        farming methods have evolved depending upon the characteristics of the
        physical environment and socio-cultural practices. Farming has changed
        from subsistence to commercial type. At present, the following farming
        systems are practiced in different parts of India.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Subsistence Farming
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        The majority of Indian farmers practice subsistence farming. Subsistence
        farming is nothing but farming for their own consumption. In other
        words, the entire farming production is largely consumed by the farmers
        and their families, and they do not have any surplus to sell in the
        market. Farmers mostly cultivate cereals along with oilseeds, pulses,
        vegetables, and sugarcane.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Shifting Agriculture
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        Dry paddy, Maize, Millets, and Vegetables are the common crops grown in
        shifting agriculture. The per hectare yield is low in shifting
        agriculture. Rice is a subsistence crop in Odisha, but it is a
        commercial crop in Haryana and Punjab.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Commercial Farming
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        Commercial farming is the process in which plant and livestock
        production is practiced to sell the products on the market. Some of the
        major commercial crops grown in India are Cotton, Jute, Sugarcane, and
        Groundnut.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Intensive and Extensive Farming
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        <strong>Intensive Farming:</strong> Known for high production per unit
        of land, it uses a larger amount of labor and capital in a relatively
        small area. Manual labor is used in this farming.
      </p>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        <strong>Extensive Farming:</strong> Extensive farming means when more
        land is brought under farming to increase output. It is predominantly
        done in temperate areas and is almost absent in India except in some
        states such as Punjab, Uttar Pradesh, and Haryana.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Irrigation Farming
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        Irrigation farming relies on help from an irrigation system supplying
        water from a tank, river, reservoir, or well. As India grows and there
        is an increasing demand for food, water is more crucial.
      </p>

      <h4 style={{ marginTop: "20px", color: "#006426", fontWeight: "bold" }}>
        Grain Farming
      </h4>
      <p style={{ marginBottom: "15px", color: "#000000" }}>
        In Grain farming, grains like corn, barley, and wheat are grown for
        human consumption and exports. Grain farming is mechanized and requires
        sufficient amounts of land, machinery, and farmers.
      </p>
    </div>
  );
};
const BlogCard = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <div className="md:w-1/3">
        {/* <img
          src={blog.image?.url}
          alt={blog.title}
          className="w-full h-full object-cover"
        /> */}
        <LazyLoadImage
          alt={blog.title}
          src={blog.image?.url}
          effect="blur"
          // width={500}
          className="w-full h-fit object-cover rounded-lg"
        />
      </div>
      <div className=" flex  flex-col md:w-2/3 p-4 ">
        <h2 className="text-xl font-bold mb-2 my-3">{blog.title}</h2>
        <h3 className="text-xl font-semibold mb-2 my-3">{blog.heading}</h3>
        <p className="text-gray-700 mb-4 my-3">
          {blog.description.slice(0, 100)}
        </p>
        {/* <div className="flex-grow"></div> */}
        <div className="flex-grow"></div>
        <small className="text-gray-500 my-3 self-end">
          posted on:
          {new Date(blog.createdAt).toLocaleDateString()}
        </small>
        <Link
          to={`/blog/${blog._id}`}
          className="bg-blue-500 text-white px-4 py-2 mt-8 ml-4 my-3 inline-block self-end hover:bg-orange-600  "
        >
          View
        </Link>
        {/* <Link
        to={`/view-daily-update/${blog._id}`}
        className="bg-blue-500 text-white px-4 py-2 mt-4 ml-4 inline-block"
      >
        Edit
      </Link> */}
      </div>
    </div>
  );
};
export default AllBlogs;
