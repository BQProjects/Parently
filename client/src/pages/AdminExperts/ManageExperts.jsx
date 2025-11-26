import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useExpert } from "../../Context/ExpertContext";
import Edit_Icon from "../../assets/Images/Edit_Icon.png";

const ManageExperts = () => {
  const navigate = useNavigate();
  const { expertsData, RemoveExpert, UpdateExpert } = useExpert();
  const [selectedExpert, setSelectedExpert] = React.useState(null);
  const [currentMonth] = React.useState(new Date());

  // Select first expert by default when experts exist
  React.useEffect(() => {
    if (expertsData.length > 0 && !selectedExpert) {
      setSelectedExpert(expertsData[0]);
    }
  }, [expertsData, selectedExpert]);

  const handleToggleStatus = (id, currentStatus) => {
    UpdateExpert(id, { status: !currentStatus });
  };

  const handleEdit = (expert) => {
    navigate("/admin/manage-experts/add-edit", { state: { expert } });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this expert?")) {
      RemoveExpert(id);
      if (selectedExpert?.id === id) {
        setSelectedExpert(expertsData[0] || null);
      }
    }
  };

  const handleExpertClick = (expert) => {
    setSelectedExpert(expert);
  };

  const getMonthName = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Mock booking data - you can replace this with real data
  const mockBookings = {
    "FRI-08:00": true,
    "MON-09:00": true,
    "WED-10:00": true,
    "THU-11:00": true,
    "TUE-12:00": true,
    "TUE-13:00": true,
    "THU-14:00": true,
    "SUN-15:00": true,
    "FRI-15:00": true,
  };

  return (
    <div className="font-Inter mx-4 my-6">
      <div className="mb-6">
        <h1 className="text-2xl font-medium">Manage Expert</h1>
        <p className="text-sm text-gray-500">
          Add, update or remove experts from the user directory
        </p>
      </div>

      {expertsData.length === 0 ? (
        <div className="border-2 border-dashed border-[#adc98c] h-16 mt-20 flex justify-center items-center rounded-md">
          <button
            onClick={() => navigate("/admin/manage-experts/add-edit")}
            className="flex items-center space-x-2"
          >
            <FaPlus className="text-gray-500" />
            <p className="text-gray-500 text-[13px]">Add New Expert</p>
          </button>
        </div>
      ) : (
        <div>
          <div className="flex gap-6">
            {/* Left Side - Expert List */}
            <div className="w-[35%] space-y-3">
              {expertsData.map((expert) => (
                <div
                  key={expert.id}
                  onClick={() => handleExpertClick(expert)}
                  className={`flex items-center justify-between border rounded-lg px-6 py-4 cursor-pointer transition-colors ${
                    selectedExpert?.id === expert.id
                      ? "bg-[#E8F0DC] border-[#7B9D51]"
                      : " border-[#7b9d51] hover:bg-[#EDF2E7]"
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-600 text-lg font-semibold">
                        {expert.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {expert.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {expert.specialization}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    {/* Toggle Status */}
                    <label
                      className="relative inline-flex items-center cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        checked={expert.status}
                        onChange={() =>
                          handleToggleStatus(expert.id, expert.status)
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7B9D51]"></div>
                    </label>

                    {/* Delete Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(expert.id);
                      }}
                      className="text-red-500 hover:text-red-700"
                    >
                      <RiDeleteBin6Line size={20} />
                    </button>

                    {/* Edit Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(expert);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <img src={Edit_Icon} alt="Edit" className="h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Right Side - Calendar/Schedule */}
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6">
              {selectedExpert && (
                <>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      {getMonthName(currentMonth)}
                    </h2>
                  </div>

                  {/* Calendar Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse table-fixed">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2 text-xs font-medium text-gray-600 w-16">
                            Time
                          </th>
                          {daysOfWeek.map((day) => (
                            <th
                              key={day}
                              className="text-center py-3 px-1 text-xs font-medium text-gray-600"
                            >
                              {day}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {timeSlots.map((time) => (
                          <tr key={time} className="border-b hover:bg-gray-50">
                            <td className="py-2 px-2 text-xs font-medium text-gray-700">
                              {time}
                            </td>
                            {daysOfWeek.map((day) => {
                              const slotKey = `${day}-${time}`;
                              const isBooked = mockBookings[slotKey];
                              return (
                                <td key={day} className="text-center py-2 px-1">
                                  <button
                                    className={`px-2 py-1 rounded text-[10px] font-medium w-full transition-colors ${
                                      isBooked
                                        ? "bg-[#D26546] text-white"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                  >
                                    {isBooked ? "Booked" : "Available"}
                                  </button>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 text-right text-sm text-gray-500">
                    1 meeting booked this week
                  </div>
                </>
              )}
            </div>
          </div>
          {/* Add New Expert Button */}
          <div className="border-2 border-dashed border-[#adc98c] h-16 flex justify-center items-center rounded-md mt-10">
            <button
              onClick={() => navigate("/admin/manage-experts/add-edit")}
              className="flex items-center space-x-2"
            >
              <FaPlus className="text-gray-500" />
              <p className="text-gray-500 text-[13px]">Add New Expert</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageExperts;
