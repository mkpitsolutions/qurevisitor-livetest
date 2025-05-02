import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChartIcon,
  FileTextIcon,
  LayoutDashboardIcon,
  UsersIcon,
  UserCircleIcon,
  LockIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@components/components/ui/sidebar";

const data = {
  navMain: [
    { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboardIcon },
    { title: "New Visitor Entry", url: "/admin/visitor-entry", icon: UserCircleIcon },
    { title: "Visitor History", url: "/admin/visitor-history", icon: UsersIcon },
    { title: "Visitor History Report", url: "/visitor-history-report", icon: BarChartIcon },
    { title: "Change Password", url: "/change-password", icon: LockIcon },
  ],
  navSettings: [
    { title: "Organization / Company", url: "/organization", icon: UsersIcon },
    { title: "Department", url: "/department", icon: FileTextIcon },
    { title: "Employee", url: "/employee", icon: UserCircleIcon },
  ],
};

function NavItem({ item }) {
  const location = useLocation();
  const isActive = location.pathname === item.url;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        className={`group flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all duration-200
          ${isActive 
            ? "bg-primary/10 text-primary font-medium border-l-4 border-primary" 
            : "hover:bg-accent/50 hover:text-primary"
          }`}
      >
        <Link to={item.url} className="flex items-center gap-3 w-full">
          <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
          <span className="text-sm">{item.title}</span>
          {isActive && (
            <span className="ml-auto h-2 w-2 rounded-full bg-primary"></span>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function AppSidebar(props) {
  return (
    <Sidebar collapsible="offcanvas" {...props} className="border-r">
      {/* Sidebar Header with Logo */}
      <SidebarHeader className="px-4 py-5 border-b">
        <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-teal-600">
            Qure<span className="text-gray-800">Visitor</span>
          </h1>
        </Link>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent className="px-2 py-4">
        <SidebarMenu className="space-y-1">
          {data.navMain.map((item) => (
            <NavItem key={item.url} item={item} />
          ))}
        </SidebarMenu>

        {/* Settings Section */}
        <div className="mt-8">
          <div className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Settings
          </div>
          <SidebarMenu className="space-y-1">
            {data.navSettings.map((item) => (
              <NavItem key={item.url} item={item} />
            ))}
          </SidebarMenu>
        </div>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} QureVisitor
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}