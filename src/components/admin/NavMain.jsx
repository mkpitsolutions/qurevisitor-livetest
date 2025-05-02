import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@components/components/ui/sidebar";

export function NavMain({ items }) {
  const location = useLocation();

  return (
    <SidebarGroup className="p-3 w-64">
      <SidebarGroupContent className="flex flex-col gap-1">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = location.pathname === item.url;
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`
                    group relative flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all
                    duration-200
                    ${isActive 
                      ? "bg-gradient-to-r from-primary to-primary-600 text-primary-foreground shadow-lg" 
                      : "hover:bg-accent/50 hover:text-primary"
                    }
                    ${item.completed ? "border-l-4 border-l-green-500" : ""}
                  `}
                >
                  <Link to={item.url} className="flex items-center gap-3 w-full">
                    {item.icon && (
                      <span className="text-xl" role="img" aria-label={item.iconLabel}>
                        {item.icon}
                      </span>
                    )}
                    <span className="text-lg font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.fullTitle || item.title}
                    </span>
                    {item.completed && (
                      <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Completed
                      </span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
        
        {/* Settings Section with divider */}
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="px-4 mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            SETTINGS
          </h3>
          <SidebarMenu>
            {settingsItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={`
                    group relative flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all
                    ${location.pathname === item.url 
                      ? "bg-accent text-primary" 
                      : "hover:bg-accent/50 hover:text-primary"
                    }
                  `}
                >
                  <Link to={item.url} className="flex items-center gap-3 w-full">
                    {item.icon && (
                      <span className="text-xl" role="img" aria-label={item.iconLabel}>
                        {item.icon}
                      </span>
                    )}
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                      {item.fullTitle || item.title}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
 