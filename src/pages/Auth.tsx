import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState(searchParams.get('role') || 'youth');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/registration
    login({
      id: '1',
      email: 'test@example.com',
      role: role as 'youth' | 'corporation' | 'admin',
      name: 'Test User',
      verified: true
    });
    navigate('/dashboard');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold">{isLogin ? 'Welcome Back' : 'Get Started'}</h2>
        <p className="text-gray-600 mt-2">
          {isLogin ? 'Sign in to access your account' : 'Create your account to join'}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-md ${
              isLogin ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-md ${
              !isLogin ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            Register
          </button>
        </div>

        {!isLogin && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              I am a:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="youth"
                  checked={role === 'youth'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Youth
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="corporation"
                  checked={role === 'corporation'}
                  onChange={(e) => setRole(e.target.value)}
                  className="mr-2"
                />
                Corporation
              </label>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          
          {!isLogin && role === 'youth' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills (comma-separated)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="e.g., Web Development, Data Analysis"
                />
              </div>
            </>
          )}

          {!isLogin && role === 'corporation' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Registration Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter registration number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="e.g., Technology, Healthcare"
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}