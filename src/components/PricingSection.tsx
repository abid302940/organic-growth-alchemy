import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  quantity: string;
  isPopular?: boolean;
}

interface PricingProps {
  title: string;
  description: string;
  platform: string;
  serviceType: string;
  tiers: PricingTier[];
  getStartedBaseUrl?: string;
}

export const PricingSection = ({ 
  title, 
  description, 
  platform, 
  serviceType, 
  tiers,
  getStartedBaseUrl = "https://creatorpals.com/product/basic-plan/"
}: PricingProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-white text-brand-500 border-brand-200 px-4 py-1 rounded-full">
            {platform} {serviceType}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={tier.name}
              className={`rounded-xl overflow-hidden border ${tier.isPopular ? "border-brand-200 bg-brand-50/30" : "border-gray-200 bg-white"} relative`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {tier.isPopular && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-brand-500 text-white m-4 px-3 py-1 rounded-full">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-4">{tier.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">${tier.price}</span>
                </div>
                
                <p className="mb-6 font-medium text-brand-600">
                  {tier.quantity}
                </p>
                
                <Button 
                  className={`w-full ${tier.isPopular ? "bg-brand-500 hover:bg-brand-600" : ""}`}
                  variant={tier.isPopular ? "default" : "outline"}
                  asChild
                >
                  <a 
                    href={`${getStartedBaseUrl}?package=${encodeURIComponent(tier.name)}&service=${encodeURIComponent(serviceType)}&platform=${encodeURIComponent(platform)}&quantity=${encodeURIComponent(tier.quantity)}&price=${tier.price}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </a>
                </Button>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                <p className="font-medium text-gray-900 mb-4">Features include:</p>
                <ul className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Looking for custom packages? We've got you covered.</p>
          <Button variant="outline" className="border-brand-500 text-brand-500 hover:bg-brand-50">
            Contact Us for Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};
