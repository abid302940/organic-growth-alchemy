
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { youtubeSubscribersTiers, youtubeViewsTiers, youtubeWatchTimeTiers } from "@/data/pricingData";
import { testimonialsData } from "@/data/testimonialsData";
import { faqData } from "@/data/faqData";

const YouTube = () => {
  // Filter testimonials for YouTube only
  const youtubeTestimonials = testimonialsData.filter(
    (testimonial) => testimonial.platform === "YouTube"
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-youtube/10 text-youtube border-youtube/20 mb-4 px-3 py-1">
                  YouTube Growth Services
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Boost Your YouTube <span className="text-youtube">Presence</span> with Real Engagement
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Accelerate your channel growth with our 100% organic YouTube growth services. Get real subscribers, views, and watch time from genuine users interested in your content.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="#pricing" className="bg-youtube hover:bg-youtube/90">
                      View Pricing
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">100% Real Users</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">No Password Required</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Monetization Safe</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Fast Delivery</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">24/7 Support</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/e0298783-515c-449c-80d8-50ec44ebd093.png" 
                    alt="YouTube Growth" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full shadow-lg p-4">
                  <Youtube className="h-10 w-10 text-youtube" />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center">
                    <div className="mr-4">
                      <div className="text-xs text-gray-500 uppercase">Average Growth</div>
                      <div className="text-2xl font-bold text-gray-900">+287%</div>
                    </div>
                    <div className="h-12 w-0.5 bg-gray-200 mx-2"></div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase">Client Success</div>
                      <div className="text-2xl font-bold text-gray-900">98.5%</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-brand-500 border-brand-200 bg-brand-50 px-4 py-1 rounded-full">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The OrganicGrowthAlchemy Difference
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver real growth that lasts. Our YouTube services help you build a sustainable channel with genuine engagement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-youtube" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">100% Authentic Growth</h3>
                <p className="text-gray-600">
                  We never use bots or fake accounts. All engagement comes from real people who are genuinely interested in your content niche.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-youtube" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Targeted Audience</h3>
                <p className="text-gray-600">
                  We match your content with interested viewers in your niche, ensuring high-quality engagement that boosts your channel's credibility.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-youtube" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Algorithm-Friendly</h3>
                <p className="text-gray-600">
                  Our growth patterns are designed to look natural to YouTube's algorithm, helping your videos get recommended more often.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Pricing Sections */}
        <div id="pricing">
          <PricingSection 
            title="YouTube Subscribers" 
            description="Grow your channel with real subscribers who engage with your content"
            platform="YouTube"
            serviceType="Subscribers"
            tiers={youtubeSubscribersTiers}
          />
          
          <PricingSection 
            title="YouTube Views" 
            description="Increase your video visibility with genuine views from real people"
            platform="YouTube"
            serviceType="Views"
            tiers={youtubeViewsTiers}
          />
          
          <PricingSection 
            title="YouTube Watch Time" 
            description="Boost your watch hours to reach monetization requirements faster"
            platform="YouTube"
            serviceType="Watch Time"
            tiers={youtubeWatchTimeTiers}
          />
        </div>
        
        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 text-brand-500 border-brand-200 bg-brand-50 px-4 py-1 rounded-full">
                Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our simple 3-step process delivers real results with minimal effort on your part.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-100">
                  <span className="text-2xl font-bold text-brand-500">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Choose Your Package</h3>
                <p className="text-gray-600">
                  Select the service and package that best fits your channel's needs and goals.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-100">
                  <span className="text-2xl font-bold text-brand-500">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Provide Channel Details</h3>
                <p className="text-gray-600">
                  Simply share your YouTube channel URL (no password required) and complete your order.
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-brand-100">
                  <span className="text-2xl font-bold text-brand-500">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Watch Your Channel Grow</h3>
                <p className="text-gray-600">
                  We begin delivery within 24-48 hours, and you'll see steady, organic growth over the delivery period.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-youtube hover:bg-youtube/90">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <TestimonialsSection testimonials={youtubeTestimonials.length > 0 ? youtubeTestimonials : testimonialsData.slice(0, 3)} />
        
        {/* FAQ */}
        <FaqSection faqs={faqData} />
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Grow Your YouTube Channel?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of content creators who have boosted their YouTube presence with our organic growth services.
            </p>
            <Button size="lg" className="bg-youtube hover:bg-youtube/90 px-8 py-6 text-lg">
              Get Started Now
            </Button>
            <p className="mt-4 text-gray-500">
              30-day satisfaction guarantee. No password required.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default YouTube;
