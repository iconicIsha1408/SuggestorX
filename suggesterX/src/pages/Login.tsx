
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ChevronRight, AtSign, Lock } from "lucide-react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [view, setView] = useState<"login" | "signup">("login");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
      toast.success(view === "login" ? "Successfully signed in!" : "Account created successfully!");
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-b from-background to-primary/5">
      <motion.div
        className="relative w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Design elements/decorations */}
        <div className="absolute -top-16 -right-16 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-primary text-primary-foreground">
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
          </div>
          <h1 className="text-3xl font-bold tracking-tight">HyperPal</h1>
          <p className="mt-2 text-muted-foreground">Your personal AI recommendation engine</p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="glass-card p-8 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              {view === "login" ? "Welcome back" : "Create account"}
            </h2>
            <div className="flex items-center space-x-2">
              <Button
                variant={view === "login" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("login")}
                className="px-3 text-xs"
              >
                Sign In
              </Button>
              <Button
                variant={view === "signup" ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setView("signup")}
                className="px-3 text-xs"
              >
                Sign Up
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {view === "signup" && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  type="text" 
                  defaultValue="Isha Gupta"
                  className="h-11"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <AtSign className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="isha.gupta@example.com"
                  className="h-11 pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                {view === "login" && (
                  <Button variant="link" className="h-auto p-0 text-xs">
                    Forgot password?
                  </Button>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  defaultValue="password123"
                  className="h-11 pl-10" 
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-11 mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
              ) : (
                <>
                  {view === "login" ? "Sign In" : "Create Account"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </>
              )}
            </Button>
          </form>

          {view === "login" && (
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Demo account is pre-filled. Just click Sign In to continue.
              </p>
            </div>
          )}
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="mt-4 text-xs text-center text-muted-foreground"
        >
          By continuing, you agree to our Terms of Service and Privacy Policy
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
