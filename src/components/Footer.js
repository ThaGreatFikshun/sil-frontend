// src/components/Footer.js

import React from 'react';

const Footer = () => (
  <footer id="footer" className="bg-gray-800 py-8 mt-16">
    <div className="container mx-auto px-4 text-center text-gray-400">
      <p className="mb-4">&copy; {new Date().getFullYear()} Savannah Informatics. All rights reserved.</p>
      
      <div className="flex justify-center space-x-8">
        <div>
          <h3 className="text-white font-semibold mb-2">Features</h3>
          <ul className="space-y-2">
            <li><a href="/manage-albums" className="hover:text-white">Manage Your Albums</a></li>
            <li><a href="/photo-sharing" className="hover:text-white">Share Photos with Friends</a></li>
            <li><a href="/automatic-backup" className="hover:text-white">Automatic Backup</a></li>
            <li><a href="/photo-editing" className="hover:text-white">Edit Your Photos</a></li>
            <li><a href="/organize-photos" className="hover:text-white">Organize Photos Easily</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">About Us</h3>
          <ul className="space-y-2">
            <li><a href="/our-mission" className="hover:text-white">Our Mission</a></li>
            <li><a href="/team" className="hover:text-white">Meet the Team</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/community" className="hover:text-white">Our Community</a></li>
            <li><a href="/press" className="hover:text-white">Press Releases</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-2">Help Center</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/support" className="hover:text-white">Customer Support</a></li>
            <li><a href="/tips" className="hover:text-white">Photo Management Tips</a></li>
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/feedback" className="hover:text-white">Send Feedback</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-white">Terms of Service</a>
          <a href="/cookie-policy" className="hover:text-white">Cookie Policy</a>
          <a href="/customer-service-charter" className="hover:text-white">Customer Service Charter</a>
        </div>
      </div>

      <p className="mt-4 text-sm">Regulated by relevant authorities.</p>
    </div>
  </footer>
);

export default Footer;
