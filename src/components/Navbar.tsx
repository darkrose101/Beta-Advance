import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <nav className="bg-green-700 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8" />
            <span className="font-bold text-xl">E-Citizen Jobs</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/jobs" className="hover:text-green-200">Jobs</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="hover:text-green-200">Dashboard</Link>
                <button 
                  onClick={() => logout()}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="bg-white text-green-700 hover:bg-green-100 px-4 py-2 rounded-md"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-green-200">Home</Link>
            <Link to="/jobs" className="block py-2 hover:text-green-200">Jobs</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block py-2 hover:text-green-200">Dashboard</Link>
                <button 
                  onClick={() => logout()}
                  className="w-full text-left py-2 text-red-300 hover:text-red-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/auth" 
                className="block py-2 hover:text-green-200"
              >
                Sign In
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}