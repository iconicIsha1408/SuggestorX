
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Sliders, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RecommendationCard } from "@/components/RecommendationCard";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { userData } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
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

  const allItems = [
    ...userData.recommendations,
    ...userData.extraRecommendations,
  ];

  const filteredItems = allItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">Discover</h1>
        <p className="text-muted-foreground">
          Explore personalized recommendations tailored just for you
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-6 md:grid-cols-3">
        <Card className="bg-primary/5 border-none shadow-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              AI-Powered Discovery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Our AI analyzes your preferences to find perfect matches across sports, travel, and tech.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-accent/5 border-none shadow-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <BarChart3 className="w-4 h-4 mr-1" />
              Sentiment Score: 8.5/10
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your current sentiment analysis shows positive engagement with our recommendations.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-purple-500/5 border-none shadow-subtle">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <PieChart className="w-4 h-4 mr-1" />
              Interest Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Sports: 45%, Travel: 30%, Gadgets: 25% - We optimize based on these interests.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search recommendations..."
            className="pl-9 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="md:w-auto w-full gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        <Button variant="outline" className="md:w-auto w-full gap-2">
          <Sliders className="h-4 w-4" />
          Sort
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="smart">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold tracking-tight">
              Personalized For You
            </h2>
            <TabsList>
              <TabsTrigger value="smart">Smart Mix</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="new">New</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="smart" className="mt-0 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Badge className="mr-2" variant="secondary">Sports</Badge>
                  Based on your active lifestyle
                </h3>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems
                  .filter(item => item.category === "Sports")
                  .slice(0, 3)
                  .map((item, index) => (
                    <RecommendationCard
                      key={index}
                      recommendation={item}
                      className="animate-in"
                    />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Badge className="mr-2" variant="secondary">Travel</Badge>
                  Destinations you might love
                </h3>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems
                  .filter(item => item.category === "Travel")
                  .slice(0, 3)
                  .map((item, index) => (
                    <RecommendationCard
                      key={index}
                      recommendation={item}
                      className="animate-in"
                    />
                  ))}
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Badge className="mr-2" variant="secondary">Gadgets</Badge>
                  Tech recommendations
                </h3>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems
                  .filter(item => item.category === "Gadgets")
                  .slice(0, 3)
                  .map((item, index) => (
                    <RecommendationCard
                      key={index}
                      recommendation={item}
                      className="animate-in"
                    />
                  ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems
                .sort((a, b) => b.relevanceScore - a.relevanceScore)
                .slice(0, 6)
                .map((item, index) => (
                  <RecommendationCard
                    key={index}
                    recommendation={item}
                    className="animate-in"
                  />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="mt-0">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                .slice(0, 6)
                .map((item, index) => (
                  <RecommendationCard
                    key={index}
                    recommendation={item}
                    className="animate-in"
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="mt-8 border-none shadow-subtle">
          <CardHeader>
            <CardTitle>Recommendation Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Interest Priority</Label>
                  <span className="text-sm text-muted-foreground">Sports-focused</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-2 text-center text-sm">
                  <div>Sports</div>
                  <div>Travel</div>
                  <div>Gadgets</div>
                </div>
                <Slider defaultValue={[70]} className="mb-4" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label>Discovery Radius</Label>
                  <span className="text-sm text-muted-foreground">Medium</span>
                </div>
                <Slider defaultValue={[50]} className="mb-4" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Discover new categories</Label>
                    <p className="text-sm text-muted-foreground">Explore outside your main interests</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Trending content</Label>
                    <p className="text-sm text-muted-foreground">Include popular items</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Location-based recommendations</Label>
                    <p className="text-sm text-muted-foreground">Items relevant to your location</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Discover;
