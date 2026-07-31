import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { SolutionCategory, DepartmentType } from '../../types';
import { Plus, Trash2, Edit3, X, Search, Layers, Mail } from 'lucide-react';

export const AdminSolutionsManager: React.FC = () => {
  const { solutions, addSolution, updateSolution, deleteSolution } = useApp();

  const [isEditing, setIsEditing] = useState(false);
  const [editingSolution, setEditingSolution] = useState<Partial<SolutionCategory>>({
    title: '',
    department: 'Legal',
    slug: 'custom-solution',
    iconName: 'Scale',
    shortDescription: '',
    fullDescription: '',
    subServices: [],
    keyBenefits: [],
    typicalTimeline: '3 to 5 business days',
    contactEmail: 'contact@bridgeflowv.com',
    featured: true,
    order: solutions.length + 1
  });

  const [benefitsInput, setBenefitsInput] = useState('');
  const [subServicesInput, setSubServicesInput] = useState('');

  const handleOpenAdd = () => {
    setEditingSolution({
      title: '',
      department: 'Legal',
      slug: 'new-solution',
      iconName: 'Scale',
      shortDescription: '',
      fullDescription: '',
      subServices: [
        { title: "Standard Workflow", description: "Automated end-to-end management." }
      ],
      keyBenefits: ["Cost reduction", "24/7 turnaround"],
      typicalTimeline: '3 to 5 business days',
      contactEmail: 'contact@bridgeflowv.com',
      featured: true,
      order: solutions.length + 1
    });
    setBenefitsInput("Cost reduction, 24/7 turnaround");
    setIsEditing(true);
  };

  const handleOpenEdit = (sol: SolutionCategory) => {
    setEditingSolution(sol);
    setBenefitsInput(sol.keyBenefits.join(', '));
    setIsEditing(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSolution.title) return;

    const benefitsArray = benefitsInput.split(',').map(b => b.trim()).filter(Boolean);

    if (editingSolution.id) {
      updateSolution({
        ...(editingSolution as SolutionCategory),
        keyBenefits: benefitsArray
      });
    } else {
      addSolution({
        title: editingSolution.title || '',
        department: (editingSolution.department as DepartmentType) || 'Legal',
        slug: editingSolution.slug || 'solution',
        iconName: editingSolution.iconName || 'Briefcase',
        shortDescription: editingSolution.shortDescription || '',
        fullDescription: editingSolution.fullDescription || '',
        subServices: editingSolution.subServices || [],
        keyBenefits: benefitsArray,
        typicalTimeline: editingSolution.typicalTimeline || '3 to 5 days',
        contactEmail: editingSolution.contactEmail || 'contact@bridgeflowv.com',
        featured: editingSolution.featured !== undefined ? editingSolution.featured : true,
        order: editingSolution.order || solutions.length + 1
      });
    }

    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Solution Practice Manager</h3>
          <p className="text-xs text-slate-400">Configure public solution practice categories, sub-services, and assigned department email routing.</p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md"
        >
          <Plus className="w-4 h-4" />
          <span>Add Practice Category</span>
        </button>
      </div>

      {isEditing && (
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900 border border-slate-700 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h4 className="font-bold text-sm text-white">{editingSolution.id ? 'Edit Solution Practice' : 'Add Solution Practice'}</h4>
            <button type="button" onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Practice Title *</label>
              <input
                type="text"
                required
                value={editingSolution.title || ''}
                onChange={(e) => setEditingSolution(prev => ({ ...prev, title: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Department</label>
              <select
                value={editingSolution.department || 'Legal'}
                onChange={(e) => setEditingSolution(prev => ({ ...prev, department: e.target.value as DepartmentType }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Legal">Legal</option>
                <option value="Accounting & Finance">Accounting & Finance</option>
                <option value="Virtual Assistant">Virtual Assistant</option>
                <option value="Marketing">Marketing</option>
                <option value="Web & Software">Web & Software</option>
                <option value="AI Solutions">AI Solutions</option>
                <option value="Design">Design</option>
                <option value="Business Support">Business Support</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Target Contact Email Routing</label>
              <input
                type="email"
                value={editingSolution.contactEmail || ''}
                onChange={(e) => setEditingSolution(prev => ({ ...prev, contactEmail: e.target.value }))}
                placeholder="e.g. legal@bridgeflowv.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Deployment Timeline</label>
              <input
                type="text"
                value={editingSolution.typicalTimeline || ''}
                onChange={(e) => setEditingSolution(prev => ({ ...prev, typicalTimeline: e.target.value }))}
                placeholder="e.g. 2 to 4 business days"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="text-xs space-y-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Short Summary</label>
              <input
                type="text"
                value={editingSolution.shortDescription || ''}
                onChange={(e) => setEditingSolution(prev => ({ ...prev, shortDescription: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Practice Description</label>
              <textarea
                rows={3}
                value={editingSolution.fullDescription || ''}
                onChange={(e) => setEditingSolution(prev => ({ ...prev, fullDescription: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Key Benefits (Comma-separated)</label>
              <input
                type="text"
                value={benefitsInput}
                onChange={(e) => setBenefitsInput(e.target.value)}
                placeholder="e.g. 60% Cost reduction, ISO security"
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
              Save Practice Category
            </button>
          </div>
        </form>
      )}

      {/* List */}
      <div className="rounded-2xl bg-slate-900 border border-slate-800 divide-y divide-slate-800 overflow-hidden">
        {solutions.map((sol) => (
          <div key={sol.id} className="p-4 flex items-center justify-between space-x-4 hover:bg-slate-950/40 transition-colors">
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-sm text-white">{sol.title}</span>
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                  {sol.department}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{sol.shortDescription}</p>
              <span className="text-[11px] text-cyan-400 mt-1 block font-semibold flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>Routes to: {sol.contactEmail}</span>
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleOpenEdit(sol)}
                className="p-1.5 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700"
                title="Edit"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => deleteSolution(sol.id)}
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
