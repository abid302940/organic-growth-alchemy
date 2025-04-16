
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FacebookIcon, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold text-brand-600 mb-4 inline-block">
              <span className="text-brand-500">Organic</span>Growth<span className="text-brand-600">Alchemy</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              We specialize in providing real, organic growth for your social media accounts. Boost your presence with authentic engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-brand-500">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-facebook">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-tiktok">
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/youtube" className="text-gray-600 hover:text-brand-500">YouTube Growth</Link>
              </li>
              <li>
                <Link to="/instagram" className="text-gray-600 hover:text-brand-500">Instagram Growth</Link>
              </li>
              <li>
                <Link to="/facebook" className="text-gray-600 hover:text-brand-500">Facebook Growth</Link>
              </li>
              <li>
                <Link to="/tiktok" className="text-gray-600 hover:text-brand-500">TikTok Growth</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-brand-500">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-brand-500">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-brand-500">Contact</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-brand-500">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-brand-500">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Get In Touch</h3>
            <div className="flex items-center mb-3">
              <Mail className="h-5 w-5 text-brand-500 mr-2" />
              <a href="mailto:support@organicgrowthalchemy.com" className="text-gray-600 hover:text-brand-500">
                support@organicgrowthalchemy.com
              </a>
            </div>
            <div className="flex items-center mb-3">
              <Phone className="h-5 w-5 text-brand-500 mr-2" />
              <a href="tel:+1234567890" className="text-gray-600 hover:text-brand-500">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-brand-500 mr-2" />
              <span className="text-gray-600">San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} OrganicGrowthAlchemy. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-600 hover:text-brand-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 hover:text-brand-500">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-brand-500">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
