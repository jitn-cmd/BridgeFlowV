import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, Clock, Share2, Bookmark, Check, User } from 'lucide-react';
import { motion } from 'motion/react';

export const BlogPostModal: React.FC = () => {
  const { selectedBlogPost, setSelectedBlogPost, showToast } = useApp();
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  if (!selectedBlogPost) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    showToast("Article link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleBookmark = () => {
    setBookmarked(!bookmarked);
    showToast(bookmarked ? "Removed from saved articles" : "Article saved to reading list!");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 shrink-0">
          <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            {selectedBlogPost.category}
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleToggleBookmark}
              className={`p-2 rounded-lg border transition-colors ${
                bookmarked 
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-400' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
              title="Save Article"
            >
              <Bookmark className="w-4 h-4" />
            </button>

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              title="Share Article"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setSelectedBlogPost(null)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {selectedBlogPost.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center space-x-3">
              <img
                src={selectedBlogPost.authorAvatar}
                alt={selectedBlogPost.authorName}
                className="w-10 h-10 rounded-full object-cover border border-cyan-500/40"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-bold text-slate-200 block">{selectedBlogPost.authorName}</span>
                <span className="text-slate-500 text-[11px]">{selectedBlogPost.authorRole}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{selectedBlogPost.publishedDate}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{selectedBlogPost.readTime}</span>
              </span>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden max-h-72 border border-slate-800">
            <img
              src={selectedBlogPost.imageUrl}
              alt={selectedBlogPost.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed whitespace-pre-line">
            {selectedBlogPost.content}
          </div>

          {selectedBlogPost.tags && (
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
              {selectedBlogPost.tags.map(tag => (
                <span key={tag} className="text-[11px] font-medium bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </motion.div>
    </div>
  );
};
