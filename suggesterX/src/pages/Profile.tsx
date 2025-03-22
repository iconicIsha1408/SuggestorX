
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  CameraIcon, 
  User, 
  Calendar, 
  MapPin, 
  Smartphone, 
  Heart, 
  Trophy, 
  Shield, 
  Lock, 
  Bell, 
  Download,
  FileText,
  BarChart2,
  Footprints,
  Check,
  Edit,
  ExternalLink
} from "lucide-react";
import { userData } from "@/lib/mock-data";
import { toast } from "sonner";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  
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

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast.success("Profile updated successfully");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="flex flex-col gap-6 md:flex-row">
        <Card className="border-none shadow-subtle w-full md:w-1/3">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 relative">
              <Avatar className="w-24 h-24 mx-auto border-4 border-background">
                <AvatarImage src="https://i.pravatar.cc/150?img=5" alt="Isha Gupta" />
                <AvatarFallback>IG</AvatarFallback>
              </Avatar>
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-0 right-0 rounded-full h-8 w-8"
              >
                <CameraIcon className="h-4 w-4" />
              </Button>
            </div>
            <CardTitle className="text-xl">Isha Gupta</CardTitle>
            <CardDescription>Premium Member • Since 2023</CardDescription>
            
            <div className="flex justify-center gap-2 mt-2">
              <Badge variant="secondary">Sports Enthusiast</Badge>
              <Badge variant="outline">Gen Z</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-muted-foreground">Age</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">8.5</p>
                <p className="text-xs text-muted-foreground">Sentiment</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">42</p>
                <p className="text-xs text-muted-foreground">Interactions</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Saved</p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Isha Gupta</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>23 years old</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Smartphone className="h-4 w-4 text-muted-foreground" />
                <span>isha.gupta@example.com</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline" 
              className="w-full"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Save Profile
                </>
              ) : (
                <>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit Profile
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <div className="flex-1">
          <Tabs defaultValue="interests" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="interests">Interests</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
              <TabsTrigger value="data">My Data</TabsTrigger>
            </TabsList>
            
            <TabsContent value="interests" className="space-y-4 mt-6">
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg">Interest Breakdown</CardTitle>
                  <CardDescription>
                    These preferences influence your personalized recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Footprints className="mr-2 h-4 w-4 text-primary" />
                          <span className="font-medium">Sports</span>
                        </div>
                        <span className="text-sm text-muted-foreground">High Affinity</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">Running</Badge>
                        <Badge variant="outline">Tennis</Badge>
                        <Badge variant="outline">Football</Badge>
                        <Badge variant="outline">Yoga</Badge>
                        <Badge variant="outline">Swimming</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4 text-accent" />
                          <span className="font-medium">Travel</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Medium Affinity</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">Beaches</Badge>
                        <Badge variant="outline">Mountains</Badge>
                        <Badge variant="outline">Adventure</Badge>
                        <Badge variant="outline">Cultural Experiences</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Smartphone className="mr-2 h-4 w-4 text-purple-500" />
                          <span className="font-medium">Gadgets</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Medium Affinity</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline">Smartphones</Badge>
                        <Badge variant="outline">Wearables</Badge>
                        <Badge variant="outline">Audio Devices</Badge>
                        <Badge variant="outline">Smart Home</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg">Profile Completeness</CardTitle>
                  <CardDescription>
                    Complete your profile to get better recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">85% Complete</span>
                        <span className="text-sm text-muted-foreground">3 items left</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Basic information</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Interests</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>Profile picture</span>
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <div className="w-4 h-4 mr-2 border rounded-full border-muted-foreground/50" />
                        <span>Connect social accounts</span>
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <div className="w-4 h-4 mr-2 border rounded-full border-muted-foreground/50" />
                        <span>Complete preference quiz</span>
                      </li>
                      <li className="flex items-center text-sm text-muted-foreground">
                        <div className="w-4 h-4 mr-2 border rounded-full border-muted-foreground/50" />
                        <span>Set communication preferences</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Complete Profile</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-4 mt-6">
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Privacy Settings
                  </CardTitle>
                  <CardDescription>
                    Control how your data is used for personalization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Data Collection</Label>
                        <p className="text-sm text-muted-foreground">Allow collection of interaction data</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Personalized Recommendations</Label>
                        <p className="text-sm text-muted-foreground">Use my data to personalize content</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Social Media Integration</Label>
                        <p className="text-sm text-muted-foreground">Connect and analyze social media profiles</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Third-Party Sharing</Label>
                        <p className="text-sm text-muted-foreground">Share data with trusted partners</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Location Tracking</Label>
                        <p className="text-sm text-muted-foreground">Use location for relevant recommendations</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Lock className="mr-2 h-5 w-5" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage your account security and login preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Switch />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Login Notifications</Label>
                        <p className="text-sm text-muted-foreground">Get alerts for new login attempts</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      Change Password
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Bell className="mr-2 h-5 w-5" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription>
                    Control how and when you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">New Recommendations</Label>
                        <p className="text-sm text-muted-foreground">When new content matches your interests</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Special Offers</Label>
                        <p className="text-sm text-muted-foreground">Deals and promotions based on your interests</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">System Updates</Label>
                        <p className="text-sm text-muted-foreground">Important changes to our service</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-base">Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="data" className="space-y-4 mt-6">
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Data Export
                  </CardTitle>
                  <CardDescription>
                    Download your personal data
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    You can export your personal data in various formats. This includes your profile information, preferences, and interaction history.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="flex items-center justify-center gap-2">
                      <FileText className="h-4 w-4" />
                      Export as JSON
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center gap-2">
                      <FileText className="h-4 w-4" />
                      Export as CSV
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <BarChart2 className="mr-2 h-5 w-5" />
                    Data Insights
                  </CardTitle>
                  <CardDescription>
                    Understand how we use your data to create recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    Our AI recommendation system considers various factors to provide personalized content just for you.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-3 rounded-md bg-background">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Heart className="h-4 w-4 text-primary" />
                          <span className="font-medium text-sm">Interests</span>
                        </div>
                        <span className="text-sm">High Influence</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your explicitly stated interests in sports, travel, and gadgets
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-md bg-background">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span className="font-medium text-sm">Engagement History</span>
                        </div>
                        <span className="text-sm">High Influence</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Items you've viewed, liked, or interacted with
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-md bg-background">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-500" />
                          <span className="font-medium text-sm">Location</span>
                        </div>
                        <span className="text-sm">Medium Influence</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Your current location and places you've shown interest in
                      </p>
                    </div>
                    
                    <div className="p-3 rounded-md bg-background">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-blue-500" />
                          <span className="font-medium text-sm">Similar User Patterns</span>
                        </div>
                        <span className="text-sm">Low Influence</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Anonymized patterns from users with similar interests
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="flex items-center gap-1 mx-auto">
                    Learn more about our AI system
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-none shadow-subtle">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Data Rights
                  </CardTitle>
                  <CardDescription>
                    Manage your personal data rights
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    You have the right to control how your personal data is used and stored.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      Delete My Data
                    </Button>
                    <Button variant="outline" className="w-full">
                      Restrict Processing
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
