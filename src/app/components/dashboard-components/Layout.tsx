"use client"

import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  Users,
  FileText,
  Send,
  CreditCard,
  BarChart3,
  Settings,
  Star,
  Plus,
  ChevronRight,
  ChevronLeft,
  LayoutDashboard,
  Folder,
  LogOut,
  User,
  Shield,
  UserCheck,
} from "lucide-react";
import { useRole } from "@/hooks/use-role";
import { UserRole } from "@/lib/roles";

// Sidebar Component
const PurposifySidebar = ({ isCollapsed, toggleSidebar }) => {
  const { permissions, userRole } = useRole();

  const getMenuItems = () => {
    return [
      {
        id: 1,
        name: "Dashboard",
        icon: <LayoutDashboard className="w-5 h-5" />,
        href: "/",
      },
      {
        id: 2,
        name: "Team Members",
        icon: <Users className="w-5 h-5" />,
        href: "/team",
      },
      {
        id: 3,
        name: "My Content",
        icon: <Folder className="w-5 h-5" />,
        href: "/content",
      },
      {
        id: 4,
        name: "Publishing",
        icon: <Send className="w-5 h-5" />,
        href: "/publishing",
      },
      {
        id: 5,
        name: "Billing",
        icon: <CreditCard className="w-5 h-5" />,
        href: "/billing",
      },
      {
        id: 6,
        name: "Reports",
        icon: <BarChart3 className="w-5 h-5" />,
        href: "/reports",
      },
      {
        id: 7,
        name: "Settings",
        icon: <Settings className="w-5 h-5" />,
        href: "/settings",
      },
    ];
  };

  const menuItems = getMenuItems();

  return (
    <div
      className={`h-screen bg-[#faf9f8] border-r border-[#e5e5e5] flex flex-col py-6 fixed left-0 top-0 transition-all duration-300 ${
        isCollapsed ? "w-[80px]" : "w-[260px]"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex items-center px-6 mb-8 ${
          isCollapsed ? "justify-center" : ""
        }`}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
          P
        </div>
        {!isCollapsed && (
          <span className="text-xl font-semibold text-[#1a1a1a] ml-2 whitespace-nowrap">
            urposify
          </span>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3">
        {menuItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            asChild
            className={`w-full justify-start mb-1 rounded-lg hover:bg-[#f0f0f0] transition-colors duration-200 ${
              isCollapsed ? "px-3 justify-center" : "px-4 justify-start"
            }`}
            size="lg"
          >
            <a href={item.href}>
              <div className="flex items-center">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                {!isCollapsed && (
                  <span className="text-sm font-medium text-[#4a4a4a] ml-3 whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </div>
            </a>
          </Button>
        ))}
      </nav>

      {/* Upgrade Card - Only show for non-admin users */}
      {userRole !== UserRole.ADMIN && (
        !isCollapsed ? (
          <Card className="mx-3 my-4 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] border-0">
            <CardContent className="p-5 text-white">
              <div className="w-8 h-8 mb-3">
                <Star className="w-8 h-8" />
              </div>
              <div className="text-base font-semibold mb-2">
                {userRole === UserRole.MODERATOR ? "Admin Access" : "Upgrade Now"}
              </div>
              <div className="text-[13px] leading-[1.4] opacity-90 mb-4">
                {userRole === UserRole.MODERATOR
                  ? "Get full administrative access to manage users and system settings."
                  : "Unlock premium features, unlimited storage, and priority support."
                }
              </div>
              <Button
                className="w-full bg-white text-[#7c3aed] hover:bg-white/90 hover:text-[#7c3aed] font-semibold"
                size="sm"
              >
                {userRole === UserRole.MODERATOR ? "Request Admin" : "View Plans"}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="mx-3 my-4 bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] border-0">
            <CardContent className="p-4 text-white flex items-center justify-center">
              <Star className="w-6 h-6" />
            </CardContent>
          </Card>
        )
      )}
    </div>
  );
};

// Header Component with integrated collapse button
const Header = ({ isSidebarCollapsed, toggleSidebar }) => {
  const { data: session } = useSession();
  const { roleDisplayName, userRole } = useRole();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/auth/signin" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e5e5e5]/60 px-8 py-4">
      <div className="max-w-full pr-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Collapse Button - Half on header, half on sidebar area */}
            <div className="relative">
              <div
                className={`absolute -left-[2.5vw] top-[-0.5vw] -translate-y-1/2 z-50 transition-all duration-300 ${
                  isSidebarCollapsed ? "translate-x-[-5px]" : "translate-x-0"
                }`}
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full border-[#e5e5e5] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white hover:shadow-xl"
                  onClick={toggleSidebar}
                >
                  {isSidebarCollapsed ? (
                    <ChevronRight className="h-4 w-4" />
                  ) : (
                    <ChevronLeft className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                Welcome back, {session?.user?.name || "User"} 👋
              </h1>
              <p className="text-sm text-[#737373]">
                Here's what's happening with your content today
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              className="bg-gradient-to-br from-[#7c3aed] to-[#a78bfa] text-white hover:from-[#7c3aed]/90 hover:to-[#a78bfa]/90 font-semibold gap-2 shadow-[0_4px_12px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_16px_rgba(124,58,237,0.4)] transition-all py-2.5 px-5"
              size="default"
            >
              <Plus className="h-4 w-4" />
              Add New Client
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={session?.user?.image || ""} alt={session?.user?.name || ""} />
                    <AvatarFallback>
                      {session?.user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {session?.user?.name}
                    </p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {session?.user?.email}
                    </p>
                    <p className="text-xs leading-none text-blue-600 font-medium">
                      {roleDisplayName}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </a>
                </DropdownMenuItem>
                {userRole === UserRole.ADMIN && (
                  <DropdownMenuItem asChild>
                    <a href="/admin">
                      <Shield className="mr-2 h-4 w-4" />
                      <span>Admin Panel</span>
                    </a>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

// Layout Component that wraps children
const Layout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="font-sans antialiased min-h-screen">
      <PurposifySidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content Area */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          isSidebarCollapsed ? "ml-[80px]" : "ml-[260px]"
        }`}
      >
        <Header
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />
        {/* This is where the page content will go */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
