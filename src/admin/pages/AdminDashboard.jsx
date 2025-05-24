import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 120,
    totalCertificates: 75,
    totalGalleryItems: 50,
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, activity: "New Certificate Added: 'Donation Certificate'", date: "2025-05-10" },
    { id: 2, activity: "New Gallery Item: 'Charity Event Photo'", date: "2025-05-09" },
    { id: 3, activity: "User Registered: 'John Doe'", date: "2025-05-08" },
    { id: 4, activity: "New Certificate Added: 'Fundraising Certificate'", date: "2025-05-07" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow rounded-lg p-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-600">Admin Dashboard</h1>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-700">Total Users</h2>
            <p className="text-2xl font-bold text-indigo-600">{stats.totalUsers}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-700">Total Certificates</h2>
            <p className="text-2xl font-bold text-indigo-600">{stats.totalCertificates}</p>
          </div>
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-medium text-gray-700">Total Gallery Items</h2>
            <p className="text-2xl font-bold text-indigo-600">{stats.totalGalleryItems}</p>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Recent Activities</h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="flex justify-between items-center text-gray-600">
                <span>{activity.activity}</span>
                <span className="text-sm text-gray-500">{activity.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation links (Optional) */}
        <div className="mt-6">
          <h2 className="text-xl font-medium text-gray-700 mb-4">Quick Navigation</h2>
          <div className="space-x-4">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Manage Certificates
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Manage Gallery
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              User Management
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
