
import { UserData } from "./types";

export const userData: UserData = {
  id: "user123",
  name: "Isha Gupta",
  age: 23,
  email: "isha.gupta@example.com",
  location: "Mumbai, India",
  interests: [
    { name: "Sports", level: "High", score: 92 },
    { name: "Travel", level: "Medium", score: 78 },
    { name: "Gadgets", level: "Medium", score: 65 }
  ],
  profileCompleteness: 85,
  sentimentScore: 8.5,
  socialActivityLevel: "High",
  recommendations: [
    {
      id: "rec1",
      title: "Nike ZoomX Running Shoes",
      description: "Lightweight running shoes with responsive cushioning for your daily training sessions.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 95,
      relevanceScore: 9.2,
      basedOn: "running history",
      date: "2023-09-15T10:00:00Z"
    },
    {
      id: "rec2",
      title: "Bali Adventure Package",
      description: "7-day adventure tour in Bali including hiking, rafting, and cultural experiences.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      matchPercentage: 87,
      relevanceScore: 8.5,
      basedOn: "travel interests",
      date: "2023-09-12T14:30:00Z"
    },
    {
      id: "rec3",
      title: "Samsung Galaxy Watch 6",
      description: "Advanced fitness tracking with sleep analysis and smart features for tech enthusiasts.",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80",
      matchPercentage: 92,
      relevanceScore: 8.8,
      basedOn: "fitness tracking history",
      date: "2023-09-14T09:15:00Z"
    },
    {
      id: "rec4",
      title: "Tennis Coaching Program",
      description: "8-week professional coaching to improve your tennis skills with personalized feedback.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 89,
      relevanceScore: 8.6,
      basedOn: "sports preferences",
      date: "2023-09-10T16:45:00Z"
    },
    {
      id: "rec5",
      title: "Tokyo City Explorer Pass",
      description: "All-access pass to Tokyo's top attractions, perfect for tech-loving travelers.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1636&q=80",
      matchPercentage: 85,
      relevanceScore: 8.3,
      basedOn: "travel history",
      date: "2023-09-08T11:20:00Z"
    },
    {
      id: "rec6",
      title: "Sony WH-1000XM5 Headphones",
      description: "Premium noise-canceling headphones with exceptional sound quality for music lovers.",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 94,
      relevanceScore: 9.0,
      basedOn: "music preferences",
      date: "2023-09-13T13:10:00Z"
    }
  ],
  extraRecommendations: [
    {
      id: "rec7",
      title: "Yoga Retreat in Rishikesh",
      description: "7-day yoga and meditation retreat in the spiritual capital of India.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 82,
      relevanceScore: 7.9,
      basedOn: "wellness interests",
      date: "2023-09-05T08:30:00Z"
    },
    {
      id: "rec8",
      title: "Scottish Highlands Tour",
      description: "Explore the breathtaking landscapes and historic castles of the Scottish Highlands.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 79,
      relevanceScore: 7.6,
      basedOn: "adventure preferences",
      date: "2023-09-03T15:45:00Z"
    },
    {
      id: "rec9",
      title: "DJI Mini 3 Pro Drone",
      description: "Compact drone with exceptional camera quality for travel photography enthusiasts.",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 88,
      relevanceScore: 8.4,
      basedOn: "photography interests",
      date: "2023-09-11T10:20:00Z"
    },
    {
      id: "rec10",
      title: "Swimming Performance Analysis",
      description: "Professional swimming technique analysis with video feedback and improvement tips.",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      matchPercentage: 81,
      relevanceScore: 7.8,
      basedOn: "swimming activity",
      date: "2023-09-07T14:00:00Z"
    },
    {
      id: "rec11",
      title: "Santorini Beach Getaway",
      description: "Luxury 5-day stay in Santorini with private beach access and water activities.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      matchPercentage: 90,
      relevanceScore: 8.7,
      basedOn: "beach preferences",
      date: "2023-09-09T09:30:00Z"
    },
    {
      id: "rec12",
      title: "Apple AirPods Pro 2",
      description: "Premium wireless earbuds with active noise cancellation and spatial audio.",
      category: "Gadgets",
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80",
      matchPercentage: 93,
      relevanceScore: 8.9,
      basedOn: "audio preferences",
      date: "2023-09-13T11:40:00Z"
    }
  ],
  activities: [
    {
      type: "view",
      date: "2023-09-15T15:30:00Z",
      description: "Viewed Nike ZoomX Running Shoes"
    },
    {
      type: "save",
      date: "2023-09-15T15:32:00Z",
      description: "Saved Bali Adventure Package to favorites"
    },
    {
      type: "purchase",
      date: "2023-09-14T10:15:00Z",
      description: "Purchased Sony WH-1000XM5 Headphones"
    },
    {
      type: "view",
      date: "2023-09-14T09:45:00Z",
      description: "Viewed Tennis Coaching Program"
    },
    {
      type: "view",
      date: "2023-09-13T14:20:00Z",
      description: "Viewed Tokyo City Explorer Pass"
    },
    {
      type: "save",
      date: "2023-09-13T14:22:00Z",
      description: "Saved Scottish Highlands Tour to favorites"
    },
    {
      type: "view",
      date: "2023-09-12T11:05:00Z",
      description: "Viewed DJI Mini 3 Pro Drone"
    },
    {
      type: "purchase",
      date: "2023-09-11T16:30:00Z",
      description: "Purchased Swimming Performance Analysis"
    }
  ]
};
