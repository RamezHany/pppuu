import React, { useState, useEffect } from 'react';

export default function Navbar() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to track scroll position
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      // If the scroll position is greater than 50, set isScrolled to true
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect to close the menu when the page is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close menu when switching to desktop view
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 ${isScrolled ? 'bg-[#0B0F19] backdrop-blur-sm' : 'bg-transparent'} z-50 border-b ${isScrolled ? 'border-gray-800/50' : 'border-transparent'} transition-colors duration-500`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center gap-2">
            <img 
              src="./img/logo.png" 
              alt="Client Satisfaction Icon"
              className="h-8"
            />
          </div>
          
          {/* Hamburger menu button for mobile */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              </svg>
            </button>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-8">
            <a href="#home" className="text-white hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-500 transition-colors">About Us</a>
            <a href="#services" className="text-white hover:text-blue-500 transition-colors">Services</a>
            <a href="#blog" className="text-white hover:text-blue-500 transition-colors">Blog</a>
            <a href="#meetup" className="text-white hover:text-blue-500 transition-colors">Meetup</a>
            <a href="#contact" className="text-white hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* 'Get Started' button only for desktop */}
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ml-auto hidden md:block">
            Get Started
          </button>
        </div>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 bg-[#0B0F19] text-center py-4 px-4">
            <a href="#home" className="block text-white hover:text-blue-500 transition-colors">Home</a>
            <a href="#about" className="block text-white hover:text-blue-500 transition-colors">About Us</a>
            <a href="#services" className="block text-white hover:text-blue-500 transition-colors">Services</a>
            <a href="#blog" className="block text-white hover:text-blue-500 transition-colors">Blog</a>
            <a href="#meetup" className="block text-white hover:text-blue-500 transition-colors">Meetup</a>
            <a href="#contact" className="block text-white hover:text-blue-500 transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}
