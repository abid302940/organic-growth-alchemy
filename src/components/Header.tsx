
import { Button } from "@/components/ui/button";
import { FacebookIcon, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-600">
            <span className="text-brand-500">Organic</span>Growth<span className="text-brand-600">Alchemy</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-brand-500 font-medium">
            Home
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-brand-500 font-medium flex items-center">
              Services 
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
              <div className="py-1">
                <Link to="/youtube" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-500">
                  <Youtube className="mr-2 h-4 w-4 text-youtube" />
                  YouTube
                </Link>
                <Link to="/instagram" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-500">
                  <Instagram className="mr-2 h-4 w-4 text-instagram" />
                  Instagram
                </Link>
                <Link to="/facebook" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-500">
                  <FacebookIcon className="mr-2 h-4 w-4 text-facebook" />
                  Facebook
                </Link>
                <Link to="/tiktok" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-500">
                  <FaTiktok className="mr-2 h-4 w-4 text-tiktok" />
                  TikTok
                </Link>
              </div>
            </div>
          </div>
          <Link to="/about" className="text-gray-700 hover:text-brand-500 font-medium">
            About Us
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-brand-500 font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-brand-500 font-medium">
            Contact
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex text-gray-700 hover:text-brand-500 items-center">
            Log In
          </Button>
          <Button className="bg-brand-500 hover:bg-brand-600 text-white">
            Get Started
          </Button>
          
          <button className="md:hidden text-gray-700 hover:text-brand-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
