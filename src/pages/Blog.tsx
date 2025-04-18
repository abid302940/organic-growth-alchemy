import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookText, Youtube, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";  // Use react-icons for TikTok icon instead

const Blog = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <article className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4 text-brand-500 border-brand-200 bg-brand-50">
              Growth Strategies
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Want more followers, likes, and views—without risking your account with fake bots?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              In this guide, you'll learn the exact strategies top creators use to grow their social media—organically and sustainably.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <BookText className="w-5 h-5" />
                <span>10 min read</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-brand-500">95%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">users unfollow brands with fake engagement</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-brand-500">2X</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">higher engagement on organic posts vs paid ads</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-brand-500">3X</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">higher conversion rates with real followers</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-4xl mx-auto">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Organic Growth Beats Fake Followers</h2>
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">The Hidden Dangers of Fake Followers</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600">
                  <li>Algorithm penalties (Instagram & YouTube shadowban accounts with fake engagement)</li>
                  <li>Low engagement rates (10K followers but 10 likes? Red flag!)</li>
                  <li>Brand credibility loss (Users distrust accounts with obvious bot activity)</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Platform-Specific Growth Strategies</h2>
              
              {/* YouTube Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Youtube className="w-6 h-6 text-youtube" />
                  <h3 className="text-xl font-semibold">YouTube Growth</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold">Strategy 1: Optimize Your Video SEO</h4>
                    <ul className="list-disc pl-6">
                      <li>Use keyword-rich titles (e.g., "How to __ in 2024")</li>
                      <li>Write detailed descriptions with timestamps</li>
                      <li>Add custom thumbnails (high contrast + bold text)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Instagram Section */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Instagram className="w-6 h-6 text-instagram" />
                  <h3 className="text-xl font-semibold">Instagram Growth</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold">Strategy 1: Master the Algorithm</h4>
                    <ul className="list-disc pl-6">
                      <li>Post Reels consistently (3-5x/week)</li>
                      <li>Use trending sounds & hashtags (but avoid spam)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TikTok Section */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <FaTiktok className="w-6 h-6 text-tiktok" />
                  <h3 className="text-xl font-semibold">TikTok Growth</h3>
                </div>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h4 className="font-semibold">Strategy 1: Ride Trends Early</h4>
                    <ul className="list-disc pl-6">
                      <li>Check TikTok's Discover page daily</li>
                      <li>Put a unique spin on trending sounds/challenges</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <div className="bg-brand-50 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Growing?</h2>
                <p className="text-gray-600 mb-6">
                  Growing your social media organically takes time—but it's worth it. Focus on quality content, 
                  smart engagement, and strategic collaborations.
                </p>
                <Button className="w-full md:w-auto bg-brand-500 hover:bg-brand-600">
                  Get Started Today
                </Button>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
