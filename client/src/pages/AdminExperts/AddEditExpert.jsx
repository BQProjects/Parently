import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Left_Arrow from "../../assets/Images/LeftArrow.png";
import { FiUpload } from "react-icons/fi";
import { useExpert } from "../../Context/ExpertContext";

function AddEditExpert() {
  const navigate = useNavigate();
  const location = useLocation();
  const { AddExpert, UpdateExpert } = useExpert();
  const fileInputRef = React.useRef(null);

  const expert = location.state?.expert || null;
  const isEditing = !!expert;

  const defaultValues = {
    name: "",
    specialization: "",
    bio: "",
    email: "",
    profilePhoto: null,
    status: true,
  };

  const [formData, setFormData] = React.useState(
    isEditing
      ? {
          name: expert.name,
          specialization: expert.specialization,
          bio: expert.bio || "",
          email: expert.email || "",
          profilePhoto: expert.profilePhoto || null,
          status: expert.status,
        }
      : defaultValues
  );

  const [drag, setDrag] = React.useState(false);

  const handleInputChange = (e) => {
    const { name, value, files, checked } = e.target;

    if (name === "status") {
      setFormData((prev) => ({ ...prev, status: checked }));
      return;
    }

    if (files) {
      setFormData((prev) => ({ ...prev, profilePhoto: files[0] }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
      setFormData((prev) => ({ ...prev, profilePhoto: files[0] }));
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.specialization.trim()) {
      alert("Please fill Expert Name and Specialization");
      return;
    }

    if (isEditing) {
      UpdateExpert(expert.id, formData);
    } else {
      AddExpert(formData);
    }

    navigate("/admin/manage-experts");
  };

  const handleCancel = () => {
    navigate("/admin/manage-experts");
  };

  return (
    <div className="font-Inter mx-4 my-6">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={handleCancel}
          className="cursor-pointer flex items-center mr-3"
          aria-label="Go Back"
        >
          <img src={Left_Arrow} alt="Left Arrow" className="h-8" />
        </button>
        <h1 className="text-2xl font-medium">
          {isEditing ? "Edit Expert" : "Add New Expert"}
        </h1>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-3 mb-6">
        <button
          onClick={handleCancel}
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-[#7B9D51] text-white rounded-md hover:bg-[#6a8845]"
        >
          Save Changes
        </button>
      </div>

      {/* Form */}
      <div className="border border-gray-300 rounded-lg p-8 w-full">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Expert Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expert Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g, Dr. John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B9D51]"
            />
          </div>

          {/* Specialization / Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specialization / Role
            </label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              placeholder="e.g, Child Psychiatrist"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B9D51]"
            />
          </div>
        </div>

        {/* Description / Bio */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description / Bio
          </label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Write a short bio for the expert...."
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B9D51] resize-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            {/* Email / Contact Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email / Contact Info
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="e.g, johndoe@parently.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7B9D51]"
              />
            </div>

            {/* Active Status */}
            <div className="flex items-center">
              <label className="text-sm font-medium text-gray-700 mr-3">
                Active Status
              </label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="status"
                  checked={formData.status}
                  onChange={handleInputChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7B9D51]"></div>
              </label>
            </div>
          </div>

          {/* Right Column - Profile Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Photo
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={handleFileClick}
              className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors h-full flex items-center justify-center ${
                drag
                  ? "border-[#7B9D51] bg-green-50"
                  : "border-gray-300 bg-gray-50 hover:border-gray-400"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                name="profilePhoto"
                onChange={handleInputChange}
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
              />

              <div className="flex flex-col items-center">
                <FiUpload className="text-[#7B9D51] mb-2" size={32} />
                <p className="text-gray-600 text-sm mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-gray-400 text-xs">
                  PNG, JPG (max. 800×800px)
                </p>

                {formData.profilePhoto && (
                  <p className="text-[#7B9D51] text-sm mt-2 font-medium">
                    Selected: {formData.profilePhoto.name}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEditExpert;
