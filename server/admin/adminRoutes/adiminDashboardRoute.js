const express = require("express");
const {
  getAllVideos,
  getSingleNotification,
  getAllUsers,
  getAllExperts,
  getAllEbooks,
  getAllCategories,
  getAllNotifications,
  getAllDraftEbooks,
  getAllDraftVideos,
  getSubscriptionPlans,
  getSingleVideo,
  getAdminProfile,
  getSingleEbook,
  getSingleExpert,
} = require("../adminFuntions/adminGetComponents.js");
const {
  addVideo,
  addNotification,
  addSubscriptionPlans,
  adminLogin,
  addExpert,
  addEbook,
  addCategoryToList,
  updateVideo,
  updateExpert,
  updateEbook,
  updateSubscriptionPlans,
  deleteVideo,
  deleteExpert,
  deleteEbook,
  deleteNotification,
} = require("../adminFuntions/adminDashboard.js");

const adminRouter = express.Router();

// Admin Dashboard Route
adminRouter.get("/admin/dashboard", (req, res) => {
  res.send("Welcome to the Admin Dashboard");
});

////get all routes
////
////
adminRouter.get("/admin/get-all-videos", getAllVideos);
adminRouter.get("/admin/get-all-users", getAllUsers);
adminRouter.get("/admin/get-all-experts", getAllExperts);
adminRouter.get("/admin/get-all-ebooks", getAllEbooks);
adminRouter.get("/admin/get-all-categories", getAllCategories);
adminRouter.get("/admin/get-all-notifications", getAllNotifications);
adminRouter.get("/admin/get-all-subscriptions", getSubscriptionPlans);
adminRouter.get("/admin/get-all-draft-ebooks", getAllDraftEbooks);
adminRouter.get("/admin/get-all-draft-videos", getAllDraftVideos);

adminRouter.get("/admin/get-single-video/:videoId", getSingleVideo);
adminRouter.get("/admin/get-admin-profile/:adminId", getAdminProfile);
adminRouter.get("/admin/get-single-ebook/:ebookId", getSingleEbook);
adminRouter.get("/admin/get-single-expert/:expertId", getSingleExpert);

adminRouter.get(
  "/admin/get-single-notification/:notificationId",
  getSingleNotification
);

/////
/////
/////POST ROUTES

adminRouter.post("/admin/add-video", addVideo);
adminRouter.post("/admin/add-notification", addNotification);
adminRouter.post("/admin/add-subscription-plan", addSubscriptionPlans);
adminRouter.post("/admin/add-expert", addExpert);
adminRouter.post("/admin/add-ebook", addEbook);
adminRouter.post("/admin/add-category", addCategoryToList);
adminRouter.post("/admin/login", adminLogin);

/////
/////
/////PUT ROUTES

adminRouter.put("/admin/update-video/:videoId", updateVideo);
adminRouter.put("/admin/update-expert/:expertId", updateExpert);
adminRouter.put("/admin/update-ebook/:ebookId", updateEbook);
adminRouter.put(
  "/admin/update-subscription-plan/:planId",
  updateSubscriptionPlans
);

/////
/////
////DELETE ROUTES

adminRouter.delete("/admin/delete-video/:videoId", deleteVideo);
adminRouter.delete("/admin/delete-expert/:expertId", deleteExpert);
adminRouter.delete("/admin/delete-ebook/:ebookId", deleteEbook);
adminRouter.delete(
  "/admin/delete-notification/:notificationId",
  deleteNotification
);

module.exports = adminRouter;
