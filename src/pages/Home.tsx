import React from 'react';
import { ArrowRight, Building2, Users, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Connecting Kenya's Youth with
          <span className="text-green-600"> Government Opportunities</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join Kenya's premier platform connecting young talent with government corporations
          for remote work opportunities.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/auth?role=youth"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            Join as Youth <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/auth?role=corporation"
            className="bg-white text-green-600 border-2 border-green-600 px-6 py-3 rounded-lg hover:bg-green-50 flex items-center gap-2"
          >
            Register Corporation <Building2 className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: Building2, label: 'Government Corporations', value: '100+' },
          { icon: Users, label: 'Registered Youth', value: '10,000+' },
          { icon: CheckCircle, label: 'Completed Projects', value: '5,000+' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md">
            <stat.icon className="h-12 w-12 mx-auto text-green-600 mb-4" />
            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="bg-white rounded-xl p-8 shadow-md">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Register',
              description: 'Create your account as a youth (21-28) or government corporation'
            },
            {
              title: 'Connect',
              description: 'Browse opportunities or post jobs with real-time communication'
            },
            {
              title: 'Work',
              description: 'Complete tasks with secure payment through escrow system'
            },
            {
              title: 'Grow',
              description: 'Build your profile with performance reviews and ratings'
            }
          ].map((feature, i) => (
            <div key={i} className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">{i + 1}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}