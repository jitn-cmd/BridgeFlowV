import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Search, Calendar, Clock, ArrowRight, User } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const { blogs, setSelectedBlogPost } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category)))];

  const filtered = blogs.filter(b => {
    const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/20">
          Executive Advisory Briefings
        </span>
        <h1 className="text-4xl font-extrabold text-white">BridgeFlowV Industry Insights</h1>
        <p className="text-base text-slate-300 leading-relaxed">
          Expert analysis on legal process outsourcing, seasonal accounting capacity, AI agent integration, and modern operational efficiency frameworks.
        </p>
      </div>

      {/* Search & Categories */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles & topics..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedBlogPost(blog)}
            className="group cursor-pointer rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all space-y-4 flex flex-col justify-between shadow-xl"
          >
            <div className="space-y-4">
              <div className="h-52 overflow-hidden relative">
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 text-[10px] font-bold text-cyan-300 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-cyan-500/30">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 pt-0 space-y-3">
                <div className="flex items-center space-x-3 text-[11px] text-slate-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{blog.publishedDate}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    <span>{blog.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {blog.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            {/* Author Bar */}
            <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/80 mt-4 text-xs">
              <div className="flex items-center space-x-2">
                <img
                  src={blog.authorAvatar}
                  alt={blog.authorName}
                  className="w-7 h-7 rounded-full object-cover border border-cyan-500/30"
                  referrerPolicy="no-referrer"
                />
                <span className="text-slate-300 font-semibold">{blog.authorName}</span>
              </div>

              <span className="text-cyan-400 font-bold group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
