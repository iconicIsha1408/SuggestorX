
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <motion.main 
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 ease-in-out",
          sidebarOpen && !isMobile ? "ml-64" : "ml-0"
        )}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container py-8 mx-auto max-w-7xl">
          <Outlet />
        </div>
      </motion.main>
    </div>
  );
};

export default Layout;
