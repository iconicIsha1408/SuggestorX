
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Heart, 
  Share2, 
  Bookmark, 
  ThumbsUp, 
  PieChart, 
  Calendar, 
  MapPin, 
  Tag 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Recommendation } from "@/lib/types";

interface RecommendationCardProps {
  recommendation: Recommendation;
  className?: string;
}

export function RecommendationCard({ recommendation, className }: RecommendationCardProps) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
    toast.success(saved ? "Removed from saved items" : "Added to saved items");
  };

  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed like" : "You liked this recommendation");
  };

  const handleShare = () => {
    toast.success("Share link copied to clipboard");
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Sports":
        return <Calendar className="w-4 h-4 mr-1" />;
      case "Travel":
        return <MapPin className="w-4 h-4 mr-1" />;
      case "Gadgets":
        return <Tag className="w-4 h-4 mr-1" />;
      default:
        return <PieChart className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <Card 
      className={cn(
        "overflow-hidden border-none shadow-subtle hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="overflow-hidden aspect-video">
        <img 
          src={recommendation.image} 
          alt={recommendation.title}
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex justify-between">
          <Badge variant="outline" className="mb-2">
            {getCategoryIcon(recommendation.category)}
            {recommendation.category}
          </Badge>
          <Badge 
            variant="secondary" 
            className="px-1.5 py-0 text-xs font-normal"
          >
            {recommendation.matchPercentage}% Match
          </Badge>
        </div>
        <CardTitle className="text-base font-semibold line-clamp-1">
          {recommendation.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {recommendation.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-3">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <div className="flex items-center">
            <ThumbsUp className="w-3 h-3 mr-1" />
            <span>{recommendation.relevanceScore}/10 relevance</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <PieChart className="w-3 h-3 mr-1" />
            <span>Based on your {recommendation.basedOn}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex space-x-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-8 h-8"
                  onClick={handleLike}
                >
                  <Heart className={cn(
                    "w-4 h-4",
                    liked ? "fill-red-500 text-red-500" : ""
                  )} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{liked ? "Unlike" : "Like"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-8 h-8"
                  onClick={handleSave}
                >
                  <Bookmark className={cn(
                    "w-4 h-4",
                    saved ? "fill-primary text-primary" : ""
                  )} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{saved ? "Unsave" : "Save"}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="w-8 h-8"
                  onClick={handleShare}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Share</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <Button size="sm" className="h-8 text-xs">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
