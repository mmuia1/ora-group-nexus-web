import { Truck, Package2, Building, Users, ArrowRight, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OraSupply = () => {
  const services = [
    {
      title: "Institutional Supply",
      description: "Comprehensive supply solutions for schools, hospitals, and government institutions",
      features: ["Educational supplies", "Medical equipment", "Office furniture", "Cleaning supplies"]
    },
    {
      title: "Industrial Procurement",
      description: "Industrial equipment and materials for manufacturing and construction",
      features: ["Heavy machinery", "Safety equipment", "Raw materials", "Maintenance supplies"]
    },
    {
      title: "Government Contracts",
      description: "Specialized procurement services for government tenders and projects",
      features: ["Tender management", "Compliance assurance", "Bulk ordering", "Timely delivery"]
    },
  ];

  const sectors = [
    {
      icon: Building,
      name: "Government",
      description: "Ministries, counties, and government agencies",
      specialties: ["Office supplies", "Furniture", "Vehicles", "ICT equipment"]
    },
    {
      icon: Users,
      name: "Education",
      description: "Schools, universities, and training institutions",
      specialties: ["Learning materials", "Laboratory equipment", "Sports equipment", "Cafeteria supplies"]
    },
    {
      icon: Package2,
      name: "Healthcare",
      description: "Hospitals, clinics, and medical facilities",
      specialties: ["Medical supplies", "Equipment", "Pharmaceuticals", "Hygiene products"]
    },
    {
      icon: Truck,
      name: "Industrial",
      description: "Manufacturing and industrial companies",
      specialties: ["Machinery", "Safety gear", "Raw materials", "Maintenance tools"]
    },
  ];

  const advantages = [
    "Competitive pricing through bulk procurement",
    "Established supplier network across Kenya",
    "Quality assurance and compliance management",
    "Flexible payment terms and credit facilities",
    "Efficient logistics and delivery network",
    "24/7 customer support and service",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <Package2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OraSupply</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Comprehensive procurement and general supplies solutions for institutions, industries, and government entities across Kenya.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button">
              Request Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Supply Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end procurement solutions tailored to meet the unique needs of various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-card rounded-2xl p-8 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-foreground">
                      <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sectors We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized supply solutions across multiple sectors with industry-specific expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <sector.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{sector.name}</h3>
                <p className="text-muted-foreground mb-4">{sector.description}</p>
                <div className="space-y-1">
                  {sector.specialties.map((specialty, specialtyIndex) => (
                    <div key={specialtyIndex} className="text-sm text-primary">
                      • {specialty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose OraSupply */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose OraSupply?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With extensive experience in procurement and supply chain management, we deliver reliable, cost-effective solutions that meet your exact requirements.
              </p>
              
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                    <span className="text-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Get Supply Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Organization/Company Name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select Sector</option>
                  <option value="government">Government</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="industrial">Industrial</option>
                </select>
                <input
                  type="text"
                  placeholder="Supply Category"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Contact Person"
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
                  placeholder="Detailed Requirements"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
                <Button type="submit" className="w-full bg-gradient-primary shadow-button">
                  Request Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Supply Process
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Streamlined procurement process ensuring transparency, quality, and timely delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Requirement Analysis</h3>
              <p className="text-muted-foreground">Understanding your specific needs and requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sourcing & Pricing</h3>
              <p className="text-muted-foreground">Finding the best suppliers and negotiating competitive prices</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">Rigorous quality checks and compliance verification</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Delivery & Support</h3>
              <p className="text-muted-foreground">Timely delivery and ongoing customer support</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OraSupply;