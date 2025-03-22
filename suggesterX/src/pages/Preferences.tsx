
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Sliders,
  Heart,
  Map,
  Smartphone,
  FlaskConical,
  Check,
  BarChart3,
  Shuffle,
  Layers,
  Share2,
  InfoIcon,
  CheckCircle
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

const Preferences = () => {
  const [hasChanges, setHasChanges] = useState(false);
  
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

  const handleChange = () => {
    setHasChanges(true);
  };

  const handleSave = () => {
    setHasChanges(false);
    toast.success("Preferences saved successfully");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold">Preferences</h1>
        <p className="text-muted-foreground">
          Customize how the AI recommends content for you
        </p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card className="mb-6 border-none shadow-subtle">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>AI Recommendation Status</CardTitle>
              <Badge variant="outline" className="px-2 py-1">
                <span className="flex items-center">
                  <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
                  Active
                </span>
              </Badge>
            </div>
            <CardDescription>
              Your personalized AI recommendation engine is running
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium">AI Model Learning Progress</span>
              <span>78% Complete</span>
            </div>
            <Progress value={78} className="h-2" />
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Data Points</span>
                  <span className="text-sm">342</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Collected from your interactions
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Accuracy</span>
                  <span className="text-sm">91%</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on your feedback
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Last Updated</span>
                  <span className="text-sm">Today</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Model is updated regularly
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Tabs defaultValue="interests">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="interests">Interests</TabsTrigger>
            <TabsTrigger value="discovery">Discovery</TabsTrigger>
            <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="interests" className="mt-6 space-y-6">
            <Card className="border-none shadow-subtle">
              <CardHeader>
                <div className="flex items-center">
                  <Heart className="mr-2 h-5 w-5 text-primary" />
                  <CardTitle>Interest Priorities</CardTitle>
                </div>
                <CardDescription>
                  Adjust how much emphasis each interest category receives
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center">
                        <Sliders className="mr-2 h-4 w-4" />
                        Sports Preferences
                      </Label>
                      <span className="text-sm text-muted-foreground">High (85%)</span>
                    </div>
                    <Slider 
                      defaultValue={[85]} 
                      max={100} 
                      step={1}
                      onValueChange={handleChange}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="cursor-pointer">Running</Badge>
                      <Badge variant="secondary" className="cursor-pointer">Tennis</Badge>
                      <Badge variant="outline" className="cursor-pointer">Basketball</Badge>
                      <Badge variant="outline" className="cursor-pointer">Swimming</Badge>
                      <Badge variant="outline" className="cursor-pointer">Yoga</Badge>
                      <Badge variant="outline" className="cursor-pointer">Cycling</Badge>
                      <Badge variant="outline" className="cursor-pointer">+ Add More</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center">
                        <Map className="mr-2 h-4 w-4" />
                        Travel Preferences
                      </Label>
                      <span className="text-sm text-muted-foreground">Medium (65%)</span>
                    </div>
                    <Slider 
                      defaultValue={[65]} 
                      max={100} 
                      step={1}
                      onValueChange={handleChange}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="cursor-pointer">Beaches</Badge>
                      <Badge variant="secondary" className="cursor-pointer">Adventure</Badge>
                      <Badge variant="outline" className="cursor-pointer">Culture</Badge>
                      <Badge variant="outline" className="cursor-pointer">Mountains</Badge>
                      <Badge variant="outline" className="cursor-pointer">Urban</Badge>
                      <Badge variant="outline" className="cursor-pointer">+ Add More</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center">
                        <Smartphone className="mr-2 h-4 w-4" />
                        Tech & Gadgets Preferences
                      </Label>
                      <span className="text-sm text-muted-foreground">Medium (55%)</span>
                    </div>
                    <Slider 
                      defaultValue={[55]} 
                      max={100} 
                      step={1}
                      onValueChange={handleChange}
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary" className="cursor-pointer">Smartphones</Badge>
                      <Badge variant="secondary" className="cursor-pointer">Wearables</Badge>
                      <Badge variant="outline" className="cursor-pointer">Headphones</Badge>
                      <Badge variant="outline" className="cursor-pointer">Smart Home</Badge>
                      <Badge variant="outline" className="cursor-pointer">Laptops</Badge>
                      <Badge variant="outline" className="cursor-pointer">+ Add More</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 pt-4 border-t">
                  <Label className="mb-2">Additional Interests</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer">Food & Dining</Badge>
                    <Badge variant="outline" className="cursor-pointer">Books</Badge>
                    <Badge variant="outline" className="cursor-pointer">Movies</Badge>
                    <Badge variant="outline" className="cursor-pointer">Music</Badge>
                    <Badge variant="outline" className="cursor-pointer">Fashion</Badge>
                    <Badge variant="outline" className="cursor-pointer">+ Add Custom</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  disabled={!hasChanges}
                  onClick={handleSave}
                >
                  {hasChanges ? "Save Changes" : "No Changes to Save"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="discovery" className="mt-6 space-y-6">
            <Card className="border-none shadow-subtle">
              <CardHeader>
                <div className="flex items-center">
                  <Shuffle className="mr-2 h-5 w-5 text-primary" />
                  <CardTitle>Discovery Settings</CardTitle>
                </div>
                <CardDescription>
                  Control how the AI discovers new content for you
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="flex items-center">
                      <Layers className="mr-2 h-4 w-4" />
                      Discovery Radius
                    </Label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <InfoIcon className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            Higher values will show more varied content that may be outside your core interests
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Focused</span>
                    <span className="text-sm text-muted-foreground">Exploratory</span>
                  </div>
                  <Slider 
                    defaultValue={[65]} 
                    max={100} 
                    step={1}
                    onValueChange={handleChange}
                  />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your discovery setting is currently <span className="font-medium">Balanced</span>
                  </p>
                </div>
                
                <div className="space-y-6 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Serendipity Factor</Label>
                      <p className="text-sm text-muted-foreground">
                        Occasionally show surprising recommendations
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Trending Content</Label>
                      <p className="text-sm text-muted-foreground">
                        Include trending items in your recommendations
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">New Categories</Label>
                      <p className="text-sm text-muted-foreground">
                        Suggest entirely new interest categories
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Content Diversity</Label>
                      <p className="text-sm text-muted-foreground">
                        Vary the types of content shown (articles, products, experiences)
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  disabled={!hasChanges}
                  onClick={handleSave}
                >
                  {hasChanges ? "Save Changes" : "No Changes to Save"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="algorithm" className="mt-6 space-y-6">
            <Card className="border-none shadow-subtle">
              <CardHeader>
                <div className="flex items-center">
                  <FlaskConical className="mr-2 h-5 w-5 text-primary" />
                  <CardTitle>AI Algorithm Controls</CardTitle>
                </div>
                <CardDescription>
                  Fine-tune how the AI generates recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Recency Bias
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              How much the algorithm should favor your recent activity over historical patterns
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Historical</span>
                      <span className="text-sm text-muted-foreground">Recent</span>
                    </div>
                    <Slider 
                      defaultValue={[70]} 
                      max={100} 
                      step={1}
                      onValueChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center">
                        <Share2 className="mr-2 h-4 w-4" />
                        Social Signal Weight
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              How much your recommendations should be influenced by your social connections
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Low</span>
                      <span className="text-sm text-muted-foreground">High</span>
                    </div>
                    <Slider 
                      defaultValue={[40]} 
                      max={100} 
                      step={1}
                      onValueChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Confirmation Preference
                      </Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Balance between showing items similar to what you already like vs. challenging your preferences
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Challenge Me</span>
                      <span className="text-sm text-muted-foreground">Confirm</span>
                    </div>
                    <Slider 
                      defaultValue={[60]} 
                      max={100} 
                      step={1}
                      onValueChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-6 pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Explicit vs. Implicit Signals</Label>
                      <p className="text-sm text-muted-foreground">
                        Favor your explicit ratings over behavioral patterns
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Seasonal Awareness</Label>
                      <p className="text-sm text-muted-foreground">
                        Adjust recommendations based on time of year
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label className="text-base">Contextual Understanding</Label>
                      <p className="text-sm text-muted-foreground">
                        Consider your current situation when making recommendations
                      </p>
                    </div>
                    <Switch defaultChecked onCheckedChange={handleChange} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  disabled={!hasChanges}
                  onClick={handleSave}
                >
                  {hasChanges ? "Save Changes" : "No Changes to Save"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations" className="mt-6 space-y-6">
            <Card className="border-none shadow-subtle">
              <CardHeader>
                <div className="flex items-center">
                  <Share2 className="mr-2 h-5 w-5 text-primary" />
                  <CardTitle>Connected Services</CardTitle>
                </div>
                <CardDescription>
                  Connect external services to enhance your recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="flex-shrink-0 p-2 mr-4 rounded-md bg-blue-100 text-blue-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-medium">Facebook</h4>
                      <p className="text-sm text-muted-foreground">
                        Use your social activity for better recommendations
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="flex-shrink-0 p-2 mr-4 rounded-md bg-purple-100 text-purple-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-medium">Instagram</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyze visual preferences and lifestyle indicators
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="flex-shrink-0 p-2 mr-4 rounded-md bg-blue-50 text-blue-500">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-medium">Twitter</h4>
                      <p className="text-sm text-muted-foreground">
                        Use interests and sentiment from your tweets
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 border rounded-lg">
                    <div className="flex-shrink-0 p-2 mr-4 rounded-md bg-gray-100 text-gray-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 19h4v-2h-4v2zm5.5-8c0 1.653-1.347 3-3 3s-3-1.347-3-3V9c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4S7.5 6.794 7.5 9v2c0 2.757 2.243 5 5 5s5-2.243 5-5h-2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base font-medium">Spotify</h4>
                      <p className="text-sm text-muted-foreground">
                        Use music preferences for lifestyle insights
                      </p>
                    </div>
                    <div className="ml-4">
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Disconnect All</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>

      <motion.div variants={itemVariants} className="flex justify-between">
        <Button variant="outline" className="gap-2">
          <Check className="h-4 w-4" />
          Reset to Defaults
        </Button>
        
        <Button 
          className="gap-2" 
          disabled={!hasChanges}
          onClick={handleSave}
        >
          {hasChanges ? (
            <>
              <Check className="h-4 w-4" />
              Save All Changes
            </>
          ) : (
            "No Changes to Save"
          )}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Preferences;
