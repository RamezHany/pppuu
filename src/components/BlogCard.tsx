import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ image, title, excerpt, date }: BlogCardProps) {
  return (
    <article className="bg-[#151923] rounded-lg overflow-hidden group hover:transform hover:-translate-y-1 transition-all duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-blue-500 text-sm">{date}</span>
        <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{excerpt}</p>
        <button className="text-blue-500 flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}