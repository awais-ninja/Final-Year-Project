"use client";
import React, { useState } from "react";

const UserManagementPage = () => {
  const [userData, setUserData] = useState([
    {
      id: 1,
      username: "john_doe",
      email: "john@example.com",
      firstName: "John",
      lastName: "Doe",
    },
    {
      id: 2,
      username: "jane_smith",
      email: "jane@example.com",
      firstName: "Jane",
      lastName: "Smith",
    },
  ]);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    const userId = userData.length + 1;
    const updatedUserData = [...userData, { id: userId, ...newUser }];
    setUserData(updatedUserData);
    setNewUser({
      username: "",
      email: "",
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">User Management</h1>
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Username</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">First Name</th>
                <th className="px-4 py-2">Last Name</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id}>
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.username}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.firstName}</td>
                  <td className="border px-4 py-2">{user.lastName}</td>
                  <td className="border px-4 py-2">
                    <button className="mr-2">View</button>
                    <button className="mr-2">Edit</button>
                    <button className="mr-2">Delete</button>
                    <button>Revoke</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-4">Add User</h2>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="text"
            name="username"
            value={newUser.username}
            onChange={handleInputChange}
            placeholder="Username"
            className="border rounded-md px-4 py-2 mb-2 md:w-1/4"
          />
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="border rounded-md px-4 py-2 mb-2 md:w-1/4"
          />
          <input
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="border rounded-md px-4 py-2 mb-2 md:w-1/4"
          />
          <input
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="border rounded-md px-4 py-2 mb-2 md:w-1/4"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default UserManagementPage;
