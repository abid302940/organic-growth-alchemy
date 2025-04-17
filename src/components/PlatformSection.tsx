import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Platform {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  stats: string;
  features: string[];
  link: string;
}

interface PlatformSectionProps {
  platforms: Platform[];
  id?: string;
}

export const PlatformSection = ({ platforms, id }: PlatformSectionProps) => {
  return (
    <section 
      id={id || "services-section"} 
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-brand-500 border-brand-200 bg-brand-50 px-4 py-1 rounded-full">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Grow Your Audience Across All Platforms
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide authentic engagement services for all major social media platforms, helping you build a genuine online presence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, index) => (
            <motion.div 
              key={platform.id}
              className={`rounded-xl shadow-sm border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`p-6 border-b border-gray-100`}>
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${platform.color}`}>
                    {platform.icon}
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-gray-900">{platform.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{platform.description}</p>
                <p className="text-sm text-gray-500">{platform.stats}</p>
              </div>
              
              <div className="px-6 py-4">
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" asChild>
                  <Link to={platform.link}>View {platform.name} Services</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
