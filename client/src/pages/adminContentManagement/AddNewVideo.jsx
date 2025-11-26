import React from "react";
import { useVideo } from "../../Context/VideoContext";
import Video_Icon from "../../assets/Images/Upload_Icon.png";
import { useNavigate } from "react-router-dom";

const AddNewVideo = () => {
  const { AddVideo } = useVideo();
  const navigate = useNavigate();
  const fileInputRef = React.useRef(null);

  const defaultValues = {
    title: "",
    category: "",
    age_Group: "",
    video: null,
    access_Level: "",
    date: new Date(),
    isDraft: false,
  };

  const [drag, setDrag] = React.useState(false);
  const [formData, setFormData] = React.useState(defaultValues);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDrag(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFormData({
        ...formData,
        video: files[0],
      });
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleValues = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmitBtn = () => {
    if (
      formData.title.trim() === "" ||
      formData.category.trim() === "" ||
      formData.age_Group.trim() === "" ||
      !formData.video ||
      formData.access_Level.trim() === ""
    ) {
      alert("Please fill all the required fields");
      return;
    }

    alert("All fields validated successfully!");
    console.log("Final Form:", formData);
    // Don't add video yet - wait until UploadTimedText page
    navigate("/admin/content-management/videos/upload-timed-text", {
      state: { video: formData },
    });
  };

  return (
    <>
      <div className="my-2 mx-2 flex flex-col w-full font-Inter">
        <h1 className="text-2xl font-medium mb-4">Add New Video</h1>

        <div className="border border-gray-300 w-[70%] rounded-lg">
          <div className="mb-6 px-6 pt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              required
              type="text"
              name="title"
              value={formData.title}
              onChange={handleValues}
              placeholder="Enter video title..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6 px-6 pb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleValues}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select category</option>
                <option value="Play">Play</option>
                <option value="Shop">Shop</option>
                <option value="Dance">Dance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age Group
              </label>
              <select
                name="age_Group"
                value={formData.age_Group}
                onChange={handleValues}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select age group</option>
                <option value="0-2">0-2</option>
                <option value="2-4">2-4</option>
                <option value="4-6">4-6</option>
              </select>
            </div>
          </div>

          {/* Video Upload */}
          <div className="mb-6 px-6 pb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Video Upload
            </label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleFileClick}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                drag
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-gray-50 hover:border-gray-400"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                name="video"
                onChange={handleValues}
                accept="video/mp4,video/avi,video/mov"
                className="hidden"
              />

              <div className="flex flex-col items-center">
                <img src={Video_Icon} />
                <p className="text-gray-600 mb-2">
                  Drop video file here or click to browse
                </p>
                <p className="text-gray-400 text-sm">
                  Supported formats: MP4, AVI, MOV
                </p>

                {formData.video && (
                  <p className="text-green-600 text-sm mt-2">
                    Selected: {formData.video.name}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-8 px-6 pb-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Access Level
            </label>
            <select
              name="access_Level"
              value={formData.access_Level}
              onChange={handleValues}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">Select Access Level</option>
              <option value="Free">Free</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          <div className="flex justify-end pr-4 mb-4">
            <button
              onClick={handleSubmitBtn}
              className="bg-[#6B8E23] hover:bg-[#5a7a1e] text-white font-medium px-8 py-2 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewVideo;
