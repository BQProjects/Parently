import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../src/Router/Router";
import { VideoProvider } from "./Context/VideoContext";
import { EbookProvider } from "./Context/EbookContext";
import { UsersProvider } from "./Context/UsersContext";
import { SubscriptionProvider } from "./Context/SubscriptionContext";

const App = () => {
  return (
    <>
      <VideoProvider>
        <EbookProvider>
          <UsersProvider>
            <SubscriptionProvider>
              <RouterProvider router={router} />
            </SubscriptionProvider>
          </UsersProvider>
        </EbookProvider>
      </VideoProvider>
    </>
  )
};

export default App;
