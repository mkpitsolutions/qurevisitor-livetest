// components/layout/AdminLayout.jsx
import React from 'react';
import { SidebarInset, SidebarProvider } from '@components/components/ui/sidebar';
import { AppSidebar } from '@components/admin/appSidebar';
import { SiteHeader } from '@components/admin/SiteHeader';

export function AdminLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
