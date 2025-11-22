const { get } = require("mongoose");
const CategoryModel = require("../adminModels/categoryModel");
const EbookModel = require("../adminModels/ebookModel");
const ExpertModel = require("../adminModels/expertModel");
const NotificationModel = require("../adminModels/notificationModel");
const VideoModel = require("../adminModels/videoModel");

////
////
////
////TODO: IMPLEMENT GET ALL USERS AFTER USER MODEL IS CREATED
////
////
////
const getAllUsers = async (req, res) => {};

const getAllVideos = async (req, res) => {
  try {
    const videos = await VideoModel.find();
    return res.status(200).json({ videos });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllExperts = async (req, res) => {
  const experts = await ExpertModel.find();
  try {
    return res.status(200).json({ experts });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllEbooks = async (req, res) => {
  try {
    const ebooks = await EbookModel.find();
    return res.status(200).json({ ebooks });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await NotificationModel.find();
    return res.status(200).json({ notifications });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

/////
/////
/////
/////
///// TODO: IMPLEMENT DASHBOARD STATS RETRIVING FUNNTIONS
/////
/////
/////
const getDashboardStats = async (req, res) => {};

const getSubscriptionPlans = async (req, res) => {
  try {
    const plans = await SubscriptionPlanModel.find();
    return res.status(200).json({ plans });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllDraftVideos = async (req, res) => {
  try {
    const draftVideos = await VideoModel.find({ status: "draft" });
    return res.status(200).json({ draftVideos });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAllDraftEbooks = async (req, res) => {
  try {
    const draftEbooks = await EbookModel.find({ status: "draft" });
    return res.status(200).json({ draftEbooks });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getAdminProfile = async (req, res) => {
  const { adminId } = req.params;
  try {
    const admin = await AdminModel.findById(adminId).select("-password");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    return res.status(200).json({ admin });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

//////////
//////////
//////////
//////////

////TODO: IMPLEMENT GET INDIVIDUAL DATA RETRIVING FUNTIONS FOR DASHBOARD

//////////
//////////
//////////
//////////

////Empty funtions to be implemented later

const getSingleVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const video = await VideoModel.findById(videoId);
    if (!video) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json({ video });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSingleExpert = async (req, res) => {
  const { expertId } = req.params;
  try {
    const expert = await ExpertModel.findById(expertId);
    if (!expert) {
      return res.status(404).json({ message: "Expert not found" });
    }
    return res.status(200).json({ expert });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSingleEbook = async (req, res) => {
  const { ebookId } = req.params;
  try {
    const ebook = await EbookModel.findById(ebookId);
    if (!ebook) {
      return res.status(404).json({ message: "Ebook not found" });
    }
    return res.status(200).json({ ebook });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getSingleNotification = async (req, res) => {
  const { notificationId } = req.params;
  try {
    const notification = await NotificationModel.findById(notificationId);
    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res.status(200).json({ notification });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getAllVideos,
  getAllExperts,
  getAllEbooks,
  getAllCategories,
  getAllNotifications,
  getDashboardStats,
  getSubscriptionPlans,
  getAllDraftVideos,
  getAllDraftEbooks,
  getSingleVideo,
  getSingleExpert,
  getSingleEbook,
  getAdminProfile,
  getSingleNotification,
};
