
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import PricingPlans from './pages/PricingPlans';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contactus';
import CareersPage from './pages/Career';
import Blogmore from './pages/Blogmore';
import Price from './pages/Price';
import { RegistrationForm } from './auth/Register';
import { Demo } from './auth/Demo';
import Page from './admin/dashboard/page';

import { PublicLayout } from './components/layout/PublicLayout';
import { AdminLayout } from './components/layout/AdminLayout';
import VisitorEntry from './pages/admin/VisitorEntry';
import { LiveCaptureWithLocation } from './pages/admin/LiveCaptureWithLocation';
import VisitorHistory from './pages/admin/VisitorHistory';
export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Route */}
        <Route 
          path="/admin/dashboard" 
          element={
            <AdminLayout>
              <Page />
            </AdminLayout>
          } 
        />
         <Route 
          path="/admin/visitor-entry" 
          element={
            <AdminLayout>
              <VisitorEntry />
            </AdminLayout>
          } 
        />
        <Route 
          path="/admin/visitor-history" 
          element={
            <AdminLayout>
              <VisitorHistory />
            </AdminLayout>
          } 
        />

        {/* Public Routes */}
        <Route 
          path="/" 
          element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <PublicLayout>
              <PricingPlans />
            </PublicLayout>
          } 
        />
        <Route 
          path="/blog" 
          element={
            <PublicLayout>
              <BlogPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PublicLayout>
              <ContactPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/careers" 
          element={
            <PublicLayout>
              <CareersPage />
            </PublicLayout>
          } 
        />
        <Route 
          path="/blog/:id" 
          element={
            <PublicLayout>
              <Blogmore />
            </PublicLayout>
          } 
        />
        <Route 
          path="/price" 
          element={
            <PublicLayout>
              <Price />
            </PublicLayout>
          } 
        />
        <Route 
          path="/free-trial" 
          element={
            <PublicLayout>
              <RegistrationForm />
            </PublicLayout>
          } 
        />
          <Route 
          path="/request-demo" 
          element={
            <PublicLayout>
              <Demo />
            </PublicLayout>
          } 
        />

<Route 
          path="/livecapture" 
          element={
            <PublicLayout>
              <LiveCaptureWithLocation />
            </PublicLayout>
          } 
        />

        {/* 404 */}
        <Route 
          path="*" 
          element={
            <PublicLayout>
              <h1>404 - Page Not Found</h1>
            </PublicLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
