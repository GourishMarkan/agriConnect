import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllBlogErrors,
  fetchMyBlogs,
  resetBlogSlice,
  deleteBlog,
} from "../store/slices/blogSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Pagination from "./Pagination";

const MyBlogs = () => {
  const { myBlogs, error, message, loading, limit, totalPages } = useSelector(
    (state) => state.blogs
  );
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyBlogs(currentPage, limit));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllBlogErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetBlogSlice());
    }
  }, [error, message, dispatch, currentPage]);

  const handleDeleteBlog = (e, id) => {
    e.preventDefault();
    dispatch(deleteBlog(id));
    dispatch(fetchMyBlogs(currentPage, limit));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container mx-auto p-4">
          {myBlogs.length === 0 ? (
            <p className="text-center text-gray-500">No updates found</p>
          ) : (
            <div className="flex flex-col mx-2 mt-5">
              {myBlogs.map((blog) => {
                return (
                  <div key={blog._id} className="w-full px-2 mb-6">
                    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                      <div className="md:w-1/3">
                        <LazyLoadImage
                          alt={blog.title}
                          src={blog.image?.url}
                          effect="blur"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col md:w-2/3 p-6">
                        <h2 className="text-2xl font-bold mb-3 text-gray-800">
                          {blog.title}
                        </h2>
                        <h3 className="text-xl font-semibold mb-3 text-gray-600">
                          {blog.heading}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {blog.description.slice(0, 100)}...
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <small className="text-gray-500">
                            Posted on:{" "}
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </small>
                          <div className="flex items-center gap-3">
                            <Link
                              to={`/blog/${blog._id}`}
                              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                            >
                              View
                            </Link>
                            <Link
                              to={`/edit-blog/${blog._id}`}
                              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                            >
                              Edit
                            </Link>
                            <button
                              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                              onClick={(e) => handleDeleteBlog(e, blog._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyBlogs;
