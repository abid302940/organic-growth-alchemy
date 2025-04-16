
import { Facebook, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export const platformData = [
  {
    id: "youtube",
    name: "YouTube",
    icon: <Youtube className="h-6 w-6 text-white" />,
    color: "bg-youtube",
    description: "Grow your channel with real subscribers and engagement.",
    stats: "2+ billion monthly active users",
    features: [
      "Organic subscribers growth",
      "Views and watch time increase",
      "Content-relevant audience",
      "Enhanced channel credibility"
    ],
    link: "/youtube"
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: <Instagram className="h-6 w-6 text-white" />,
    color: "bg-instagram",
    description: "Boost your visual presence with authentic followers.",
    stats: "1+ billion monthly active users",
    features: [
      "Real followers growth",
      "Increased post engagement",
      "Stories and Reels views",
      "Improved content reach"
    ],
    link: "/instagram"
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: <Facebook className="h-6 w-6 text-white" />,
    color: "bg-facebook",
    description: "Expand your page reach with genuine likes and followers.",
    stats: "2.8+ billion monthly active users",
    features: [
      "Page likes and followers",
      "Post engagement boost",
      "Higher content visibility",
      "Expanded audience reach"
    ],
    link: "/facebook"
  },
  {
    id: "tiktok",
    name: "TikTok",
    icon: <FaTiktok className="h-5 w-5 text-white" />,
    color: "bg-tiktok",
    description: "Amplify your short-form content with real followers.",
    stats: "1+ billion monthly active users",
    features: [
      "Follower growth",
      "Video views and likes",
      "Increased engagement rate",
      "Improved algorithm ranking"
    ],
    link: "/tiktok"
  }
];
