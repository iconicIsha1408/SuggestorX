
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-b from-background to-muted/30">
      <motion.div 
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-muted">
          <Search className="w-8 h-8 text-muted-foreground" />
        </div>
        <h1 className="mb-4 text-6xl font-bold tracking-tighter">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Oops! We couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button 
            variant="outline" 
            className="gap-2"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
          <Button 
            className="gap-2"
            onClick={() => navigate("/")}
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
