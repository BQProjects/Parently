import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Left_Arrow from "../../assets/Images/LeftArrow.png";

function VideoDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { video = {} } = location.state || {};

  return (
    <div className="font-Inter py-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Back Button + Title */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer flex items-center mr-2"
            aria-label="Go Back"
          >
            <img src={Left_Arrow} alt="Left Arrow" className="h-8" />
          </button>
          <span className="text-2xl font-medium text-gray-800">
            Video Details
          </span>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="flex gap-10 items-start">
            {/* LEFT - Video Preview */}
            <div className="w-[40%] flex items-start justify-center">
              <div
                className="bg-[#d3d7db] rounded-xl flex items-center justify-center w-full"
                style={{ height: 400 }}
              >
                <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="24" fill="white" />
                    <polygon points="18,16 34,24 18,32" fill="#7B9D51" />
                  </svg>
                </div>
              </div>
            </div>

            {/* RIGHT - Details Box */}
            <div className="w-[60%]">
              <div className="bg-white rounded-xl border border-[#d3e1c6] p-8 min-h-[400px] flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl text-[#333] mb-4">Video Details</h2>
                  <hr className="border-[#d3e1c6] mb-6" />

                  <div className="grid grid-cols-2 gap-y-4 text-base text-[#333]">
                    <div>Video Title:</div>
                    <div className="text-right">{video.title}</div>

                    <div>Video ID:</div>
                    <div className="text-right">{video.id}</div>

                    <div>Access Level:</div>
                    <div className="text-right">{video.access_Level}</div>

                    <div>Duration:</div>
                    <div className="text-right">{video.duration || "-"}</div>

                    <div>Upload Date:</div>
                    <div className="text-right">
                      {video.date
                        ? new Date(video.date).toLocaleDateString()
                        : "-"}
                    </div>

                    <div>Views:</div>
                    <div className="text-right">{video.views || "-"}</div>
                  </div>
                </div>
              </div>
              {/* Delete Button */}
              <div className="flex justify-end mt-6 ">
                <button className="border border-[#d3e1c6] text-[#6B6B6B] px-8 py-2 rounded-md bg-white hover:bg-[#f3f7ed] transition font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
