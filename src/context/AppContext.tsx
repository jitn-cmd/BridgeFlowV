import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, doc, setDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import { 
  PageType, 
  AdminTab, 
  TeamMember, 
  ClientItem, 
  SolutionCategory, 
  BlogPost, 
  TestimonialItem, 
  ContactMessage, 
  WebsiteSettings,
  ToastNotification 
} from '../types';
import { 
  initialSettings, 
  initialSolutions, 
  initialTeamMembers, 
  initialClients, 
  initialTestimonials, 
  initialBlogs, 
  initialContactMessages 
} from '../data/initialData';

interface AppContextType {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  
  // Modals & Quizzes
  isSolutionQuizOpen: boolean;
  setIsSolutionQuizOpen: (open: boolean) => void;
  isContactModalOpen: boolean;
  setIsContactModalOpen: (open: boolean) => void;
  contactModalDepartment: string;
  openContactModalWithDept: (dept?: string) => void;
  selectedBlogPost: BlogPost | null;
  setSelectedBlogPost: (post: BlogPost | null) => void;
  
  // Admin & Data
  adminAuthenticated: boolean;
  setAdminAuthenticated: (auth: boolean) => void;
  adminActiveTab: AdminTab;
  setAdminActiveTab: (tab: AdminTab) => void;
  
  settings: WebsiteSettings;
  updateSettings: (newSettings: WebsiteSettings) => void;
  
  solutions: SolutionCategory[];
  addSolution: (sol: Omit<SolutionCategory, 'id'>) => void;
  updateSolution: (sol: SolutionCategory) => void;
  deleteSolution: (id: string) => void;
  
  teamMembers: TeamMember[];
  addTeamMember: (member: Omit<TeamMember, 'id'>) => void;
  updateTeamMember: (member: TeamMember) => void;
  deleteTeamMember: (id: string) => void;
  moveTeamMember: (id: string, direction: 'up' | 'down') => void;
  
  clients: ClientItem[];
  addClient: (client: Omit<ClientItem, 'id'>) => void;
  updateClient: (client: ClientItem) => void;
  deleteClient: (id: string) => void;
  
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id'>) => void;
  updateBlog: (blog: BlogPost) => void;
  deleteBlog: (id: string) => void;
  
  testimonials: TestimonialItem[];
  addTestimonial: (test: Omit<TestimonialItem, 'id'>) => void;
  updateTestimonial: (test: TestimonialItem) => void;
  deleteTestimonial: (id: string) => void;
  
  messages: ContactMessage[];
  addMessage: (msg: Omit<ContactMessage, 'id' | 'submittedAt' | 'status'>) => void;
  updateMessageStatus: (id: string, status: ContactMessage['status'], notes?: string) => void;
  deleteMessage: (id: string) => void;
  
