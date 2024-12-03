import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with SolSaa has been transformative for our business. Their digital marketing expertise helped us achieve a 300% increase in online visibility.",
    author: "John Smith",
    position: "CEO at TechCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "The ROI we've seen from SolSaa's marketing strategies has been exceptional. They truly understand the digital landscape.",
    author: "Sarah Johnson",
    position: "Marketing Director at InnovateCo",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    quote: "Their data-driven approach to marketing helped us identify and capture opportunities we didn't even know existed.",
    author: "Michael Chen",
    position: "Founder of StartupX",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  }
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-[#151923] p-8 rounded-lg min-h-[250px] relative overflow-hidden">
        <div
          key={currentIndex}
          className={`animate-fade-${direction > 0 ? 'left' : 'right'}`}
        >
          <p className="text-gray-400 mb-6 text-lg italic">"{testimonials[currentIndex].quote}"</p>
          <div className="flex items-center gap-4">
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].author} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="font-bold">{testimonials[currentIndex].author}</h4>
              <p className="text-gray-400">{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button 
          onClick={prev} 
          className="p-2 rounded-full bg-[#151923] hover:bg-[#1a1f2d] transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button 
          onClick={next} 
          className="p-2 rounded-full bg-[#151923] hover:bg-[#1a1f2d] transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}