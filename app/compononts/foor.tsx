// components/Footer.js
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
        <p className="mb-8">Follow us on social media for updates, tips, and more!</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="hover:text-blue-600 transition-all duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-blue-700 transition-all duration-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-pink-500 transition-all duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="hover:text-gray-600 transition-all duration-300" />
          </a>
        </div>
        
        {/* Footer Text */}
        <p className="text-sm">&copy; 2024 Your Site Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
