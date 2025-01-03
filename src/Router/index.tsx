import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from "@components/AppLayout";
import Admin from '@/Pages/Admin';
import User from '@/Pages/User';
import NotFound from "@components/NotFound";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/edit/:productId" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/view/:productId" element={<User />} />
          
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default AppRouter;
