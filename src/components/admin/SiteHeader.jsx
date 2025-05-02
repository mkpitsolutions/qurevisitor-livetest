import React from "react";
import { Separator } from "@components/components/ui/separator";
import { SidebarTrigger } from "@components/components/ui/sidebar";
import { NavUser } from "./NavUser";

const user = {
  name: "AMAN PURI",
  email: "aman@example.com",
  avatar: "/avatars/shadcn.jpg",
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center justify-between border-b transition-[width,height] ease-linear px-4 lg:px-6">
      {/* Left side */}
      <div className="flex items-center gap-1 lg:gap-2">
        <SidebarTrigger className="-ml-1 hover:bg-accent hover:text-accent-foreground p-1.5 rounded-md transition-colors" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium tracking-tight">ADMIN PANEL</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <NavUser 
          user={user} 
          className="hover:bg-accent hover:text-accent-foreground transition-colors rounded-full"
        />
      </div>
    </header>
  );
}