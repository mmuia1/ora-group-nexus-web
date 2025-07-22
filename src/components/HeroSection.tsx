import { ArrowRight, Building2, Cpu, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const subsidiaries = [
    {
      name: "OraBuild",
      icon: Building2,
      description: "Construction & Real Estate",
      color: "from-blue-500 to-blue-600",
      path: "/orabuild",
    },
    {
      name: "OraImports",
      icon: Package,
      description: "Appliance Imports",
      color: "from-green-500 to-green-600",
      path: "/oraimports",
    },
    {
      name: "OraTech",
      icon: Cpu,
      description: "Technology Solutions",
      color: "from-purple-500 to-purple-600",
      path: "/oratech",
    },
    {
      name: "OraSupply",
      icon: Truck,
      description: "General Supplies",
      color: "from-orange-500 to-orange-600",
      path: "/orasupply",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Driving Excellence Across
            <span className="block text-corporate-blue-light">Multiple Industries</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            OraGroup is a diversified group of companies in Kenya, driving excellence across construction, technology, appliance importation, and general supplies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-button text-lg px-8 py-3"
            >
              Explore Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Subsidiaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {subsidiaries.map((subsidiary) => (
            <Link
              key={subsidiary.name}
              to={subsidiary.path}
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-card-soft hover:shadow-corporate transition-all duration-300 transform group-hover:-translate-y-2">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${subsidiary.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <subsidiary.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {subsidiary.name}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {subsidiary.description}
                </p>
                <div className="mt-4 flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;