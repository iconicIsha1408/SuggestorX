
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  TrendingUp, 
  Calendar, 
  Heart, 
  Star, 
  ArrowRight, 
  Footprints, 
  Map, 
  Smartphone,
  Activity
} from "lucide-react";
import { userData } from "@/lib/mock-data";
import { formatDistanceToNow } from "date-fns";
import { RecommendationCard } from "@/components/RecommendationCard";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-[80vh]">
        <div className="w-12 h-12 border-4 rounded-full animate-spin border-primary border-t-transparent"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="flex items-start justify-between">
        <div>
          <Badge className="mb-2" variant="secondary">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date().toLocaleDateString("en-US", { 
              weekday: 'long', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Welcome back, Isha!
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's what we've personalized for you today
          </p>
        </div>
        
        <div className="p-3 text-center bg-secondary rounded-xl">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-1 text-primary bg-primary/10 rounded-lg">
            <Award className="w-5 h-5" />
          </div>
          <p className="text-xs font-medium">Sentiment</p>
          <p className="text-lg font-semibold">8.5/10</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="overflow-hidden border-none shadow-subtle bg-gradient-to-br from-primary/10 to-transparent">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-medium">
                  <Footprints className="inline-block w-4 h-4 mr-1" />
                  Sports
                </CardTitle>
                <Badge variant="outline" className="px-1 py-0 text-xs">
                  High Affinity
                </Badge>
              </div>
              <CardDescription>
                Your top interest
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Activity Level</p>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                    <span className="font-medium">Very Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Progress value={92} className="h-1" />
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-none shadow-subtle bg-gradient-to-br from-accent/10 to-transparent">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-medium">
                  <Map className="inline-block w-4 h-4 mr-1" />
                  Travel
                </CardTitle>
                <Badge variant="outline" className="px-1 py-0 text-xs">
                  Medium Affinity
                </Badge>
              </div>
              <CardDescription>
                Your passion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Recent Activity</p>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                    <span className="font-medium">Increasing</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/20">
                  <Star className="w-5 h-5 text-accent" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Progress value={78} className="h-1" />
            </CardFooter>
          </Card>

          <Card className="overflow-hidden border-none shadow-subtle bg-gradient-to-br from-purple-500/10 to-transparent">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-medium">
                  <Smartphone className="inline-block w-4 h-4 mr-1" />
                  Gadgets
                </CardTitle>
                <Badge variant="outline" className="px-1 py-0 text-xs">
                  Medium Affinity
                </Badge>
              </div>
              <CardDescription>
                Tech enthusiast
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Purchase Intent</p>
                  <div className="flex items-center">
                    <Activity className="w-4 h-4 mr-1 text-blue-500" />
                    <span className="font-medium">Researching</span>
                  </div>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/20">
                  <Smartphone className="w-5 h-5 text-purple-500" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Progress value={65} className="h-1" />
            </CardFooter>
          </Card>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight">
              AI Recommendations
            </h2>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
              <TabsTrigger value="travel">Travel</TabsTrigger>
              <TabsTrigger value="gadgets">Gadgets</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {userData.recommendations.map((rec, index) => (
                <RecommendationCard
                  key={index}
                  recommendation={rec}
                  className={cn(
                    "animate-in",
                    { "delay-150": index === 1, "delay-300": index === 2 }
                  )}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sports" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {userData.recommendations
                .filter(rec => rec.category === "Sports")
                .map((rec, index) => (
                  <RecommendationCard
                    key={index}
                    recommendation={rec}
                    className="animate-in"
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="travel" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {userData.recommendations
                .filter(rec => rec.category === "Travel")
                .map((rec, index) => (
                  <RecommendationCard
                    key={index}
                    recommendation={rec}
                    className="animate-in"
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="gadgets" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {userData.recommendations
                .filter(rec => rec.category === "Gadgets")
                .map((rec, index) => (
                  <RecommendationCard
                    key={index}
                    recommendation={rec}
                    className="animate-in"
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="border-none shadow-subtle">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest interactions with recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userData.activities.slice(0, 4).map((activity, i) => (
                <div 
                  key={i} 
                  className="flex items-start p-3 transition-colors border rounded-lg hover:bg-muted/30"
                >
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-md bg-muted">
                    {activity.type === "view" && <Heart className="w-5 h-5 text-red-500" />}
                    {activity.type === "purchase" && <Star className="w-5 h-5 text-yellow-500" />}
                    {activity.type === "save" && <Footprints className="w-5 h-5 text-green-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(activity.date), { addSuffix: true })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="ghost" className="w-full" size="sm">
              View All Activity
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
