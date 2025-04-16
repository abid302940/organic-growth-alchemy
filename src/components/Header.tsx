
import { Button } from "@/components/ui/button";
import { FacebookIcon, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
          
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-brand-500 font-medium flex items-center group">
              Services 
              <ChevronDown 
                className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                aria-hidden="true" 
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/youtube" className="flex items-center">
                  <Youtube className="mr-2 h-4 w-4 text-youtube" />
                  YouTube
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/instagram" className="flex items-center">
                  <Instagram className="mr-2 h-4 w-4 text-instagram" />
                  Instagram
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/facebook" className="flex items-center">
                  <FacebookIcon className="mr-2 h-4 w-4 text-facebook" />
                  Facebook
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/tiktok" className="flex items-center">
                  <FaTiktok className="mr-2 h-4 w-4 text-tiktok" />
                  TikTok
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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
