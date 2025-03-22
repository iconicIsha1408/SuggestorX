
export interface Interest {
  name: string;
  level: "Low" | "Medium" | "High";
  score: number;
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  matchPercentage: number;
  relevanceScore: number;
  basedOn: string;
  date: string;
}

export interface Activity {
  type: "view" | "save" | "purchase";
  date: string;
  description: string;
}

export interface UserData {
  id: string;
  name: string;
  age: number;
  email: string;
  location: string;
  interests: Interest[];
  profileCompleteness: number;
  sentimentScore: number;
  socialActivityLevel: "Low" | "Medium" | "High";
  recommendations: Recommendation[];
  extraRecommendations: Recommendation[];
  activities: Activity[];
}
