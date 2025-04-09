import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobs.model.js";

export const postJob = catchAsyncErrors(async (req, res, next) => {
  // const {
  //   title,
  //   jobType,
  //   location,
  //   companyName,
  //   introduction,
  //   responsibilities,
  //   qualifications,
  //   offers,
  //   salary,
  //   hiringMultipleCandidates,
  //   personalWebsiteTitle,
  //   personalWebsiteUrl,
  //   jobNiche,
  // } = req.body;
  const { cropName, location, quality, contactNumber, email } = req.body;
  // if (
  //   !title ||
  //   !jobType ||
  //   !location ||
  //   !companyName ||
  //   !introduction ||
  //   !responsibilities ||
  //   !qualifications ||
  //   !salary ||
  //   !jobNiche
  // ) {
  //   // return next(new ErrorHandler("Please provide full job details.", 400));
  //   return res.status(400).json({
  //     success: false,
  //     message: "Please provide full job details",
  //   });
  // }
  if (email || cropName || location || quality || contactNumber) {
    // return next(new ErrorHandler("Please provide full job details.", 400));
    return res.status(400).json({
      success: false,
      message: "Please provide full crop details",
    });
  }

  // if (
  //   (personalWebsiteTitle && !personalWebsiteUrl) ||
  //   (!personalWebsiteTitle && personalWebsiteUrl)
  // ) {
  //   // return next(
  //   //   new ErrorHandler(
  //   //     "Please provide both personal website url and title, or leave both blank",
  //   //     400
  //   //   )
  //   // );
  //   return res.status(400).json({
  //     success: false,
  //     message:
  //       "Please provide both personal website url and title, or leave both blank",
  //   });
  // }

  const postedBy = req.user._id;
  console.log(postedBy);

  const crop = await Job.create({
    cropName,
    location,
    quality,
    contactNumber,
    email,
    postedBy,
  });
  // const job = await Job.create({
  //   cropName,
  //   jobType,
  //   location,
  //   companyName,
  //   introduction,
  //   responsibilities,
  //   qualifications,
  //   offers,
  //   salary,
  //   hiringMultipleCandidates,
  //   personalWebsite: {
  //     title: personalWebsiteTitle,
  //     url: personalWebsiteUrl,
  //   },
  //   jobNiche,
  //   postedBy,
  // });

  // if (!job) {
  //   // return next(new ErrorHandler("Failed to post job.", 400));
  //   return res.status(400).json({
  //     success: false,
  //     message: "Failed to post job",
  //   });
  // }
  if (!crop) {
    // return next(new ErrorHandler("Failed to post job.", 400));
    return res.status(400).json({
      success: false,
      message: "Failed to post crop",
    });
  }
  res.status(200).json({
    succes: true,
    message: "crop posted successfully.",
    crop,
  });
});

export const getAllJobs = catchAsyncErrors(async (req, res, next) => {
  const { city, niche, searchKeyword } = req.query;
  const page = parseInt(req.query?.page) || 1;
  const limit = parseInt(req.query?.limit) || 10;
  const query = {};
  if (city) {
    query.location = city;
  }
  if (niche) {
    query.jobNiche = niche;
  }
  if (searchKeyword) {
    query.$or = [
      { title: { $regex: searchKeyword, $options: "i" } },
      { companyName: { $regex: searchKeyword, $options: "i" } },
      {
        introduction: { $regex: searchKeyword, $options: "i" },
      },
    ];
  }
  const crops = await Job.find(query)
    .skip((page - 1) * limit)
    .limit(limit);
  const totalJobs = await Job.countDocuments(query);
  res.status(200).json({
    success: true,
    crops,
    page,
    totalPages: Math.ceil(totalJobs / limit),
    totalJobs,
    // count: jobs.length,
  });
});
export const getMyJobs = catchAsyncErrors(async (req, res, next) => {
  const page = parseInt(req.query?.page) || 1;
  const limit = parseInt(req.query?.limit) || 10;

  const myCrops = await Job.find({ postedBy: req.user._id })
    .skip((page - 1) * limit)
    .limit(limit);
  const totalJobs = await Job.countDocuments({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myCrops,
    page,
    totalPages: Math.ceil(totalJobs / limit),
    totalJobs,
    message: "All jobs fetched successfully",
  });
});
export const deleteJob = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    // return new ErrorHandler("Job not found", 404);
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }
  await job.deleteOne();
  res.status(200).json({
    success: true,
    message: "Crop deleted successfully",
  });
});
export const getASingleJob = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const crop = await Job.findById(id);
  if (!job) {
    // return new ErrorHandler("Job not found", 404);
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }
  res.status(200).json({
    success: true,
    crop,
  });
});
