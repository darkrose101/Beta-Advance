import React from 'react';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8" />
              <span className="font-bold text-xl">E-Citizen Jobs</span>
            </div>
            <p className="text-gray-400">
              Empowering Kenya's youth through government opportunities
            </p>
          </div>
          
          {[
            {
              title: 'Quick Links',
              links: ['Home', 'About', 'Jobs', 'Contact']
            },
            {
              title: 'Resources',
              links: ['FAQ', 'Terms of Service', 'Privacy Policy', 'Support']
            },
            {
              title: 'Contact',
              content: [
                'support@ecitizenjobs.go.ke',
                '+254 20 XXX XXXX',
                'Nairobi, Kenya'
              ]
            }
          ].map((section, i) => (
            <div key={i}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links ? (
                  section.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-gray-400 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))
                ) : (
                  section.content?.map((item, j) => (
                    <li key={j} className="text-gray-400">
                      {item}
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} E-Citizen Jobs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}