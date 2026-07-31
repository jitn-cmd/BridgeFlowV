import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ClientItem } from '../../types';
import { Plus, Trash2, Edit3, Star, X, Search, Building2, Globe2 } from 'lucide-react';

export const AdminClientManager: React.FC = () => {
  const { clients, addClient, updateClient, deleteClient } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [editingClient, setEditingClient] = useState<Partial<ClientItem>>({
    companyName: '',
    logoUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=200&q=80',
    industry: 'Law Firms',
    country: 'United States',
    description: '',
    website: '',
    featured: true,
    order: clients.length + 1
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenAdd = () => {
    setEditingClient({
      companyName: '',
      logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=200&q=80',
      industry: 'Finance',
      country: 'United States',
      description: '',
      website: '',
      featured: true,
      order: clients.length + 1
    });
    setIsEditing(true);
  };

  const handleOpenEdit = (client: ClientItem) => {
    setEditingClient(client);
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClient.companyName) return;

    if (editingClient.id) {
      updateClient(editingClient as ClientItem);
    } else {
      addClient({
        companyName: editingClient.companyName || '',
        logoUrl: editingClient.logoUrl || '',
        industry: editingClient.industry || 'Law Firms',
        country: editingClient.country || 'United States',
        description: editingClient.description || '',
        website: editingClient.website || '',
        featured: editingClient.featured !== undefined ? editingClient.featured : true,
        order: editingClient.order || clients.length + 1
      });
    }

    setIsEditing(false);
  };

  const filtered = clients.filter(c => 
    !searchQuery || 
    c.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Client Partner Management</h3>
          <p className="text-xs text-slate-400">Add, edit, feature, or remove client logos and corporate case summaries.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Client</span>
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">{editingClient.id ? 'Edit Client Partner' : 'Add New Client Partner'}</h4>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Company Name *</label>
              <input
                type="text"
                required
                value={editingClient.companyName || ''}
                onChange={(e) => setEditingClient(prev => ({ ...prev, companyName: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Industry Sector</label>
              <input
                type="text"
                value={editingClient.industry || ''}
                onChange={(e) => setEditingClient(prev => ({ ...prev, industry: e.target.value }))}
                placeholder="e.g. Law Firms, SaaS, Finance"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Country / HQ</label>
              <input
                type="text"
                value={editingClient.country || ''}
                onChange={(e) => setEditingClient(prev => ({ ...prev, country: e.target.value }))}
                placeholder="e.g. United States, United Kingdom"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Company Logo URL</label>
              <input
                type="text"
                value={editingClient.logoUrl || ''}
                onChange={(e) => setEditingClient(prev => ({ ...prev, logoUrl: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="text-xs space-y-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Website URL</label>
              <input
                type="text"
                value={editingClient.website || ''}
                onChange={(e) => setEditingClient(prev => ({ ...prev, website: e.target.value }))}
                placeholder="https://clientcompany.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Case Summary Description</label>
              <textarea
                rows={3}
                value={editingClient.description || ''}
                onChange={(e) => setEditingClient(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief summary of solutions provided..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="featuredToggle"
                checked={editingClient.featured !== false}
                onChange={(e) => setEditingClient(prev => ({ ...prev, featured: e.target.checked }))}
                className="w-4 h-4 rounded text-cyan-500 bg-slate-950 border-slate-800"
              />
              <label htmlFor="featuredToggle" className="text-xs font-semibold text-slate-300">Featured (Highlight on homepage)</label>
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
              Save Client Partner
            </button>
          </div>
        </form>
      )}

      {/* List */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="relative w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
          </div>

          <span className="text-xs text-slate-400">{filtered.length} total clients</span>
        </div>

        <div className="divide-y divide-slate-800">
          {filtered.map((client) => (
            <div key={client.id} className="p-4 flex items-center justify-between space-x-4 hover:bg-slate-950/40 transition-colors">
              <div className="flex items-center space-x-3">
                <img
                  src={client.logoUrl}
                  alt={client.companyName}
                  className="w-10 h-10 rounded-xl object-cover border border-slate-700 p-0.5"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm text-white">{client.companyName}</span>
                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      {client.industry}
                    </span>
                    {client.featured && (
                      <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">{client.country} • {client.website}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateClient({ ...client, featured: !client.featured })}
                  className={`p-1.5 rounded-lg text-xs font-semibold ${client.featured ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-800 text-slate-500'}`}
                  title={client.featured ? "Unfeature" : "Feature"}
                >
                  <Star className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => handleOpenEdit(client)}
                  className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700"
                  title="Edit"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => deleteClient(client.id)}
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

    </div>
  );
};
