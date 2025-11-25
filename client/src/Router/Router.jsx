import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminLogin from "../pages/adminAuth/AdminLogin";
import Layout from "../Compnents/globalComponents/Layout";
import AdminDashboard from "../pages/adminDashboard/AdminDashboard";
import SidebarLayout from "../Compnents/globalComponents/Siderbar";
import ContentManagement from "../pages/adminContentManagement/ContentManagement";
import TotalUsersDashboard from "../pages/adminDashboard/TotalUsersDashboard";
import ChurnDashboard from "../pages/adminDashboard/ChurnDashboard";
import Revenue_Dashboard from "../pages/adminDashboard/Revenue_Dashboard";
import TotalWatchDashboard from "../pages/adminDashboard/TotalWatchDashboard";
import UserManagement from "../pages/AdminUserManagement/UserManagement";
import SubscriptionManagement from "../pages/AdminSubscriptionManagement/SubscriptionManagement";
import PushNotificationManagement from "../pages/AdminPushNotification/PushNotificationManagement";
import ManageExperts from "../pages/AdminExperts/ManageExperts";
import Videos from "../pages/adminContentManagement/Videos";
import AddNewVideo from "../pages/adminContentManagement/AddNewVideo";
import PublishedVideos from "../pages/adminContentManagement/PublishedVideos";
import DraftVideos from "../pages/adminContentManagement/DraftVideos";
import E_books from "../pages/adminEbooks/Ebooks";
import Field_Management from "../pages/adminEbooks/FieldManagement";
import Create_New_Notification from "../pages/AdminPushNotification/CreateNewNotification";
import Listed_Videos from "../pages/AdminPushNotification/ListedVideos";
import Q_Videos from "../pages/AdminPushNotification/Qued_Videos";
import AddNewEBook from "../pages/adminEbooks/AddNewEBook";
import ViewAllPublishedBooks from "../pages/adminEbooks/ViewAllPublishedBooks";
import EBookDraft from "../pages/adminEbooks/EBookDraft";
import UserDetail from "../pages/AdminUserManagement/UserDetail";
import AdminCreate from "../pages/adminAuth/AdminCreate";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <AdminLogin /> },
      { path: "create-account", element: <AdminCreate />},
    ],
  },
  {
    path: "/admin",
    element: <SidebarLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
        children: [
          { path: "total_users", element: <TotalUsersDashboard /> },
          { path: "churn_rate", element: <ChurnDashboard /> },
          { path: "revenue", element: <Revenue_Dashboard /> },
          { path: "total_watch", element: <TotalWatchDashboard /> },
        ]
      },
      { path: "content-management", element: <ContentManagement />,
        children: [
          { path: "videos", element: <Videos />,
            children: [
              { path: "add-new-video", element: <AddNewVideo /> },
              { path: "published-videos", element: <PublishedVideos /> },
              { path: "draft-videos", element: <DraftVideos /> },
            ]
          },
          { path: "e-books", element: <E_books />,
            children: [
                { path: "add-new-e-book", element: <AddNewEBook /> },
                { path: "published-e-books", element: <ViewAllPublishedBooks /> },
                { path: "e-book-draft", element: <EBookDraft /> },
            ]
          },
          { path: "field-management", element: <Field_Management /> },
        ]
      },
      { path: "user-management", element: <UserManagement />},
      { path: "user-management/user-detail/:id", element: <UserDetail />},
      { path: "subscription-management", element: <SubscriptionManagement /> },
      { path: "push-notification-management", element: <PushNotificationManagement />,
        children: [
          { path: "create-new-notification", element:<Create_New_Notification />},
          { path: "listed-videos", element: <Listed_Videos /> },
          { path: "q-videos", element: <Q_Videos /> },
        ]
       },
      { path: "manage-experts", element:<ManageExperts /> },
    ],
  },
]);

export default Router;