  toasts: ToastNotification[];
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  resetAllData: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'bridgeflowv_app_state_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPageState] = useState<PageType>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Theme state
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('bridgeflowv_theme');
    return (saved as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('bridgeflowv_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Modals state
  const [isSolutionQuizOpen, setIsSolutionQuizOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactModalDepartment, setContactModalDepartment] = useState('General');
  const [selectedBlogPost, setSelectedBlogPost] = useState<BlogPost | null>(null);

  const openContactModalWithDept = (dept: string = 'General') => {
    setContactModalDepartment(dept);
    setIsContactModalOpen(true);
  };

  // Admin authentication state
  const [adminAuthenticated, setAdminAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('bridgeflowv_admin_auth') === 'true';
  });

  const [adminActiveTab, setAdminActiveTab] = useState<AdminTab>('dashboard');

  useEffect(() => {
    localStorage.setItem('bridgeflowv_admin_auth', adminAuthenticated ? 'true' : 'false');
  }, [adminAuthenticated]);

  // Data persistence state
  const [settings, setSettings] = useState<WebsiteSettings>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_settings');
    return saved ? JSON.parse(saved) : initialSettings;
  });

  const [solutions, setSolutions] = useState<SolutionCategory[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_solutions');
    if (saved) {
      try {
        const parsed: SolutionCategory[] = JSON.parse(saved);
        // Ensure initialSolutions updates (like practiceTags and new subServices) are merged in
        return initialSolutions.map(initSol => {
          const matched = parsed.find(p => p.id === initSol.id);
          if (matched) {
            return {
              ...matched,
              shortDescription: initSol.shortDescription,
              fullDescription: initSol.fullDescription,
              subServices: (matched.subServices && matched.subServices.length >= initSol.subServices.length) 
                ? matched.subServices 
                : initSol.subServices,
              practiceTags: initSol.practiceTags || matched.practiceTags || []
            };
          }
          return initSol;
        });
      } catch (e) {
        return initialSolutions;
      }
    }
    return initialSolutions;
  });

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_team');
    return saved ? JSON.parse(saved) : initialTeamMembers;
  });

  const [clients, setClients] = useState<ClientItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_clients');
    return saved ? JSON.parse(saved) : initialClients;
  });

  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_blogs');
    return saved ? JSON.parse(saved) : initialBlogs;
  });

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_testimonials');
    return saved ? JSON.parse(saved) : initialTestimonials;
  });

  const [messages, setMessages] = useState<ContactMessage[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY + '_messages');
    return saved ? JSON.parse(saved) : initialContactMessages;
  });

  // Sync with Firestore in real-time
  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, 'solutions'), (snapshot) => {
        if (!snapshot.empty) {
          const list: SolutionCategory[] = [];
          snapshot.forEach((docSnap) => {
            list.push(docSnap.data() as SolutionCategory);
          });
          list.sort((a, b) => a.order - b.order);
          setSolutions(list);
        }
      }, (err) => console.log('Firestore solutions error:', err));
      return () => unsub();
    } catch (e) {
      console.log('Firestore listener setup error:', e);
    }
  }, []);

  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, 'messages'), (snapshot) => {
        if (!snapshot.empty) {
          const list: ContactMessage[] = [];
          snapshot.forEach((docSnap) => {
            list.push(docSnap.data() as ContactMessage);
          });
          // Sort newest first
          list.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
          setMessages(list);
        }
      }, (err) => console.log('Firestore messages error:', err));
      return () => unsub();
    } catch (e) {
      console.log('Firestore listener setup error:', e);
    }
  }, []);

  useEffect(() => {
    try {
      const unsub = onSnapshot(doc(db, 'settings', 'website'), (docSnap) => {
        if (docSnap.exists()) {
          setSettings(docSnap.data() as WebsiteSettings);
        }
      }, (err) => console.log('Firestore settings error:', err));
      return () => unsub();
    } catch (e) {
      console.log('Firestore listener setup error:', e);
    }
  }, []);

  // Sync with localStorage as fallback
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_solutions', JSON.stringify(solutions));
  }, [solutions]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_team', JSON.stringify(teamMembers));
  }, [teamMembers]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_clients', JSON.stringify(clients));
  }, [clients]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY + '_messages', JSON.stringify(messages));
  }, [messages]);

  // Toast notifications
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  // Helper page navigate with scroll to top
  const setCurrentPage = (page: PageType) => {
    setCurrentPageState(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // CRUD Actions
  const updateSettings = (newSettings: WebsiteSettings) => {
    setSettings(newSettings);
    try { setDoc(doc(db, 'settings', 'website'), newSettings, { merge: true }); } catch (e) {}
    showToast("Website Settings updated successfully!");
  };

  const addSolution = (sol: Omit<SolutionCategory, 'id'>) => {
    const newSol: SolutionCategory = { ...sol, id: 'sol-' + Date.now() };
    setSolutions(prev => [...prev, newSol]);
    try { setDoc(doc(db, 'solutions', newSol.id), newSol); } catch (e) {}
    showToast("New Solution Category created!");
  };

  const updateSolution = (sol: SolutionCategory) => {
    setSolutions(prev => prev.map(s => s.id === sol.id ? sol : s));
    try { setDoc(doc(db, 'solutions', sol.id), sol, { merge: true }); } catch (e) {}
    showToast("Solution updated!");
  };

  const deleteSolution = (id: string) => {
    setSolutions(prev => prev.filter(s => s.id !== id));
    try { deleteDoc(doc(db, 'solutions', id)); } catch (e) {}
    showToast("Solution deleted", "info");
  };

  const addTeamMember = (member: Omit<TeamMember, 'id'>) => {
    const newMember: TeamMember = { ...member, id: 'team-' + Date.now() };
    setTeamMembers(prev => [...prev, newMember]);
    try { setDoc(doc(db, 'team', newMember.id), newMember); } catch (e) {}
    showToast("New team member added!");
  };

  const updateTeamMember = (member: TeamMember) => {
    setTeamMembers(prev => prev.map(m => m.id === member.id ? member : m));
    try { setDoc(doc(db, 'team', member.id), member, { merge: true }); } catch (e) {}
    showToast("Team member profile updated!");
  };

  const deleteTeamMember = (id: string) => {
    setTeamMembers(prev => prev.filter(m => m.id !== id));
    try { deleteDoc(doc(db, 'team', id)); } catch (e) {}
    showToast("Team member removed", "info");
  };

  const moveTeamMember = (id: string, direction: 'up' | 'down') => {
    setTeamMembers(prev => {
      const index = prev.findIndex(m => m.id === id);
      if (index < 0) return prev;
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= prev.length) return prev;
      const list = [...prev];
      const temp = list[index];
      list[index] = list[targetIndex];
      list[targetIndex] = temp;
      const updatedList = list.map((item, idx) => ({ ...item, order: idx + 1 }));
      updatedList.forEach(m => {
        try { setDoc(doc(db, 'team', m.id), m, { merge: true }); } catch (e) {}
      });
      return updatedList;
    });
    showToast("Team member order updated!");
  };

  const addClient = (client: Omit<ClientItem, 'id'>) => {
    const newClient: ClientItem = { ...client, id: 'client-' + Date.now() };
    setClients(prev => [...prev, newClient]);
    try { setDoc(doc(db, 'clients', newClient.id), newClient); } catch (e) {}
    showToast("Client added!");
  };

  const updateClient = (client: ClientItem) => {
    setClients(prev => prev.map(c => c.id === client.id ? client : c));
    try { setDoc(doc(db, 'clients', client.id), client, { merge: true }); } catch (e) {}
    showToast("Client details updated!");
  };

  const deleteClient = (id: string) => {
    setClients(prev => prev.filter(c => c.id !== id));
    try { deleteDoc(doc(db, 'clients', id)); } catch (e) {}
    showToast("Client removed", "info");
  };

  const addBlog = (blog: Omit<BlogPost, 'id'>) => {
    const newBlog: BlogPost = { ...blog, id: 'blog-' + Date.now() };
    setBlogs(prev => [newBlog, ...prev]);
    try { setDoc(doc(db, 'blogs', newBlog.id), newBlog); } catch (e) {}
    showToast("Blog article published!");
  };

  const updateBlog = (blog: BlogPost) => {
    setBlogs(prev => prev.map(b => b.id === blog.id ? blog : b));
    try { setDoc(doc(db, 'blogs', blog.id), blog, { merge: true }); } catch (e) {}
    showToast("Blog article updated!");
  };

  const deleteBlog = (id: string) => {
    setBlogs(prev => prev.filter(b => b.id !== id));
    try { deleteDoc(doc(db, 'blogs', id)); } catch (e) {}
    showToast("Article deleted", "info");
  };

  const addTestimonial = (test: Omit<TestimonialItem, 'id'>) => {
    const newTest: TestimonialItem = { ...test, id: 'test-' + Date.now() };
    setTestimonials(prev => [...prev, newTest]);
    try { setDoc(doc(db, 'testimonials', newTest.id), newTest); } catch (e) {}
    showToast("Testimonial added!");
  };

  const updateTestimonial = (test: TestimonialItem) => {
    setTestimonials(prev => prev.map(t => t.id === test.id ? test : t));
    try { setDoc(doc(db, 'testimonials', test.id), test, { merge: true }); } catch (e) {}
    showToast("Testimonial updated!");
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    try { deleteDoc(doc(db, 'testimonials', id)); } catch (e) {}
    showToast("Testimonial removed", "info");
  };

  const addMessage = (msg: Omit<ContactMessage, 'id' | 'submittedAt' | 'status'>) => {
    const newMsg: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now(),
      submittedAt: new Date().toISOString(),
      status: 'new'
    };
    setMessages(prev => [newMsg, ...prev]);
    try {
      setDoc(doc(db, 'messages', newMsg.id), newMsg);
    } catch (e) {
      console.log('Error writing message to Firestore:', e);
    }
    showToast("Thank you! Your inquiry has been routed to the department team.", "success");
  };

  const updateMessageStatus = (id: string, status: ContactMessage['status'], notes?: string) => {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, status, notes: notes !== undefined ? notes : m.notes } : m));
    try {
      setDoc(doc(db, 'messages', id), { status, ...(notes !== undefined ? { notes } : {}) }, { merge: true });
    } catch (e) {
      console.log('Error updating message status in Firestore:', e);
    }
    showToast(`Lead status updated to ${status.replace('_', ' ')}`);
  };

  const deleteMessage = (id: string) => {
    setMessages(prev => prev.filter(m => m.id !== id));
    try {
      deleteDoc(doc(db, 'messages', id));
    } catch (e) {
      console.log('Error deleting message in Firestore:', e);
    }
    showToast("Inquiry deleted", "info");
  };

  const resetAllData = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_settings');
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_solutions');
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_team');
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_clients');
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_blogs');
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_testimonials');
    localStorage.removeItem(LOCAL_STORAGE_KEY + '_messages');
    
    setSettings(initialSettings);
    setSolutions(initialSolutions);
    setTeamMembers(initialTeamMembers);
    setClients(initialClients);
    setBlogs(initialBlogs);
    setTestimonials(initialTestimonials);
    setMessages(initialContactMessages);
    showToast("All website data restored to initial factory state!", "info");
  };

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        selectedCategory,
        setSelectedCategory,
        theme,
        toggleTheme,
        isSolutionQuizOpen,
        setIsSolutionQuizOpen,
        isContactModalOpen,
        setIsContactModalOpen,
        contactModalDepartment,
        openContactModalWithDept,
        selectedBlogPost,
        setSelectedBlogPost,
        adminAuthenticated,
        setAdminAuthenticated,
        adminActiveTab,
        setAdminActiveTab,
        settings,
        updateSettings,
        solutions,
        addSolution,
        updateSolution,
        deleteSolution,
        teamMembers,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        moveTeamMember,
        clients,
        addClient,
        updateClient,
        deleteClient,
        blogs,
        addBlog,
        updateBlog,
        deleteBlog,
        testimonials,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        messages,
        addMessage,
        updateMessageStatus,
        deleteMessage,
        toasts,
        showToast,
        resetAllData
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
