import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../src/Router/Router";
import { VideoProvider } from "./Context/VideoContext";
import { EbookProvider } from "./Context/EbookContext";
import { UsersProvider } from "./Context/UsersContext";
import { SubscriptionProvider } from "./Context/SubscriptionContext";
import { AdminProvider } from "./Context/AdminContext";

const App = () => {
  return (
    <>
      <VideoProvider>
        <EbookProvider>
          <UsersProvider>
            <SubscriptionProvider>
              <AdminProvider>
                <RouterProvider router={router} />
              </AdminProvider>
            </SubscriptionProvider>
          </UsersProvider>
        </EbookProvider>
      </VideoProvider>
    </>
  )
};

export default App;
