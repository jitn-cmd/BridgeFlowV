import React from 'react';
import { useApp } from '../context/AppContext';
import { AdminLayout } from './admin/AdminLayout';
import { AdminDashboard } from './admin/AdminDashboard';
import { AdminMessagesManager } from './admin/AdminMessagesManager';
import { AdminTeamManager } from './admin/AdminTeamManager';
import { AdminClientManager } from './admin/AdminClientManager';
import { AdminSolutionsManager } from './admin/AdminSolutionsManager';
import { AdminBlogManager } from './admin/AdminBlogManager';
import { AdminTestimonialsManager } from './admin/AdminTestimonialsManager';
import { AdminSettings } from './admin/AdminSettings';

export const AdminPage: React.FC = () => {
  const { adminActiveTab } = useApp();

  const renderActiveTab = () => {
    switch (adminActiveTab) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'messages':
        return <AdminMessagesManager />;
      case 'team':
        return <AdminTeamManager />;
      case 'clients':
        return <AdminClientManager />;
      case 'solutions':
        return <AdminSolutionsManager />;
      case 'blog':
        return <AdminBlogManager />;
      case 'testimonials':
        return <AdminTestimonialsManager />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <AdminLayout>
      {renderActiveTab()}
    </AdminLayout>
  );
};
