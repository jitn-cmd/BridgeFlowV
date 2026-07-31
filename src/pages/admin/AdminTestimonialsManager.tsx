import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TestimonialItem } from '../../types';
import { Plus, Trash2, Edit3, Star, X, Check, ShieldAlert } from 'lucide-react';

export const AdminTestimonialsManager: React.FC = () => {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<TestimonialItem>>({
    clientName: '',
    clientTitle: '',
    companyName: '',
    logoUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: '',
    industry: 'Law Firms',
    solutionCategory: 'Legal Solutions',
    approved: true,
    order: testimonials.length + 1
  });

  const handleOpenAdd = () => {
    setEditingItem({
      clientName: '',
      clientTitle: '',
      companyName: '',
      logoUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=150&q=80',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      quote: '',
      industry: 'Law Firms',
      solutionCategory: 'Legal Solutions',
      approved: true,
      order: testimonials.length + 1
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (t: TestimonialItem) => {
    setEditingItem(t);
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem.clientName || !editingItem.quote) return;

    if (editingItem.id) {
      updateTestimonial(editingItem as TestimonialItem);
    } else {
      addTestimonial({
        clientName: editingItem.clientName || '',
        clientTitle: editingItem.clientTitle || '',
        companyName: editingItem.companyName || '',
        logoUrl: editingItem.logoUrl || '',
        avatarUrl: editingItem.avatarUrl || '',
        rating: editingItem.rating || 5,
        quote: editingItem.quote || '',
        industry: editingItem.industry || 'Law Firms',
        solutionCategory: editingItem.solutionCategory || 'Legal Solutions',
        approved: editingItem.approved !== undefined ? editingItem.approved : true,
        order: editingItem.order || testimonials.length + 1
      });
    }

    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Client Testimonials Manager</h3>
          <p className="text-xs text-slate-400">Manage executive ratings, approval status, and testimonial quotes.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Add Testimonial</span>
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">{editingItem.id ? 'Edit Testimonial' : 'Add Testimonial'}</h4>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Executive Name *</label>
              <input
                type="text"
                required
                value={editingItem.clientName || ''}
                onChange={(e) => setEditingItem(prev => ({ ...prev, clientName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Designation / Title</label>
              <input
                type="text"
                value={editingItem.clientTitle || ''}
                onChange={(e) => setEditingItem(prev => ({ ...prev, clientTitle: e.target.value }))}
                placeholder="e.g. Managing Partner, CFO"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Company Name</label>
              <input
                type="text"
                value={editingItem.companyName || ''}
                onChange={(e) => setEditingItem(prev => ({ ...prev, companyName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Star Rating (1 - 5)</label>
              <input
                type="number"
                min={1}
                max={5}
                value={editingItem.rating || 5}
                onChange={(e) => setEditingItem(prev => ({ ...prev, rating: parseInt(e.target.value) || 5 }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="text-xs space-y-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Testimonial Quote *</label>
              <textarea
                required
                rows={3}
                value={editingItem.quote || ''}
                onChange={(e) => setEditingItem(prev => ({ ...prev, quote: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="approvedCheck"
                checked={editingItem.approved !== false}
                onChange={(e) => setEditingItem(prev => ({ ...prev, approved: e.target.checked }))}
                className="w-4 h-4 rounded text-cyan-500 bg-slate-950 border-slate-800"
              />
              <label htmlFor="approvedCheck" className="text-xs font-semibold text-slate-300">Approved (Visible on website)</label>
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
              Save Testimonial
            </button>
          </div>
        </form>
      )}

      <div className="rounded-2xl bg-slate-900 border border-slate-800 divide-y divide-slate-800 overflow-hidden">
        {testimonials.map((test) => (
          <div key={test.id} className="p-4 flex items-center justify-between space-x-4 hover:bg-slate-950/40 transition-colors">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm text-white">{test.clientName}</span>
                <span className="text-xs text-cyan-400">({test.companyName})</span>
                <div className="flex items-center space-x-0.5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-slate-300 line-clamp-1">"{test.quote}"</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateTestimonial({ ...test, approved: !test.approved })}
                className={`p-1.5 rounded-lg text-xs font-semibold ${test.approved ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}
              >
                {test.approved ? 'Approved' : 'Pending'}
              </button>

              <button
                onClick={() => handleOpenEdit(test)}
                className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700"
                title="Edit"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => deleteTestimonial(test.id)}
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
