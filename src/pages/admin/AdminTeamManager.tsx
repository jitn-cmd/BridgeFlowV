import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TeamMember, DepartmentType } from '../../types';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  ArrowUp, 
  ArrowDown, 
  Check, 
  X, 
  ToggleLeft, 
  ToggleRight, 
  Search,
  UserCheck
} from 'lucide-react';

export const AdminTeamManager: React.FC = () => {
  const { 
    teamMembers, 
    addTeamMember, 
    updateTeamMember, 
    deleteTeamMember, 
    moveTeamMember 
  } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [editingMember, setEditingMember] = useState<Partial<TeamMember>>({
    name: '',
    designation: '',
    department: 'Legal',
    shortDescription: '',
    skills: [],
    email: '',
    phone: '',
    linkedIn: '',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    active: true,
    order: teamMembers.length + 1
  });

  const [skillsInput, setSkillsInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenAdd = () => {
    setEditingMember({
      name: '',
      designation: '',
      department: 'Legal',
      shortDescription: '',
      skills: ['Outsourcing', 'Strategic Advisory'],
      email: '',
      phone: '',
      linkedIn: '',
      photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      active: true,
      order: teamMembers.length + 1
    });
    setSkillsInput('Outsourcing, Strategic Advisory');
    setIsEditing(true);
  };

  const handleOpenEdit = (member: TeamMember) => {
    setEditingMember(member);
    setSkillsInput(member.skills.join(', '));
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingMember.name || !editingMember.designation) return;

    const skillsArray = skillsInput.split(',').map(s => s.trim()).filter(Boolean);

    if (editingMember.id) {
      updateTeamMember({
        ...(editingMember as TeamMember),
        skills: skillsArray
      });
    } else {
      addTeamMember({
        name: editingMember.name || '',
        designation: editingMember.designation || '',
        department: (editingMember.department as DepartmentType) || 'Legal',
        shortDescription: editingMember.shortDescription || '',
        skills: skillsArray,
        email: editingMember.email || '',
        phone: editingMember.phone || '',
        linkedIn: editingMember.linkedIn || '',
        photoUrl: editingMember.photoUrl || '',
        active: editingMember.active !== undefined ? editingMember.active : true,
        order: editingMember.order || teamMembers.length + 1
      });
    }

    setIsEditing(false);
  };

  const filtered = teamMembers.filter(m => 
    !searchQuery || 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    m.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Team Member Management</h3>
          <p className="text-xs text-slate-400">Add, edit, de-activate, or re-order public leadership and principal profiles.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Member</span>
        </button>
      </div>

      {/* Edit / Add Modal */}
      {isEditing && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">{editingMember.id ? 'Edit Team Member' : 'Add New Team Member'}</h4>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={editingMember.name || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Designation / Title *</label>
              <input
                type="text"
                required
                value={editingMember.designation || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, designation: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Department</label>
              <select
                value={editingMember.department || 'Legal'}
                onChange={(e) => setEditingMember(prev => ({ ...prev, department: e.target.value as DepartmentType }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Executive">Executive</option>
                <option value="Legal">Legal</option>
                <option value="Accounting & Finance">Accounting & Finance</option>
                <option value="Virtual Assistant">Virtual Assistant</option>
                <option value="Marketing">Marketing</option>
                <option value="Web & Software">Web & Software</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Design">Design</option>
                <option value="Business Support">Business Support</option>
                <option value="Operations">Operations</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Photo Image URL</label>
              <input
                type="text"
                value={editingMember.photoUrl || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, photoUrl: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={editingMember.email || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
              <input
                type="text"
                value={editingMember.phone || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="text-xs space-y-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">LinkedIn Profile URL</label>
              <input
                type="text"
                value={editingMember.linkedIn || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, linkedIn: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Skills (Comma-separated)</label>
              <input
                type="text"
                value={skillsInput}
                onChange={(e) => setSkillsInput(e.target.value)}
                placeholder="e.g. Legal Outsourcing, Contract Law, Trial Prep"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Short Bio Description</label>
              <textarea
                rows={3}
                value={editingMember.shortDescription || ''}
                onChange={(e) => setEditingMember(prev => ({ ...prev, shortDescription: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                id="activeToggle"
                checked={editingMember.active !== false}
                onChange={(e) => setEditingMember(prev => ({ ...prev, active: e.target.checked }))}
                className="w-4 h-4 rounded text-cyan-500 bg-slate-950 border-slate-800"
              />
              <label htmlFor="activeToggle" className="text-xs font-semibold text-slate-300">Active (Visible on public website)</label>
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
              Save Team Member
            </button>
          </div>
        </form>
      )}

      {/* Members List Table */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="relative w-64">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search team..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
          </div>

          <span className="text-xs text-slate-400">{filtered.length} total members</span>
        </div>

        <div className="divide-y divide-slate-800">
          {filtered.map((member, idx) => (
            <div key={member.id} className="p-4 flex items-center justify-between space-x-4 hover:bg-slate-950/40 transition-colors">
              <div className="flex items-center space-x-3">
                <img
                  src={member.photoUrl}
                  alt={member.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm text-white">{member.name}</span>
                    <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                      {member.department}
                    </span>
                    {!member.active && (
                      <span className="text-[10px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                        Inactive
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">{member.designation}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {/* Reorder Up/Down */}
                <button
                  disabled={idx === 0}
                  onClick={() => moveTeamMember(member.id, 'up')}
                  className="p-1.5 rounded-lg bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white"
                  title="Move Up"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                </button>

                <button
                  disabled={idx === filtered.length - 1}
                  onClick={() => moveTeamMember(member.id, 'down')}
                  className="p-1.5 rounded-lg bg-slate-800 disabled:opacity-30 text-slate-300 hover:text-white"
                  title="Move Down"
                >
                  <ArrowDown className="w-3.5 h-3.5" />
                </button>

                {/* Edit */}
                <button
                  onClick={() => handleOpenEdit(member)}
                  className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700"
                  title="Edit"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                </button>

                {/* Toggle Active */}
                <button
                  onClick={() => updateTeamMember({ ...member, active: !member.active })}
                  className={`p-1.5 rounded-lg text-xs font-semibold ${member.active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-slate-800 text-slate-500'}`}
                  title={member.active ? "Deactivate" : "Activate"}
                >
                  {member.active ? 'Active' : 'Hidden'}
                </button>

                {/* Delete */}
                <button
                  onClick={() => deleteTeamMember(member.id)}
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
