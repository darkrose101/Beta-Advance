import React, { useState } from 'react';
import { MessageSquare, DollarSign, Briefcase, Star } from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showChatModal, setShowChatModal] = useState(false);
  const [showEscrowModal, setShowEscrowModal] = useState(false);

  // Test data
  const testJobs = [
    {
      id: 1,
      title: "Digital Content Creation",
      corporation: "Ministry of ICT",
      budget: 50000,
      deadline: "2024-04-01",
      status: "open"
    },
    {
      id: 2,
      title: "Data Analysis Project",
      corporation: "Kenya Bureau of Statistics",
      budget: 75000,
      deadline: "2024-03-25",
      status: "in-progress"
    }
  ];

  const testMessages = [
    {
      id: 1,
      sender: "Ministry of ICT",
      message: "Hello! We reviewed your application.",
      time: "10:30 AM"
    },
    {
      id: 2,
      sender: "Kenya Bureau of Statistics",
      message: "When can you start the project?",
      time: "11:45 AM"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Test User</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Jobs', value: '2', icon: Briefcase, color: 'bg-blue-500' },
          { label: 'Unread Messages', value: '3', icon: MessageSquare, color: 'bg-green-500' },
          { label: 'Escrow Balance', value: 'KES 125,000', icon: DollarSign, color: 'bg-yellow-500' },
          { label: 'Average Rating', value: '4.8/5', icon: Star, color: 'bg-purple-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <nav className="flex">
            {['jobs', 'messages', 'escrow', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === tab
                    ? 'border-b-2 border-green-500 text-green-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Jobs Tab */}
          {activeTab === 'jobs' && (
            <div className="space-y-4">
              {testJobs.map((job) => (
                <div key={job.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{job.title}</h3>
                      <p className="text-gray-600">{job.corporation}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      job.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {job.status}
                    </span>
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-gray-600">
                    <p>Budget: KES {job.budget}</p>
                    <p>Deadline: {job.deadline}</p>
                  </div>
                  <button 
                    onClick={() => setShowChatModal(true)}
                    className="mt-4 text-green-600 hover:text-green-700 text-sm font-medium"
                  >
                    Contact Corporation
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <div className="space-y-4">
              {testMessages.map((msg) => (
                <div key={msg.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{msg.sender}</h3>
                      <p className="text-gray-600">{msg.message}</p>
                    </div>
                    <span className="text-sm text-gray-500">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Escrow Tab */}
          {activeTab === 'escrow' && (
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Active Escrow</h3>
                <div className="space-y-2">
                  <p>Project: Data Analysis Project</p>
                  <p>Amount: KES 75,000</p>
                  <p>Status: Funded</p>
                  <button 
                    onClick={() => setShowEscrowModal(true)}
                    className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Release Funds
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Reviews Tab */}
          {activeTab === 'reviews' && (
            <div className="space-y-4">
              <div className="border rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">Latest Review</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-2">
                  "Excellent work on the content creation project. Delivered on time and exceeded expectations."
                </p>
                <p className="text-sm text-gray-500">- Ministry of ICT</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Modal */}
      {showChatModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">Chat with Corporation</h3>
            <div className="h-64 border rounded p-4 mb-4 overflow-y-auto">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">This is a test chat interface.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <input 
                type="text" 
                className="flex-1 border rounded px-3 py-2"
                placeholder="Type your message..."
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
            </div>
            <button 
              onClick={() => setShowChatModal(false)}
              className="mt-4 text-gray-600 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Escrow Modal */}
      {showEscrowModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="font-semibold text-lg mb-4">Release Escrow Funds</h3>
            <p className="text-gray-600 mb-4">
              Are you sure you want to release KES 75,000 to the corporation?
            </p>
            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setShowEscrowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-700"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowEscrowModal(false)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm Release
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}