import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BlogPost } from '../../types';
import { Plus, Trash2, Edit3, X, Search, FileText } from 'lucide-react';

export const AdminBlogManager: React.FC = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost>>({
    title: '',
    slug: 'article',
    category: 'Legal Solutions',
    excerpt: '',
    content: '',
    authorName: 'Eleanor Sterling, JD',
    authorRole: 'Head of Legal Practice',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    publishedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    readTime: '5 min read',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    featured: true,
    tags: []
  });

  const [tagsInput, setTagsInput] = useState('');

  const handleOpenAdd = () => {
    setEditingBlog({
      title: '',
      slug: 'new-advisory-article',
      category: 'Legal Solutions',
      excerpt: '',
      content: '',
      authorName: 'Alexander Vance',
      authorRole: 'Managing Director',
      authorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
      publishedDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      featured: true,
      tags: ['Outsourcing', 'Advisory']
    });
    setTagsInput('Outsourcing, Advisory');
    setIsEditing(true);
  };

  const handleOpenEdit = (blog: BlogPost) => {
    setEditingBlog(blog);
    setTagsInput(blog.tags.join(', '));
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog.title || !editingBlog.content) return;

    const tagsArray = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    if (editingBlog.id) {
      updateBlog({
        ...(editingBlog as BlogPost),
        tags: tagsArray
      });
    } else {
      addBlog({
        title: editingBlog.title || '',
        slug: editingBlog.slug || 'article',
        category: editingBlog.category || 'General',
        excerpt: editingBlog.excerpt || '',
        content: editingBlog.content || '',
        authorName: editingBlog.authorName || 'BridgeFlowV Principal',
        authorRole: editingBlog.authorRole || 'Advisor',
        authorAvatar: editingBlog.authorAvatar || '',
        publishedDate: editingBlog.publishedDate || 'Today',
        readTime: editingBlog.readTime || '5 min read',
        imageUrl: editingBlog.imageUrl || '',
        featured: editingBlog.featured !== undefined ? editingBlog.featured : true,
        tags: tagsArray
      });
    }

    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Blog Article Manager</h3>
          <p className="text-xs text-slate-400">Publish, edit, or delete executive advisory briefings.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Publish Article</span>
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">{editingBlog.id ? 'Edit Article' : 'Publish New Article'}</h4>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Article Title *</label>
              <input
                type="text"
                required
                value={editingBlog.title || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, title: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Category</label>
              <input
                type="text"
                value={editingBlog.category || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, category: e.target.value }))}
                placeholder="e.g. Legal Solutions, AI Solutions"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Author Name</label>
              <input
                type="text"
                value={editingBlog.authorName || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, authorName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Author Role</label>
              <input
                type="text"
                value={editingBlog.authorRole || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, authorRole: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Cover Image URL</label>
              <input
                type="text"
                value={editingBlog.imageUrl || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, imageUrl: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Estimated Read Time</label>
              <input
                type="text"
                value={editingBlog.readTime || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, readTime: e.target.value }))}
                placeholder="e.g. 5 min read"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="text-xs space-y-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Excerpt Summary</label>
              <input
                type="text"
                value={editingBlog.excerpt || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Article Content (Markdown supported) *</label>
              <textarea
                required
                rows={6}
                value={editingBlog.content || ''}
                onChange={(e) => setEditingBlog(prev => ({ ...prev, content: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500 font-mono text-xs"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Tags (Comma-separated)</label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="Legal, Outsourcing, Growth"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-end space-x-2 pt-4 border-t border-slate-800">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Publish Article
            </button>
          </div>
        </form>
      )}

      <div className="rounded-2xl bg-slate-900 border border-slate-800 divide-y divide-slate-800 overflow-hidden">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4 flex items-center justify-between space-x-4 hover:bg-slate-950/40 transition-colors">
            <div className="flex items-center space-x-3">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-12 h-12 rounded-xl object-cover border border-slate-800"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-sm text-white line-clamp-1">{blog.title}</span>
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20 shrink-0">
                    {blog.category}
                  </span>
                </div>
                <span className="text-xs text-slate-400">{blog.authorName} • {blog.publishedDate}</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleOpenEdit(blog)}
                className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700"
                title="Edit"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => deleteBlog(blog.id)}
                className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
