import { Package, Truck, Shield, Star, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OraImports = () => {
  const products = [
    {
      category: "Kitchen Appliances",
      items: ["Refrigerators", "Washing Machines", "Dishwashers", "Microwave Ovens"],
      brands: ["Samsung", "LG", "Whirlpool", "Bosch"]
    },
    {
      category: "Home Electronics",
      items: ["Smart TVs", "Sound Systems", "Air Conditioners", "Home Theaters"],
      brands: ["Sony", "Samsung", "LG", "Panasonic"]
    },
    {
      category: "Small Appliances",
      items: ["Blenders", "Coffee Makers", "Toasters", "Food Processors"],
      brands: ["Philips", "Braun", "KitchenAid", "Cuisinart"]
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "All products undergo rigorous quality checks before importation"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Efficient supply chain ensuring quick delivery across Kenya"
    },
    {
      icon: Star,
      title: "Premium Brands",
      description: "Partnered with world's leading appliance manufacturers"
    },
    {
      icon: Package,
      title: "Warranty Support",
      description: "Comprehensive warranty and after-sales service support"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Package className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OraImports</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Premium appliance importation and distribution, bringing world-class home and kitchen appliances to Kenya with unmatched quality and service.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button">
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We import and distribute high-quality appliances from trusted international brands.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-8 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{product.category}</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Products:</h4>
                  <ul className="space-y-2">
                    {product.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Brands:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.brands.map((brand, brandIndex) => (
                      <span
                        key={brandIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose OraImports?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for premium appliances with comprehensive support and service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Import & Distribution Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From sourcing to delivery, we handle every aspect of appliance importation and distribution across Kenya.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Quality Sourcing</h3>
                    <p className="text-muted-foreground">Direct partnerships with leading manufacturers worldwide.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Logistics Management</h3>
                    <p className="text-muted-foreground">Efficient shipping, clearing, and distribution network.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Customer Support</h3>
                    <p className="text-muted-foreground">Dedicated after-sales service and technical support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Request a Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Product Category"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Preferred Brand"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <textarea
                  placeholder="Additional Requirements"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button type="submit" className="w-full bg-gradient-primary shadow-button">
                  Get Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OraImports;