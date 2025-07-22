import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const subsidiaries = [
    { name: "OraBuild", path: "/orabuild", description: "Construction & Real Estate" },
    { name: "OraImports", path: "/oraimports", description: "Appliance Imports" },
    { name: "OraTech", path: "/oratech", description: "Technology Solutions" },
    { name: "OraSupply", path: "/orasupply", description: "General Supplies" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-card-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">O</span>
            </div>
            <span className="text-2xl font-bold text-foreground">OraGroup</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              About
            </Link>

            {/* Subsidiaries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors">
                <span>Subsidiaries</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-white border border-border shadow-corporate">
                {subsidiaries.map((subsidiary) => (
                  <DropdownMenuItem key={subsidiary.path} asChild>
                    <Link
                      to={subsidiary.path}
                      className="flex flex-col items-start p-3 hover:bg-secondary transition-colors"
                    >
                      <span className="font-semibold text-foreground">{subsidiary.name}</span>
                      <span className="text-sm text-muted-foreground">{subsidiary.description}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/careers"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/careers") ? "text-primary" : "text-foreground"
              }`}
            >
              Careers
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>

            <Button variant="default" className="bg-gradient-primary shadow-button hover:shadow-corporate transition-all">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="px-2 py-1">
                <span className="font-medium text-foreground block mb-2">Subsidiaries</span>
                <div className="ml-4 space-y-2">
                  {subsidiaries.map((subsidiary) => (
                    <Link
                      key={subsidiary.path}
                      to={subsidiary.path}
                      className="block text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subsidiary.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/careers"
                className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="font-medium text-foreground hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="px-2 py-1">
                <Button variant="default" className="bg-gradient-primary shadow-button w-full">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;