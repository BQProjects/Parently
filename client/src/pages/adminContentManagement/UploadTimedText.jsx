import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import { useVideo } from "../../Context/VideoContext";

function UploadTimedText() {
  const navigate = useNavigate();
  const location = useLocation();
  const { AddVideo, UpdateVideo } = useVideo();
  const video = location.state?.video || {};
  const isEdit = location.state?.isEdit || false;
  const [timedTexts, setTimedTexts] = useState(video.timedTexts || [
    { time: "", text: "" },
    { time: "", text: "" },
  ]);
  const [success, setSuccess] = useState("");

  const handleChange = (index, field, value) => {
    const updated = timedTexts.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setTimedTexts(updated);
  };

  const handleAddRow = () => {
    setTimedTexts([...timedTexts, { time: "", text: "" }]);
  };

  const handleRemoveRow = () => {
    if (timedTexts.length > 1) {
      setTimedTexts(timedTexts.slice(0, -1));
    }
  };

  const handleSaveDraft = () => {
    const videoWithTimedText = { ...video, timedTexts, isDraft: true };
    if (isEdit) {
      UpdateVideo(video.id, videoWithTimedText);
    } else {
      AddVideo(videoWithTimedText);
    }
    setSuccess("Your video has been saved to draft.");
    setTimeout(() => {
      setSuccess("");
      navigate("/admin/content-management/videos/video-draft");
    }, 1000);
  };

  const handleSaveNotification = () => {
    setSuccess("Your video has been saved to notification.");
    setTimeout(() => setSuccess(""), 3000);
  };

  const handleSavePublish = () => {
    const videoWithTimedText = { ...video, timedTexts, isDraft: false };
    if (isEdit) {
      UpdateVideo(video.id, videoWithTimedText);
    } else {
      AddVideo(videoWithTimedText);
    }
    setSuccess("Upload complete — your video has been published successfully.");
    setTimeout(() => {
      setSuccess("");
      navigate("/admin/content-management/videos/video-details", {
        state: { video: videoWithTimedText },
      });
    }, 1000);
  };

  return (
    <div>
      <div className="mt-4 mx-4">
        <div className="flex flex-col mb-2">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/admin/user-management")}
              className="cursor-pointer flex items-center"
              aria-label="Go Back"
            >
              <img src={Left_Arrow} alt="Left Arrow" className="h-8" />
            </button>
            <span className="text-2xl font-Inter-Regular text-gray-800">
              Upload Timed Text
            </span>
            <span className="text-xs font-Inter-Regular text-[#6B6B6B]">
              (Optional)
            </span>
          </div>
          <p className="text-xs text-[#7B9D51] mb-6 font-Inter-Regular text-center mt-2 max-w-xl">
            Timed text makes your videos more inclusive by providing captions
            synced with the visuals.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          {timedTexts.map((item, idx) => (
            <div key={idx} className="flex items-end mb-8">
              <div className="flex flex-col w-1/4 mr-2">
                <label className="text-sm font-Inter-Regular text-[#6B6B6B] mb-1">
                  Upload the timed text
                </label>
                <input
                  type="text"
                  value={item.time}
                  onChange={(e) => handleChange(idx, "time", e.target.value)}
                  placeholder="Time"
                  className="px-3 py-2 border border-[#7B9D51] rounded-md text-sm font-Inter-Regular text-[#333333] placeholder:text-[#333333] focus:border-[#7B9D51]"
                  maxLength={6}
                />
              </div>

              <div className="flex flex-col w-full mr-2">
                <label className="text-sm font-Inter-Regular text-[#6B6B6B] mb-1">
                  *Not more than 6 words
                </label>
                <input
                  type="text"
                  value={item.text}
                  onChange={(e) => handleChange(idx, "text", e.target.value)}
                  placeholder="Text"
                  className="px-3 py-2 border border-[#7B9D51] rounded-md text-sm font-Inter-Regular text-[#333333] placeholder:text-[#333333] focus:border-[#7B9D51]"
                  maxLength={60}
                />
              </div>

              <div className="flex flex-col justify-end mb-0.5">
                <button
                  type="button"
                  onClick={handleAddRow}
                  className="text-[#333333] flex items-center justify-center text-lg font-bold leading-none"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={handleRemoveRow}
                  className="text-[#D26546] flex items-center justify-center text-lg font-bold leading-none"
                >
                  -
                </button>
              </div>
            </div>
          ))}

          <div className="flex gap-3 mt-8 justify-end">
            <button
              className="border border-[#7B9D51] text-[#6B6B6B] px-4 py-2 rounded-md font-medium hover:bg-gray-100 active:bg-[#7B9D51] active:text-white"
              onClick={handleSaveNotification}
            >
              Save to Notification Que
            </button>
            <button
              className="border border-[#7B9D51] text-[#6B6B6B] px-4 py-2 rounded-md font-medium hover:bg-gray-100 active:bg-[#7B9D51] active:text-white"
              onClick={handleSaveDraft}
            >
              Save Draft
            </button>
            <button
              className="border border-[#7B9D51] text-[#6B6B6B] px-4 py-2 rounded-md font-medium hover:bg-gray-100 active:bg-[#7B9D51] active:text-white"
              onClick={handleSavePublish}
            >
              Save &amp; Publish
            </button>
          </div>
        </div>

        {success && (
          <div className="bg-[#f3f7ed] border border-[#7B9D51] rounded-md px-4 py-3 flex items-center text-[#7B9D51] text-sm font-Inter-Medium">
            <span className="mr-2">&#10003;</span> {success}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadTimedText;
