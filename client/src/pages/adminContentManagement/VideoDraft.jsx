import React from "react";
import { useVideo } from "../../Context/VideoContext";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const VideoDraft = () => {
  const navigate = useNavigate();
  const { VideosData, RemoveVideo, UpdateVideo } = useVideo();
  const [deleteVideo, setDeleteVideo] = React.useState(null);
  const [search, setSearch] = React.useState("");
  const [categoryFilter, setCategoryFilter] = React.useState("");
  const [accessFilter, setAccessFilter] = React.useState("");

  const [DraftVideos, setDraftVideos] = React.useState([]);

  React.useEffect(() => {
    let filtered = VideosData.filter((v) => v.isDraft);
    if (search) {
      filtered = filtered.filter((v) =>
        v.title?.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (categoryFilter) {
      filtered = filtered.filter((v) => v.category === categoryFilter);
    }
    if (accessFilter) {
      filtered = filtered.filter((v) => v.access_Level === accessFilter);
    }
    setDraftVideos(filtered);
  }, [VideosData, search, categoryFilter, accessFilter]);

  return (
    <div className="font-Inter mx-2">
      <h1 className="font-medium text-2xl mt-4 ml-2">All Draft Videos</h1>
      <div className="border-[#7B9D51] border py-8 px-8 rounded-md flex space-x-4 my-4">
        <input
          type="text"
          placeholder="Search Videos..."
          className="border-[#adc98c] border outline-none px-8 h-12 text-md rounded-md w-[60%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="relative flex items-center w-1/5">
          <select
            className="border-[#adc98c] border pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {Array.from(
              new Set(
                VideosData.filter((v) => v.isDraft)
                  .map((v) => v.category)
                  .filter(Boolean)
              )
            ).map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
        </div>
        <div className="relative flex items-center w-1/5">
          <select
            className="border-[#adc98c] border pl-4 pr-10 h-12 rounded-md appearance-none w-full outline-none cursor-pointer"
            value={accessFilter}
            onChange={(e) => setAccessFilter(e.target.value)}
          >
            <option value="">All Access Levels</option>
            {Array.from(
              new Set(
                VideosData.filter((v) => v.isDraft)
                  .map((v) => v.access_Level)
                  .filter(Boolean)
              )
            ).map((level, i) => (
              <option key={i} value={level}>
                {level}
              </option>
            ))}
          </select>
          <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600" />
        </div>
      </div>

      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-[#7B9D51] text-white">
            <th className="border border-gray-300 px-4 py-4 text-start">
              Video ID
            </th>
            <th className="border border-gray-300 px-4 py-4 text-start">
              Thumbnail
            </th>
            <th className="border border-gray-300 px-4 py-4 text-start">
              Title
            </th>
            <th className="border border-gray-300 px-4 py-4 text-start">
              Category
            </th>
            <th className="border border-gray-300 px-4 py-4 text-start">
              Access Level
            </th>
            <th className="border border-gray-300 px-4 py-4 text-start">
              Upload Date
            </th>
            <th className="border border-gray-300 px-4 py-4 text-start">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {DraftVideos.length > 0 ? (
            DraftVideos.map((data, index) => (
              <tr key={index} className="bg-[#d8e8c6]">
                <td className="border border-gray-300 px-4 py-4 text-center">{`VID${String(
                  index + 1
                ).padStart(3, "0")}`}</td>
                <td className="border border-gray-300 px-4 py-4 text-center">
                  {data.thumbnail}
                </td>
                <td className="border border-gray-300 px-4 py-4">
                  {data.title}
                </td>
                <td className="border border-gray-300 px-4 py-4 text-center">
                  {data.category}
                </td>
                <td className="border border-gray-300 px-4 py-4 text-center">
                  <span
                    className={`${
                      data.access_Level === "Free"
                        ? "bg-[#98a883] text-black"
                        : "bg-[#7B9D51] text-white"
                    } px-2 py-1 rounded`}
                  >
                    {data.access_Level}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-4 text-center">
                  {data.date
                    ? new Date(data.date).toISOString().split("T")[0]
                    : "N/A"}
                </td>
                <td className="px-4 py-4 flex justify-around">
                  <button
                    className="w-15 bg-gray-200 text-sm py-2 cursor-pointer rounded-md border"
                    onClick={() =>
                      navigate(
                        "/admin/content-management/videos/video-details",
                        {
                          state: { video: data },
                        }
                      )
                    }
                  >
                    View
                  </button>
                  <button
                    className="w-15 bg-gray-200 text-sm py-2 cursor-pointer rounded-md border"
                    onClick={() => setDeleteVideo(data)}
                  >
                    Delete
                  </button>
                  <button
                    className="w-15 bg-gray-200 text-sm py-2 cursor-pointer rounded-md border"
                    onClick={() => {
                      UpdateVideo(data.id, { isDraft: false });
                    }}
                  >
                    Publish
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="text-center py-4">
                No Draft Videos Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {deleteVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative bg-white rounded-lg p-6 w-96 shadow-lg z-10">
            <h2 className="text-xl font-semibold mb-2">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this video?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setDeleteVideo(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  RemoveVideo(deleteVideo.id);
                  setDeleteVideo(null);
                }}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDraft;
