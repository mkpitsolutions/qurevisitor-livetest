// components/layout/PublicLayout.jsx
import React from 'react';
import { NavigationMenuDemo } from '../layout/Header';
import { Footer } from '../layout/Footer';

export function PublicLayout({ children }) {
  return (
    <>
      <NavigationMenuDemo />
      {children}
      <Footer />
    </>
  );
}
