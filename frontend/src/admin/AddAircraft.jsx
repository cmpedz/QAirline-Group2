import React, { useState } from "react";

const AddAircraft = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    manufacturer: "",
    logo: "",
    seatClasses: [
      { classType: "Economy", capacity: 0 },
      { classType: "Business", capacity: 0 },
    ],
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle seat class changes
  const handleSeatClassChange = (index, value) => {
    const updatedClasses = [...formData.seatClasses];
    updatedClasses[index].capacity = Number(value);
    setFormData({ ...formData, seatClasses: updatedClasses });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      id: "",
      manufacturer: "",
      logo: "",
      seatClasses: [
        { classType: "Economy", capacity: 0 },
        { classType: "Business", capacity: 0 },
      ],
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">Add New Aircraft</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium">Aircraft Code</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Manufacturer</label>
            <input
              type="text"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Logo URL</label>
            <input
              type="text"
              name="logo"
              value={formData.logo}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {formData.seatClasses.map((cls, index) => (
              <div key={index}>
                <label className="block font-medium">
                  {cls.classType} Seats
                </label>
                <input
                  type="number"
                  value={cls.capacity}
                  onChange={(e) => handleSeatClassChange(index, e.target.value)}
                  className="w-full border rounded p-2"
                  required
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAircraft;
