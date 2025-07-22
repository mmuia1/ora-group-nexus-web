import { Building2, Hammer, MapPin, Users, CheckCircle, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OraBuild = () => {
  const services = [
    {
      title: "Real Estate Development",
      description: "Comprehensive property development from planning to completion",
      features: ["Residential complexes", "Commercial buildings", "Mixed-use developments", "Land acquisition"]
    },
    {
      title: "Civil Engineering",
      description: "Expert engineering solutions for infrastructure projects",
      features: ["Road construction", "Bridge engineering", "Water systems", "Drainage solutions"]
    },
    {
      title: "Project Management",
      description: "Full-cycle project management ensuring timely delivery",
      features: ["Planning & scheduling", "Quality control", "Budget management", "Risk assessment"]
    },
  ];

  const projects = [
    {
      title: "Kilimani Residences",
      description: "50-unit luxury apartment complex in Nairobi's premium location",
      status: "Completed",
      type: "Residential"
    },
    {
      title: "Westlands Office Tower",
      description: "15-story commercial building with modern amenities",
      status: "In Progress",
      type: "Commercial"
    },
    {
      title: "Thika Highway Bridge",
      description: "Infrastructure project connecting key commercial areas",
      status: "Completed",
      type: "Infrastructure"
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
              <Building2 className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">OraBuild</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
              Leading construction company specializing in real estate development, civil engineering, and comprehensive project management across Kenya.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-button">
              Start Your Project
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
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we deliver exceptional construction and development solutions.
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

      {/* Projects Showcase */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our recent successful projects across different sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-card-soft hover:shadow-corporate transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex items-center text-primary">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">Nairobi, Kenya</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose OraBuild?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                With over a decade of experience in Kenya's construction industry, we bring expertise, reliability, and innovation to every project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Expert Craftsmanship</h3>
                    <p className="text-muted-foreground">Skilled professionals delivering quality workmanship on every project.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dedicated Team</h3>
                    <p className="text-muted-foreground">Experienced project managers and engineers ensuring smooth execution.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">On-Time Delivery</h3>
                    <p className="text-muted-foreground">Committed to meeting deadlines and exceeding client expectations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Get Your Free Quote</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  placeholder="Location"
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
                <textarea
                  placeholder="Project Details"
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

      <Footer />
    </div>
  );
};

export default OraBuild;