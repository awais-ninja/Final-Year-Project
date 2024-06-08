import React from "react";

const AdminSettingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">Admin Settings</h1>
      {/* My Account Settings */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">My Account</h2>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <p className="text-gray-700">AdminUser123</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <p className="text-gray-700">admin@example.com</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>
        </div>
      </div>
      {/* Contact Information Settings */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              placeholder="Enter address"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              placeholder="Enter city"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country
            </label>
            <input
              type="text"
              placeholder="Enter country"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Postal Code
            </label>
            <input
              type="text"
              placeholder="Enter postal code"
              className="form-input rounded-md shadow-sm w-full"
            />
          </div>
          <div className="col-span-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              About Me
            </label>
            <textarea
              placeholder="Enter about me"
              rows="4"
              className="form-textarea rounded-md shadow-sm w-full"
            ></textarea>
          </div>
        </div>
      </div>
      {/* Save Button */}
      <div className="mt-8 text-right">
        <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
