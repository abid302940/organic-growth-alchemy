
import { Button } from "@/components/ui/button";
import { FacebookIcon, Instagram, Youtube, Menu } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  const scrollToServices = () => {
    navigate('/#services');
    setTimeout(() => {
      const servicesSection = document.getElementById('services-section');
      servicesSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const scrollToFooter = () => {
    navigate('/');
    setTimeout(() => {
      const footer = document.querySelector('footer');
      footer?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className="w-full py-4 px-6 bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-brand-600">
            <span className="text-brand-500">Creator</span>Pals
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

          <button 
            onClick={scrollToFooter}
            className="text-gray-700 hover:text-brand-500 font-medium"
          >
            About Us
          </button>
          <Link to="/blog" className="text-gray-700 hover:text-brand-500 font-medium">
            Blog
          </Link>
          <button 
            onClick={scrollToFooter}
            className="text-gray-700 hover:text-brand-500 font-medium"
          >
            Contact
          </button>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            className="bg-brand-500 hover:bg-brand-600 text-white"
            onClick={scrollToServices}
          >
            Get Started
          </Button>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-gray-700 hover:text-brand-500">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open mobile menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-6">
                <SheetClose asChild>
                  <Link to="/" className="px-4 py-2 text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md font-medium">
                    Home
                  </Link>
                </SheetClose>
                
                <div className="px-4 py-2">
                  <div className="flex flex-col space-y-2">
                    <h3 className="font-medium mb-1">Services</h3>
                    <SheetClose asChild>
                      <Link to="/youtube" className="flex items-center px-2 py-1.5 text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md">
                        <Youtube className="mr-2 h-4 w-4 text-youtube" />
                        YouTube
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/instagram" className="flex items-center px-2 py-1.5 text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md">
                        <Instagram className="mr-2 h-4 w-4 text-instagram" />
                        Instagram
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/facebook" className="flex items-center px-2 py-1.5 text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md">
                        <FacebookIcon className="mr-2 h-4 w-4 text-facebook" />
                        Facebook
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/tiktok" className="flex items-center px-2 py-1.5 text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md">
                        <FaTiktok className="mr-2 h-4 w-4 text-tiktok" />
                        TikTok
                      </Link>
                    </SheetClose>
                  </div>
                </div>
                
                <SheetClose asChild>
                  <button 
                    onClick={scrollToFooter}
                    className="px-4 py-2 text-left text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md font-medium"
                  >
                    About Us
                  </button>
                </SheetClose>
                
                <SheetClose asChild>
                  <Link to="/blog" className="px-4 py-2 text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md font-medium">
                    Blog
                  </Link>
                </SheetClose>
                
                <SheetClose asChild>
                  <button 
                    onClick={scrollToFooter}
                    className="px-4 py-2 text-left text-gray-700 hover:text-brand-500 hover:bg-gray-100 rounded-md font-medium"
                  >
                    Contact
                  </button>
                </SheetClose>
                
                <SheetClose asChild>
                  <Button 
                    className="bg-brand-500 hover:bg-brand-600 text-white w-full mt-2"
                    onClick={scrollToServices}
                  >
                    Get Started
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
