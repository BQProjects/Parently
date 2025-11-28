import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../src/Router/Router";
import { VideoProvider } from "./Context/VideoContext";
import { EbookProvider } from "./Context/EbookContext";
import { UsersProvider } from "./Context/UsersContext";
import { SubscriptionProvider } from "./Context/SubscriptionContext";
import { AdminProvider } from "./Context/AdminContext";
import { FieldManagementProvider } from "./Context/fieldManagementContext";
import { ExpertProvider } from "./Context/ExpertContext";

const App = () => {
  return (
    <>
      <VideoProvider>
        <EbookProvider>
          <UsersProvider>
            <SubscriptionProvider>
              <AdminProvider>
                <ExpertProvider>
                  <FieldManagementProvider>
                    <RouterProvider router={router} />
                  </FieldManagementProvider>
                </ExpertProvider>
              </AdminProvider>
            </SubscriptionProvider>
          </UsersProvider>
        </EbookProvider>
      </VideoProvider>
    </>
  );
};

export default App;
