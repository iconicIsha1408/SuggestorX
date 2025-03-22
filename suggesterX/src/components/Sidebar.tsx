
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Compass,
  Settings,
  Sliders,
  Menu,
  X,
  LogOut
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const isMobile = useIsMobile();

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "-100%", opacity: 0 },
  };

  const toggleSidebar = () => setOpen(!open);

  const navItems = [
    { name: "Dashboard", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Discover", path: "/discover", icon: <Compass className="w-5 h-5" /> },
    { name: "Profile", path: "/profile", icon: <User className="w-5 h-5" /> },
    { name: "Preferences", path: "/preferences", icon: <Sliders className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      )}

      {/* Sidebar backdrop for mobile */}
      {isMobile && open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar content */}
      <AnimatePresence>
        {(open || !isMobile) && (
          <motion.aside
            className={cn(
              "fixed left-0 top-0 z-40 h-screen w-64 border-r",
              "bg-background frosted-glass",
              isMobile ? "z-50" : ""
            )}
            initial={isMobile ? "closed" : "open"}
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col h-full">
              {/* Logo and header */}
              <div className="flex items-center justify-between px-6 py-6">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-primary text-primary-foreground">
                    <div className="absolute inset-0 opacity-80 mix-blend-overlay">
                      <svg
                        className="absolute inset-0 w-full h-full"
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 400 400"
                      >
                        <g clipPath="url(#clip0_338_1520)">
                          <path
                            fill="currentColor"
                            d="M301.229 103.063L212.922 191.522a15.439 15.439 0 01-21.868 0l-88.308-88.459a15.504 15.504 0 010-21.911l10.022-10.04a15.439 15.439 0 0121.868 0l67.363 67.479 67.363-67.479a15.439 15.439 0 0121.868 0l10.022 10.04a15.504 15.504 0 010 21.911h-.023zM301.229 319.795L212.922 231.47a15.439 15.439 0 00-21.868 0l-88.308 88.325a15.504 15.504 0 000 21.909l10.022 10.041a15.439 15.439 0 0021.868 0l67.363-67.346 67.363 67.346a15.439 15.439 0 0021.868 0l10.022-10.041a15.504 15.504 0 000-21.909h-.023z"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_338_1520">
                            <path fill="#fff" d="M0 0H400V400H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-xl font-semibold">HyperPal</h1>
                </div>
              </div>

              {/* User info */}
              <div className="px-6 py-4 mb-6">
                <div className="flex items-center p-4 space-x-4 rounded-lg bg-secondary/50">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Isha Gupta" />
                    <AvatarFallback>IG</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Isha Gupta</p>
                    <p className="text-xs text-muted-foreground">Premium Member</p>
                  </div>
                </div>
              </div>
              
              {/* Nav links */}
              <nav className="flex-1 px-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => cn(
                      "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                      "hover:bg-accent/50 group animate-hover",
                      isActive
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                    onClick={isMobile ? () => setOpen(false) : undefined}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 mt-auto">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={() => window.location.href = '/login'}
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </Button>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
