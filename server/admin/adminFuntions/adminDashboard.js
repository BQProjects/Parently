const bcrypt = require("bcrypt");

const AdminUserModel = require("../adminModels/admimUserModel");
const VideoModel = require("../adminModels/videoModel");
const EbookModel = require("../adminModels/ebookModel");
const CategoryModel = require("../adminModels/categoryModel");
const SubscriptionPlanModel = require("../adminModels/subscriptionModel");
const ExpertModel = require("../adminModels/expertModel");
const NotificationModel = require("../adminModels/notificationModel");

const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const adminUser = AdminUserModel.findOne({ email }).select("+password");
    if (!adminUser) {
      return res.status(404).json({ message: "Admin user not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, adminUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const safeUser = adminUser.toObject();
    delete safeUser.password;

    return res.status(200).json({ message: "Login successful", safeUser });
  } catch (error) {}
};

const addVideo = async (req, res) => {
  const {
    title,
    videoUrl,
    category,
    ageGroup,
    tumbnailUrl,
    timestamps,
    accessType,
    savedAs,
  } = req.body;
  try {
    if (!title || !videoUrl || !category || !ageGroup) {
      return res.status(400).json({ message: "All fields are required" });
    } else if (!accessType) {
      accessType = "paid";
    }

    const newVideo = new VideoModel({
      title,
      videoUrl,
      category,
      ageGroup,
      tumbnail: tumbnailUrl,
      timespent: timestamps,
      accessType,
      savedAs,
    });

    await newVideo.save();

    const updatedCategory = await CategoryModel.findOneAndUpdate(
      { name: category.lowercase() },
      { $inc: { videosCount: 1 } },
      { new: true }
    );
    await updatedCategory.save();
    return res
      .status(201)
      .json({ message: "Video added successfully", newVideo });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const deleteVideo = async (req, res) => {
  const { videoId } = req.params;
  try {
    const deletedVideo = await VideoModel.findByIdAndDelete(videoId);
    if (!deletedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const updateVideo = async (req, res) => {
  const { videoId } = req.params;
  const updateData = req.body;
  try {
    const updatedVideo = await VideoModel.findByIdAndUpdate(
      videoId,
      updateData,
      { new: true }
    );
    if (!updatedVideo) {
      return res.status(404).json({ message: "Video not found" });
    }
    return res
      .status(200)
      .json({ message: "Video updated successfully", updatedVideo });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const addExpert = async (req, res) => {
  const { name, role, bio, avatarUrl, email, status } = req.body;
  try {
    const newExpert = new ExpertModel({
      fullname: name,
      specialization: role,
      bio,
      email,
      profile: avatarUrl,
      status,
    });
    await newExpert.save();
    return res
      .status(201)
      .json({ message: "Expert added successfully", newExpert });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const deleteExpert = async (req, res) => {
  const { expertId } = req.params;
  try {
    const deletedExpert = await ExpertModel.findByIdAndDelete(expertId);
    if (!deletedExpert) {
      return res.status(404).json({ message: "Expert not found" });
    }
    return res.status(200).json({ message: "Expert deleted successfully" });
  } catch (error) {}
};

const updateExpert = async (req, res) => {
  const { expertId } = req.params;
  const updateData = req.body;
  try {
    const updatedExpert = await ExpertModel.findByIdAndUpdate(
      expertId,
      updateData,
      { new: true }
    );
    if (!updatedExpert) {
      return res.status(404).json({ message: "Expert not found" });
    }
    return res
      .status(200)
      .json({ message: "Expert updated successfully", updatedExpert });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const addEbook = async (req, res) => {
  const {
    title,
    ebookData,
    category,
    ageGroup,
    narrator,
    thumbnailUrl,
    language,
    duration,
    savedAs,
    accessType,
  } = req.body;
  try {
    const newEbook = new EbookModel({
      title,
      data: ebookData,
      category,
      ageGroup,
      narrator,
      thumbnail: thumbnailUrl,
      language,
      timespent: duration,
      savedAs,
      accessType,
    });

    await newEbook.save();

    const updatedCategory = await CategoryModel.findOneAndUpdate(
      { name: category.lowercase() },
      { $inc: { EbooksCount: 1 } },
      { new: true }
    );
    await updatedCategory.save();

    return res
      .status(201)
      .json({ message: "Ebook added successfully", newEbook });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const updateEbook = async (req, res) => {
  const { ebookId } = req.params;
  const updateData = req.body;
  try {
    const updatedEbook = await EbookModel.findByIdAndUpdate(
      ebookId,
      updateData,
      { new: true }
    );
    if (!updatedEbook) {
      return res.status(404).json({ message: "Ebook not found" });
    }
    return res
      .status(200)
      .json({ message: "Ebook updated successfully", updatedEbook });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const deleteEbook = async (req, res) => {
  const { ebookId } = req.params;
  try {
    const deletedEbook = await EbookModel.findByIdAndDelete(ebookId);
    if (!deletedEbook) {
      return res.status(404).json({ message: "Ebook not found" });
    }
    return res.status(200).json({ message: "Ebook deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const addCategoryToList = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategory = new CategoryModel({ name: name.toLowerCase() });
    await newCategory.save();
    return res
      .status(201)
      .json({ message: "Category added successfully", newCategory });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const removeCategoryFromList = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {}
};

const addNotification = async (req, res) => {
  const { title, message, targetAudience, scheduleAt, tumbnail } = req.body;
  try {
    const newNotification = new NotificationModel({
      title,
      message,
      targetAudience,
      scheduleAt,
      tumbnail,
    });
    await newNotification.save();
    return res
      .status(201)
      .json({ message: "Notification added successfully", newNotification });
  } catch (error) {}
};

const deleteNotification = async (req, res) => {
  const { notificationId } = req.params;
  try {
    const deletedNotification = await NotificationModel.findByIdAndDelete(
      notificationId
    );
    if (!deletedNotification) {
      return res.status(404).json({ message: "Notification not found" });
    }
    return res
      .status(200)
      .json({ message: "Notification deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

const addSubscriptionPlans = async (req, res) => {
  const { name, price, duration, features, tumbnail } = req.body;
  try {
    const newPlan = new SubscriptionPlanModel({
      name,
      price,
      durationInMonths: duration,
      features,
      tumbnail,
    });
    await newPlan.save();
    return res
      .status(201)
      .json({ message: "Subscription plan added successfully", newPlan });
  } catch (error) {}
};

const updateSubscriptionPlans = async (req, res) => {
  const { planId } = req.params;
  const updateData = req.body;
  try {
    const updatedPlan = await SubscriptionPlanModel.findByIdAndUpdate(
      planId,
      updateData,
      { new: true }
    );
    if (!updatedPlan) {
      return res.status(404).json({ message: "Subscription plan not found" });
    }
    return res
      .status(200)
      .json({ message: "Subscription plan updated successfully", updatedPlan });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  adminLogin,
  addVideo,
  deleteVideo,
  updateVideo,
  addExpert,
  deleteExpert,
  updateExpert,
  addEbook,
  updateEbook,
  deleteEbook,
  addCategoryToList,
  removeCategoryFromList,
  addNotification,
  updateSubscriptionPlans,
  addNotification,
  addSubscriptionPlans,
  deleteNotification,
};
