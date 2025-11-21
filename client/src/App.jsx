import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../src/Router/Router";
import { VideoProvider } from "./Context/VideoContext";
import { EbookProvider } from "./Context/EbookContext";

const App = () => {
  return (
    <>
      <VideoProvider>
        <EbookProvider>
          <RouterProvider router={router} />
        </EbookProvider>
      </VideoProvider>
    </>
  )
};

export default App;
