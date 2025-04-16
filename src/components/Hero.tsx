
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-white"
        style={{ 
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0 100%)" 
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Boost Your Social Media <span className="text-brand-500">Presence</span> with Real <span className="text-brand-600">Organic Growth</span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We deliver authentic engagement across YouTube, Instagram, Facebook, and TikTok to help your brand stand out in a crowded digital world.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-6 text-lg">
                Get Organic Engagement!
              </Button>
              <Button size="lg" variant="outline" className="text-brand-500 border-brand-500 hover:bg-brand-50">
                Learn More
              </Button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/21.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/25.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Customer" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Trusted by <span className="font-semibold text-gray-900">15,000+</span> creators</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <span className="ml-1 text-sm text-gray-500">4.9/5 (2,500+ reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative z-10 lg:mr-16">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Social Media Growth" 
                className="rounded-xl shadow-2xl" 
              />
            </div>
            
            <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center space-x-2">
                <div className="bg-green-500 rounded-full h-3 w-3"></div>
                <span className="text-gray-700 font-medium">Real-time results</span>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full h-3 w-3"></div>
                <span className="text-gray-700 font-medium">100% Organic</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
